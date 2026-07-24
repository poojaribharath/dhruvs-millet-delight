"use client";

import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HERO_FRAME_COUNT,
  heroFramePath,
} from "@/lib/hero-config";
import { FrameLoader } from "@/lib/frame-loader";
import { drawPlaceholderFrame } from "@/lib/placeholder-frame";

/**
 * The pinned full-screen canvas that scrubs the pre-rendered hero sequence.
 *
 * Pinning is done with CSS `sticky` (the parent section is tall); GSAP
 * ScrollTrigger is used only to read a smooth scroll progress, which Lenis has
 * already eased. Each progress update maps to a frame index and redraws — so
 * forward scroll plays forward, reverse scroll plays backward, with no snapping.
 */
export default function HeroSequence({
  progress,
  triggerRef,
}: {
  progress: MotionValue<number>;
  triggerRef: React.RefObject<HTMLElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadPct, setLoadPct] = useState(0);
  const [booted, setBooted] = useState(false);
  const [placeholderMode, setPlaceholderMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const trigger = triggerRef.current;
    if (!canvas || !trigger) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    gsap.registerPlugin(ScrollTrigger);

    const loader = new FrameLoader(HERO_FRAME_COUNT, heroFramePath);
    let cssW = 0;
    let cssH = 0;
    let dpr = 1;
    let currentProgress = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = canvas.clientWidth;
      cssH = canvas.clientHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render(currentProgress);
    };

    const drawCover = (img: ImageBitmap) => {
      const iw = img.width;
      const ih = img.height;
      const scale = Math.max(cssW / iw, cssH / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      ctx.drawImage(img, (cssW - dw) / 2, (cssH - dh) / 2, dw, dh);
    };

    const render = (p: number) => {
      if (cssW === 0 || cssH === 0) return;
      // Base fill so letterboxing melts into the page backdrop.
      ctx.fillStyle = "#1A120D";
      ctx.fillRect(0, 0, cssW, cssH);

      if (loader.placeholder) {
        drawPlaceholderFrame(ctx, cssW, cssH, p);
        return;
      }

      const frame = Math.round(p * (HERO_FRAME_COUNT - 1));
      const bmp = loader.getNearest(frame);
      if (bmp) drawCover(bmp);
    };

    // Read eased scroll progress from ScrollTrigger; render + broadcast it.
    const st = ScrollTrigger.create({
      trigger,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        currentProgress = self.progress;
        progress.set(self.progress);
        render(self.progress);
      },
    });

    loader.onProgress = (loaded, total) => {
      setLoadPct(Math.round((loaded / total) * 100));
      // Repaint the current frame as soon as nearby frames decode.
      render(currentProgress);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    loader.start().then(() => {
      setBooted(true);
      setPlaceholderMode(loader.placeholder);
      render(currentProgress);
    });
    // Reveal the canvas once we have the first paintable frame.
    const bootCheck = setInterval(() => {
      if (loader.ready) {
        setBooted(true);
        setPlaceholderMode(loader.placeholder);
        render(currentProgress);
        clearInterval(bootCheck);
      }
    }, 60);

    return () => {
      clearInterval(bootCheck);
      ro.disconnect();
      st.kill();
      loader.destroy();
    };
  }, [progress, triggerRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      {/* Loading veil — a calm fade, never a spinner */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-end justify-center pb-24 transition-opacity duration-1000 ease-cinema ${
          booted && (placeholderMode || loadPct > 8) ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.62rem] uppercase tracking-luxe text-cream/40">
            Preparing the reveal
          </span>
          <div className="h-px w-40 overflow-hidden bg-cream/10">
            <div
              className="h-full bg-gold-matte/70 transition-[width] duration-500 ease-cinema"
              style={{ width: `${Math.max(loadPct, booted ? 100 : 4)}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
