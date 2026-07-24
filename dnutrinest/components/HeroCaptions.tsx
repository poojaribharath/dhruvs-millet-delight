"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { HERO_SCENES, type HeroScene } from "@/lib/hero-config";

/**
 * Scene captions overlaid on the pinned canvas. Each caption's opacity and
 * drift are derived directly from scroll progress, so copy cross-fades in and
 * out exactly on its narrative beat — at most one visible at a time.
 */
export default function HeroCaptions({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
      {HERO_SCENES.map((scene) => (
        <Caption key={scene.id} scene={scene} progress={progress} />
      ))}
    </div>
  );
}

function Caption({
  scene,
  progress,
}: {
  scene: HeroScene;
  progress: MotionValue<number>;
}) {
  const { start, end } = scene;
  // Fade in just after `start`, hold, fade out just before `end`.
  const fadeIn = Math.min(start + 0.035, end);
  const fadeOut = Math.max(end - 0.03, fadeIn);
  const opacity = useTransform(
    progress,
    [start - 0.02, fadeIn, fadeOut, end + 0.015],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const y = useTransform(
    progress,
    [start - 0.02, fadeIn, fadeOut, end + 0.015],
    [26, 0, 0, -22]
  );

  const isFinal = Boolean(scene.cta);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute max-w-3xl text-center [text-shadow:0_1px_30px_rgba(10,6,4,0.6),0_1px_6px_rgba(10,6,4,0.5)]"
    >
      {scene.eyebrow && (
        <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-luxe text-millet-mint/90">
          {scene.eyebrow}
        </p>
      )}
      {scene.headline && (
        <h2
          className={`font-sans font-bold tracking-[-0.03em] leading-[1.04] text-cream ${
            scene.index === "01"
              ? "text-[clamp(2.8rem,8.5vw,6.5rem)]"
              : "text-[clamp(2.2rem,6vw,4.6rem)]"
          }`}
        >
          {scene.headline}
        </h2>
      )}
      {scene.subheadline && (
        <p className="mx-auto mt-6 max-w-xl font-sans text-[clamp(1rem,1.8vw,1.35rem)] font-normal text-cream/75">
          {scene.subheadline}
        </p>
      )}

      {isFinal && scene.cta && (
        <div className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#collection"
            className="rounded-full bg-millet-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_30px_-8px_rgba(47,208,114,0.5)] transition-colors duration-500 ease-cinema hover:bg-millet-fg"
          >
            {scene.cta.primary}
          </a>
          <a
            href="#collection"
            className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-md transition-colors duration-500 ease-cinema hover:border-millet-mint hover:text-millet-mint"
          >
            {scene.cta.secondary}
          </a>
        </div>
      )}
    </motion.div>
  );
}
