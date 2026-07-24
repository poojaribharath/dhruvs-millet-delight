"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import HeroSequence from "@/components/HeroSequence";
import HeroCaptions from "@/components/HeroCaptions";
import { HERO_SCROLL_VH } from "@/lib/hero-config";

/**
 * The cinematic hero: a tall scroll region whose sticky child stays pinned
 * full-screen while the canvas scrubs the image sequence and captions
 * cross-fade on their beats. Progress is a single shared MotionValue so the
 * canvas and the copy never drift apart.
 */
export default function Hero() {
  const triggerRef = useRef<HTMLElement>(null);
  const progress = useMotionValue(0);
  // Scroll hint fades away as soon as the journey begins.
  const hintOpacity = useTransform(progress, [0, 0.04], [1, 0]);

  return (
    <section
      ref={triggerRef}
      className="relative studio-backdrop"
      style={{ height: `${HERO_SCROLL_VH}vh` }}
      aria-label="D'NutriNest — cinematic reveal"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroSequence progress={progress} triggerRef={triggerRef} />
        <HeroCaptions progress={progress} />

        {/* Scroll hint — fades away almost immediately */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/45"
        >
          <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
          <span className="block h-9 w-px animate-pulse bg-gradient-to-b from-gold-matte/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
