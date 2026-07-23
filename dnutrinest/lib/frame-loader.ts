/**
 * Progressive, off-main-thread frame loader for the hero canvas.
 *
 * - Decodes with createImageBitmap(blob), which runs off the main thread, so
 *   scrolling never stutters while frames stream in.
 * - Loads frames with a bounded concurrency pool in sequence order (the order
 *   the user scrolls through them).
 * - getNearest() lets the renderer always draw *something* — the closest
 *   already-decoded frame — so there is never a blank flash mid-load.
 */
export class FrameLoader {
  readonly count: number;
  private readonly pathFn: (i: number) => string;
  private readonly bitmaps: (ImageBitmap | null)[];
  private readonly requested: boolean[];
  loadedCount = 0;
  /** True when the real frames are absent (first frame 404s) → procedural mode. */
  placeholder = false;
  ready = false;
  onProgress?: (loaded: number, total: number) => void;

  private destroyed = false;

  constructor(count: number, pathFn: (i: number) => string) {
    this.count = count;
    this.pathFn = pathFn;
    this.bitmaps = new Array(count).fill(null);
    this.requested = new Array(count).fill(false);
  }

  /** Kick off loading. Detects placeholder mode from the first frame. */
  async start(concurrency = 6): Promise<void> {
    // Probe the first frame to decide real-vs-placeholder.
    const first = await this.fetchBitmap(1);
    if (first === "missing") {
      this.placeholder = true;
      this.ready = true;
      this.onProgress?.(0, this.count);
      return;
    }
    if (first && first !== "error") {
      this.bitmaps[0] = first;
      this.loadedCount = 1;
      this.requested[0] = true;
      this.onProgress?.(this.loadedCount, this.count);
    }
    this.ready = true;

    // Fill the rest with a bounded worker pool, in scroll order.
    let cursor = 1; // 0 already handled
    const worker = async () => {
      while (!this.destroyed && cursor < this.count) {
        const idx = cursor++;
        if (this.requested[idx]) continue;
        this.requested[idx] = true;
        const bmp = await this.fetchBitmap(idx + 1);
        if (bmp && bmp !== "error" && bmp !== "missing") {
          this.bitmaps[idx] = bmp;
          this.loadedCount++;
          this.onProgress?.(this.loadedCount, this.count);
        }
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(concurrency, this.count) }, worker)
    );
  }

  private async fetchBitmap(
    frame1Based: number
  ): Promise<ImageBitmap | "missing" | "error" | null> {
    try {
      const res = await fetch(this.pathFn(frame1Based), { cache: "force-cache" });
      if (res.status === 404) return "missing";
      if (!res.ok) return "error";
      const blob = await res.blob();
      if (this.destroyed) return null;
      return await createImageBitmap(blob);
    } catch {
      return "error";
    }
  }

  /** The closest decoded frame to `i` (0-based), searching outward. */
  getNearest(i: number): ImageBitmap | null {
    const clamped = Math.max(0, Math.min(this.count - 1, i));
    if (this.bitmaps[clamped]) return this.bitmaps[clamped];
    for (let d = 1; d < this.count; d++) {
      const lo = clamped - d;
      const hi = clamped + d;
      if (lo >= 0 && this.bitmaps[lo]) return this.bitmaps[lo];
      if (hi < this.count && this.bitmaps[hi]) return this.bitmaps[hi];
    }
    return null;
  }

  destroy() {
    this.destroyed = true;
    for (let i = 0; i < this.bitmaps.length; i++) {
      this.bitmaps[i]?.close?.();
      this.bitmaps[i] = null;
    }
  }
}
