import type { SVGProps } from "react";

/** Minimal line-icon set (stroke = currentColor), matching the Figma design. */
const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const Leaf = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 12-9 12Z" /><path d="M8 16c2-3 5-5 9-6" /></svg>
);
export const Heart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20.8 6.6a5 5 0 0 0-8.8-2.4 5 5 0 0 0-8.8 2.4c-.6 3 1.6 5.6 3.6 7.4L12 20l5.2-5.9c2-1.9 4.2-4.5 3.6-7.5Z" /></svg>
);
export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Bolt = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" /></svg>
);
export const Brain = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 11a2.5 2.5 0 0 0 1 4.5A2.5 2.5 0 0 0 9 20a2 2 0 0 0 3-1.7V5.7A2 2 0 0 0 9 4Z" /><path d="M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 11a2.5 2.5 0 0 1-1 4.5A2.5 2.5 0 0 1 15 20a2 2 0 0 1-3-1.7V5.7A2 2 0 0 1 15 4Z" /></svg>
);
export const Sprout = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 20v-8" /><path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6Z" /><path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5Z" /></svg>
);
export const Award = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="9" r="5" /><path d="m9 13-1.5 8L12 18l4.5 3L15 13" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}><path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.3l1.4-6.7-5-4.6 6.8-.7L12 2Z" /></svg>
);
export const HeartOutline = (p: SVGProps<SVGSVGElement>) => <Heart {...p} />;
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 5c0 8 7 15 15 15l2-3-4-2-2 2c-3-1.5-5.5-4-7-7l2-2-2-4-4 1Z" /></svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 21c5-5 7-8 7-11a7 7 0 1 0-14 0c0 3 2 6 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l.5-3H14V8.5a.5.5 0 0 1 .5-.5Z" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
);
export const Cart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6h15l-1.5 9h-12L5 3H2" /><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /></svg>
);
export const Eye = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);
export const Twitter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M21 6c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4 4.5a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5a3.8 3.8 0 0 0 3 3.7c-.5.2-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 3 17a10.8 10.8 0 0 0 17-9.2c.7-.5 1.4-1.2 2-1.8Z" /></svg>
);
