"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, BRAND } from "@/lib/site-content";

/**
 * Minimal fixed navigation. Transparent over the hero; after a little scroll it
 * settles onto a soft matte-brown bar with a hairline gold divider.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-cinema ${
        scrolled
          ? "border-b bg-cocoa-900/80 backdrop-blur-md hairline-gold"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[4.5rem] lg:px-10">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-wide text-cream"
        >
          {BRAND.name}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.16em] text-cream/70 transition-colors duration-500 ease-cinema hover:text-gold-matte"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#collection"
          className="rounded-full border border-cream/25 px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-cream/85 transition-colors duration-500 ease-cinema hover:border-gold-matte hover:text-gold-matte md:hidden lg:inline-block"
        >
          Shop
        </a>
      </nav>
    </header>
  );
}
