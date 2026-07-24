"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-content";

/**
 * Fixed navigation with the D'NutriNest horizontal logo lockup.
 *
 * The brand wordmark is warm brown, so the bar carries a soft cream ground
 * (frosted, blurred) that matches the logo's own background and the Figma
 * header — legible over the dark cinematic hero, and it firms up slightly once
 * the user scrolls. Menu type is Inter, per the Figma design system.
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinema ${
        scrolled
          ? "border-[#c3efd7] bg-[#fbf9f3]/92 shadow-[0_4px_20px_-4px_rgba(40,175,96,0.15)] backdrop-blur-md"
          : "border-transparent bg-[#fbf9f3]/70 backdrop-blur-sm"
      } border-b`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Horizontal logo lockup — mark + name + subtext + lines, one unit */}
        <a href="#top" className="flex items-center gap-3" aria-label="D'NutriNest — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.png"
            alt="D'NutriNest"
            className="h-11 w-auto md:h-12"
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wordmark.png"
            alt="D'NutriNest — Nest of wholesome millets"
            className="hidden h-9 w-auto sm:block md:h-10"
            draggable={false}
          />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-[#186839] transition-colors duration-300 hover:text-[#b97a32]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#collection"
            className="rounded-full bg-[#1b7a43] px-5 py-2.5 text-[13px] font-semibold text-[#f9fafb] shadow-[0_4px_20px_-4px_rgba(40,175,96,0.4)] transition-colors duration-300 hover:bg-[#186839]"
          >
            Shop Now
          </a>
        </div>
      </nav>
    </header>
  );
}
