import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { Breadcrumb, Pill, Button, SectionHeader } from "@/components/ui/primitives";
import { ABOUT } from "@/lib/pages-content";
import { Leaf, Heart, Shield, Award, Star } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — D'NutriNest",
  description: "Nourishing India, one millet at a time. Our story, mission, and the people behind the delight.",
};

const VALUE_ICONS: Record<string, typeof Leaf> = { leaf: Leaf, heart: Heart, shield: Shield, award: Award };

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="py-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        </div>

        {/* Hero */}
        <section className="grid items-center gap-10 pb-16 lg:grid-cols-2">
          <div>
            <Pill>{ABOUT.hero.pill}</Pill>
            <h1 className="mt-5 text-[clamp(2.4rem,6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              <span className="text-millet-fg">{ABOUT.hero.titleTop}</span>
              <br />
              <span className="text-millet-primary">{ABOUT.hero.titleBottom}</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-millet-primary/80">{ABOUT.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="turmeric" href="#team">Meet the Team</Button>
              <Button variant="outline" href="/shop">Explore Products</Button>
            </div>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/founder.jpg" alt="D'NutriNest founder" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_30px_60px_-24px_rgba(24,104,57,0.45)]" />
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_40px_-16px_rgba(24,104,57,0.4)]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-millet-turmeric text-millet-fg">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-bold text-millet-fg">{ABOUT.hero.stat.value}</div>
                <div className="text-xs text-millet-primary/70">{ABOUT.hero.stat.label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Heritage */}
        <section className="grid gap-6 py-12 md:grid-cols-2">
          {[{ ...ABOUT.mission, icon: Star }, { ...ABOUT.heritage, icon: Leaf }].map((b) => (
            <div key={b.title} className="rounded-3xl border border-millet-border bg-white p-8 shadow-[0_14px_44px_-24px_rgba(40,175,96,0.3)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-millet-card text-millet-primary">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-millet-fg">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-millet-primary/75">{b.body}</p>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className="py-16">
          <SectionHeader pill={ABOUT.values.pill} title={ABOUT.values.title} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.items.map((v) => {
              const Icon = VALUE_ICONS[v.icon] ?? Leaf;
              return (
                <div key={v.title} className="rounded-3xl border border-millet-border bg-white p-7 text-center shadow-[0_14px_44px_-24px_rgba(40,175,96,0.3)]">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-millet-card text-millet-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-millet-fg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-millet-primary/70">{v.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <SectionHeader pill={ABOUT.timeline.pill} title={ABOUT.timeline.title} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.timeline.items.map((m) => (
              <div key={m.n} className="text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-millet-primary text-lg font-bold text-white">
                  {m.n}
                </span>
                <div className="mt-5 rounded-3xl border border-millet-border bg-white p-6 shadow-[0_14px_44px_-24px_rgba(40,175,96,0.3)]">
                  <div className="text-2xl font-bold text-millet-primary">{m.year}</div>
                  <h3 className="mt-2 text-base font-bold text-millet-fg">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-millet-primary/70">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-16">
          <SectionHeader pill={ABOUT.team.pill} title={ABOUT.team.title} subtitle={ABOUT.team.body} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.team.members.map((t) => (
              <div key={t.name} className="rounded-3xl border border-millet-border bg-white p-7 text-center shadow-[0_14px_44px_-24px_rgba(40,175,96,0.3)]">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-millet-mint to-millet-soft text-xl font-bold text-millet-fg">
                  {t.initials}
                </span>
                <h3 className="mt-5 text-base font-bold text-millet-fg">{t.name}</h3>
                <p className="mt-1 text-sm text-millet-primary/70">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-millet-fg to-millet-primary px-8 py-16 text-center text-white sm:px-14">
          <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-bold tracking-[-0.03em]">{ABOUT.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/80">{ABOUT.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="turmeric" href="/shop">Shop Collection</Button>
            <Button variant="glass" href="/">Back to Home</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
