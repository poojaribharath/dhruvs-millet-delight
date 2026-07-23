/**
 * Hero image-sequence + narrative configuration.
 *
 * The real sequence is the 239 pre-rendered frames from the Figma "Video
 * frames" file (frame-0002 … frame-0240), re-indexed 1…239 and written to
 * /public/frames/hero as progressive JPEGs. Until those land, the canvas
 * renders procedural placeholder frames so the scrub is fully demonstrable.
 */

export const HERO_FRAME_COUNT = 239;

/** Total scroll length of the pinned hero, in viewport heights. */
export const HERO_SCROLL_VH = 480;

export const heroFramePath = (index1Based: number): string =>
  `/frames/hero/frame-${String(index1Based).padStart(4, "0")}.jpg`;

export type HeroScene = {
  id: string;
  /** Scene number label, e.g. "01". */
  index: string;
  /** Fraction of hero scroll [0..1] where the caption begins to show. */
  start: number;
  /** Fraction of hero scroll [0..1] where the caption finishes showing. */
  end: number;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  cta?: { primary: string; secondary: string };
};

/**
 * Only scenes with written copy render a caption — scenes 03/05/06 are pure
 * cinematography (restraint). Bands are chosen so at most one caption is
 * visible at a time, with calm cross-fades in the gaps.
 */
export const HERO_SCENES: HeroScene[] = [
  {
    id: "brand-reveal",
    index: "01",
    start: 0.0,
    end: 0.1,
    eyebrow: "Handcrafted Millet Cookies",
    headline: "D'NutriNest",
    subheadline: "Nest of Wholesome Millets",
  },
  {
    id: "opening-ritual",
    index: "02",
    start: 0.11,
    end: 0.22,
    eyebrow: "The Opening Ritual",
    headline: "Freshly Crafted",
    subheadline: "Slow baked with wholesome millets and jaggery.",
  },
  {
    id: "craftsmanship",
    index: "04",
    start: 0.42,
    end: 0.6,
    eyebrow: "Craftsmanship",
    headline: "Crafted with Purpose",
    subheadline: "Every ingredient has a story.",
  },
  {
    id: "final-hero",
    index: "07",
    start: 0.9,
    end: 1.0,
    headline: "Crafted Slowly. Shared Joyfully.",
    subheadline: undefined,
    cta: { primary: "Shop Collection", secondary: "Discover Our Story" },
  },
];
