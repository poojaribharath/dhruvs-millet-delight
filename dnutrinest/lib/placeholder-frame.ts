/**
 * Procedural placeholder frame.
 *
 * Draws a calm, brand-accurate stand-in for the real image sequence so the
 * pinned-canvas scrub can be fully evaluated before the 239 Figma frames are
 * wired in. It loosely choreographs the narrative: a matte tin emerges and
 * rotates, its lid lifts, cookies rise, and ingredients float — all in the
 * deep chocolate studio palette. Deliberately understated.
 */

const COCOA_900 = "#1A120D";
const COCOA_700 = "#2B1A13";
const GOLD = "#C9A05C";
const JAGGERY = "#B97A32";
const CREAM = "#F6F0E8";

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function seg(p: number, a: number, b: number): number {
  if (p <= a) return 0;
  if (p >= b) return 1;
  return easeInOut((p - a) / (b - a));
}

export function drawPlaceholderFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  progress: number
): void {
  const cx = w / 2;
  const cy = h * 0.52;
  const unit = Math.min(w, h);

  // --- Studio backdrop: radial cocoa fading to darkness ---
  const bg = ctx.createRadialGradient(cx, h * 0.42, unit * 0.05, cx, h * 0.5, unit * 1.1);
  bg.addColorStop(0, COCOA_700);
  bg.addColorStop(0.5, "#1f150f");
  bg.addColorStop(1, "#120b07");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // --- Soft top spotlight ---
  const spot = ctx.createRadialGradient(cx, h * 0.2, 0, cx, h * 0.2, unit * 0.9);
  spot.addColorStop(0, "rgba(201,160,92,0.10)");
  spot.addColorStop(1, "rgba(201,160,92,0)");
  ctx.fillStyle = spot;
  ctx.fillRect(0, 0, w, h);

  // Reveal the composition from darkness in the first beats.
  const reveal = seg(progress, 0.0, 0.08);

  // --- The tin ---
  const emerge = seg(progress, 0.0, 0.12);
  const tinW = unit * (0.30 + 0.04 * emerge);
  const tinH = tinW * 0.66;
  const rot = (1 - emerge) * -0.12; // settles to front-facing
  const lift = (1 - emerge) * unit * 0.06;

  ctx.save();
  ctx.globalAlpha = reveal;
  ctx.translate(cx, cy + lift);
  ctx.rotate(rot);

  // tin body
  roundRect(ctx, -tinW / 2, -tinH / 2, tinW, tinH, tinW * 0.08);
  const tinGrad = ctx.createLinearGradient(0, -tinH / 2, 0, tinH / 2);
  tinGrad.addColorStop(0, "#3a2418");
  tinGrad.addColorStop(1, "#241610");
  ctx.fillStyle = tinGrad;
  ctx.fill();

  // debossed gold ring / logo mark
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = Math.max(1, unit * 0.0016);
  ctx.globalAlpha = reveal * 0.85;
  ctx.beginPath();
  ctx.arc(0, 0, tinH * 0.28, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = reveal;

  // --- Lid lift + warm glow escaping (scene 02) ---
  const lidOpen = seg(progress, 0.1, 0.24);
  if (lidOpen > 0) {
    const glow = ctx.createRadialGradient(0, -tinH * 0.2, 0, 0, -tinH * 0.2, tinW * 0.7);
    glow.addColorStop(0, `rgba(201,160,92,${0.35 * lidOpen})`);
    glow.addColorStop(1, "rgba(201,160,92,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(-tinW, -tinH, tinW * 2, tinH * 1.5);

    // lid
    ctx.save();
    ctx.translate(0, -tinH / 2 - lidOpen * tinH * 0.55);
    roundRect(ctx, -tinW * 0.54, -tinH * 0.16, tinW * 1.08, tinH * 0.22, tinH * 0.08);
    ctx.fillStyle = "#2f1d13";
    ctx.fill();
    ctx.restore();
  }
  ctx.restore();

  // --- Cookies rising + rotating (scene 03) ---
  const rise = seg(progress, 0.22, 0.42);
  if (rise > 0) {
    const cookies = 3;
    for (let i = 0; i < cookies; i++) {
      const t = i / (cookies - 1) - 0.5;
      const ccx = cx + t * unit * 0.34;
      const ccy = cy - rise * unit * 0.14 - Math.sin((progress * 6 + i) ) * unit * 0.006;
      const r = unit * 0.075;
      drawCookie(ctx, ccx, ccy, r, rise);
    }
  }

  // --- Ingredients floating (scene 04) ---
  const floatIn = seg(progress, 0.4, 0.62);
  if (floatIn > 0) {
    ctx.save();
    ctx.globalAlpha = floatIn;
    const ingredients = 16;
    for (let i = 0; i < ingredients; i++) {
      const ang = (i / ingredients) * Math.PI * 2 + progress * 0.6;
      const rad = unit * (0.16 + 0.12 * ((i % 4) / 3)) * floatIn;
      const px = cx + Math.cos(ang) * rad;
      const py = cy + Math.sin(ang) * rad * 0.7;
      const s = unit * (0.006 + 0.004 * ((i % 3) / 2));
      ctx.beginPath();
      ctx.fillStyle = [GOLD, JAGGERY, "#7a5a3a", "#caa15d"][i % 4];
      ctx.arc(px, py, s, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // --- Warm oven glow late (scenes 06-07) ---
  const oven = seg(progress, 0.78, 0.96);
  if (oven > 0) {
    const og = ctx.createRadialGradient(cx, cy, 0, cx, cy, unit * 0.8);
    og.addColorStop(0, `rgba(185,122,50,${0.22 * oven})`);
    og.addColorStop(1, "rgba(185,122,50,0)");
    ctx.fillStyle = og;
    ctx.fillRect(0, 0, w, h);
  }

  // --- Vignette to seal edges into the page ---
  const vig = ctx.createRadialGradient(cx, cy, unit * 0.3, cx, cy, unit * 0.95);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(10,6,4,0.72)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  // --- Subtle frame counter (placeholder tell) ---
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = CREAM;
  ctx.font = `${Math.round(unit * 0.014)}px ui-monospace, monospace`;
  ctx.textAlign = "right";
  ctx.fillText(
    `PLACEHOLDER · ${(progress * 100).toFixed(0).padStart(3, "0")}%`,
    w - unit * 0.03,
    h - unit * 0.03
  );
  ctx.restore();
}

function drawCookie(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  alpha: number
): void {
  ctx.save();
  ctx.globalAlpha = alpha;
  const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
  g.addColorStop(0, "#d59a52");
  g.addColorStop(0.7, JAGGERY);
  g.addColorStop(1, "#7c4f22");
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  // raisins
  ctx.fillStyle = "#3a2412";
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(x + Math.cos(a) * r * 0.45, y + Math.sin(a) * r * 0.45, r * 0.09, 0, Math.PI * 2);
    ctx.fill();
  }
  // rim light
  ctx.strokeStyle = "rgba(201,160,92,0.5)";
  ctx.lineWidth = r * 0.05;
  ctx.beginPath();
  ctx.arc(x, y, r, -Math.PI * 0.85, -Math.PI * 0.15);
  ctx.stroke();
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
