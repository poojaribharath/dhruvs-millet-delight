"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/site-content";
import { Shield, Bolt, Leaf } from "@/components/icons";

const BADGES = [
  { icon: Shield, label: "100% Natural" },
  { icon: Bolt, label: "High Protein" },
  { icon: Leaf, label: "Gluten Free" },
];

/**
 * Transition band between the cinematic dark hero and the light-green content.
 * Carries the Figma hero's glassmorphism trust badges and the headline stats.
 */
export default function StatsBand() {
  return (
    <section id="highlights" className="relative overflow-hidden bg-[#201305] px-5 py-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 studio-backdrop opacity-80" />
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Glassmorphism badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {BADGES.map(({ icon: Icon, label }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-cream shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-millet-mint" />
              {label}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            >
              <div className="font-sans text-4xl font-bold tracking-[-0.02em] text-millet-mint sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-[0.62rem] uppercase tracking-luxe text-cream/45">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
