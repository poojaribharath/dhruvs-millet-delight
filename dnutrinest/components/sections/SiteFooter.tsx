"use client";

import Link from "next/link";
import {
  BRAND,
  FOOTER_COLUMNS,
  FOOTER_BLURB,
  LEGAL_LINKS,
  CONTACT,
} from "@/lib/site-content";
import { Leaf, Mail, Phone, Pin, Facebook, Instagram, Twitter } from "@/components/icons";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-millet-fg text-white/90">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        {/* Newsletter */}
        <div className="border-b border-white/10 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/15 backdrop-blur">
            <Leaf className="h-3.5 w-3.5" /> Stay Healthy
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-[clamp(1.8rem,5vw,2.75rem)] font-bold tracking-[-0.03em] text-white">
            Join Our Wellness Community
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
            Get exclusive recipes, health tips, and special offers delivered to your inbox.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur transition-colors focus:border-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-millet-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-millet-mint">
              <Leaf className="h-5 w-5 text-millet-mint" /> {BRAND.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">{FOOTER_BLURB}</p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-millet-turmeric hover:text-millet-fg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-millet-mint">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="grid gap-6 border-t border-white/10 py-10 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email Us", value: CONTACT.email },
            { icon: Phone, label: "Call Us", value: CONTACT.phone },
            { icon: Pin, label: "Visit Us", value: CONTACT.location },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-millet-turmeric/20 text-millet-turmeric">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-sm text-white/65">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <span>© 2026 {BRAND.name}. All rights reserved.</span>
          <span className="flex gap-3">
            {LEGAL_LINKS.map((l, i) => (
              <span key={l} className="flex gap-3">
                <a href="#" className="transition-colors hover:text-white/80">{l}</a>
                {i < LEGAL_LINKS.length - 1 && <span aria-hidden>·</span>}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
