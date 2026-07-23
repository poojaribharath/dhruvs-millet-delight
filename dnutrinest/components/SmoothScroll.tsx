"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global smooth-scroll provider.
 *
 * Wires Lenis to GSAP's ticker and ScrollTrigger so the pinned-canvas hero
 * scrubs against the same eased scroll position the rest of the page uses.
 * This is the single source of truth for scroll on the site.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      // Slow, cinematic feel — no bounce, no elastic.
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: !prefersReduced,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    // Keep ScrollTrigger perfectly in sync with Lenis' virtual scroll.
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      // gsap ticker time is in seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Expose for debugging / nested components if ever needed.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
