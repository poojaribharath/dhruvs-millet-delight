import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { BRAND, HERO_STATS } from "@/lib/site-content";

export default function Home() {
  return (
    <main id="top" className="relative bg-cocoa-900">
      <Nav />
      <Hero />

      {/* Intermission — a calm resolve after the reveal. The full editorial
          sections (Ingredients, Baking Journey, Collection, Why Millets,
          Testimonials, Final CTA) build out from here next. */}
      <section
        id="story"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cocoa-900 px-6 text-center"
      >
        <div className="pointer-events-none absolute inset-0 studio-backdrop opacity-70" />
        <div className="relative">
          <p className="mb-6 text-[0.68rem] font-medium uppercase tracking-luxe text-gold-matte/80">
            {BRAND.tagline}
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.08] text-cream">
            Crafted slowly.
            <br />
            Shared joyfully.
          </h2>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-light text-cream sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[0.62rem] uppercase tracking-luxe text-cream/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-md text-xs uppercase tracking-luxe text-cream/30">
            More of the story is being crafted
          </p>
        </div>
      </section>
    </main>
  );
}
