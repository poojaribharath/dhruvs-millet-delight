"use client";

import { motion } from "framer-motion";
import { MILLET_BENEFITS, NUTRITION } from "@/lib/site-content";
import { Heart, Shield, Bolt, Brain, Sprout, Award } from "@/components/icons";

const ICONS = [Heart, Shield, Bolt, Brain, Sprout, Award];
const ICON_TINT = ["#e0574e", "#1b7a43", "#c99a1e", "#1b7a43", "#1b7a43", "#1b7a43"];
const STAT_TINT = ["#186839", "#2c9256", "#63b98c", "#c99a1e"];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WhyMillet() {
  return (
    <section
      id="why"
      className="px-5 py-24 lg:px-10"
      style={{ background: "linear-gradient(180deg,#c3efd7 0%,#a8eac7 100%)" }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-millet-fg">
            <Heart className="h-3.5 w-3.5" style={{ color: "#e0574e" }} /> Health &amp; Wellness
          </span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,2.75rem)] font-bold tracking-[-0.03em] text-millet-fg">
            Why Choose Millet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-millet-fg/70">
            Millets are ancient supergrains that have been nourishing humanity for thousands of years. Discover the science-backed benefits that make them perfect for modern healthy living.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MILLET_BENEFITS.map((b, i) => {
            const Icon = ICONS[i] ?? Heart;
            return (
              <motion.article
                key={b.title}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-3xl bg-white/95 p-7 shadow-[0_10px_40px_-18px_rgba(24,104,57,0.35)]"
              >
                <span
                  className="mb-5 grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: "#e8f7ee" }}
                >
                  <Icon className="h-6 w-6" style={{ color: ICON_TINT[i] }} />
                </span>
                <h3 className="text-lg font-bold text-millet-fg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-millet-primary/75">{b.body}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Nutritional Powerhouse — soft glass panel */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/80 via-white/40 to-[#bdedd2]/40 p-10 shadow-[0_20px_60px_-24px_rgba(24,104,57,0.4)] backdrop-blur-md sm:p-14">
          <h3 className="text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold tracking-[-0.02em] text-millet-fg">
            Nutritional Powerhouse
          </h3>
          <p className="mt-3 text-center text-sm text-millet-fg/60">{NUTRITION.note}</p>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {NUTRITION.stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold" style={{ color: STAT_TINT[i] }}>
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wide text-millet-fg/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
