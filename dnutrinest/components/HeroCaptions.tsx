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
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-luxe text-gold-matte/80">
          {scene.eyebrow}
        </p>
      )}
      {scene.headline && (
        <h2
          className={`font-display font-light leading-[1.02] text-cream ${
            scene.index === "01"
              ? "text-[clamp(3rem,9vw,7.5rem)]"
              : "text-[clamp(2.2rem,6vw,5rem)]"
          }`}
        >
          {scene.headline}
        </h2>
      )}
      {scene.subheadline && (
        <p className="mx-auto mt-6 max-w-xl font-display text-[clamp(1.05rem,2vw,1.5rem)] font-light italic text-cream/70">
          {scene.subheadline}
        </p>
      )}

      {isFinal && scene.cta && (
        <div className="pointer-events-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#collection"
            className="rounded-full bg-cream px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-cocoa-900 transition-colors duration-700 ease-cinema hover:bg-gold-matte"
          >
            {scene.cta.primary}
          </a>
          <a
            href="#story"
            className="text-sm font-medium uppercase tracking-[0.18em] text-cream/75 underline-offset-8 transition-colors duration-700 ease-cinema hover:text-gold-matte hover:underline"
          >
            {scene.cta.secondary}
          </a>
        </div>
      )}
    </motion.div>
  );
}
