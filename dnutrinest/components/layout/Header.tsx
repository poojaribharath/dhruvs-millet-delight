"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "@/lib/pages-content";
import { Eye, Heart, Cart } from "@/components/icons";

/**
 * Site-wide header with the D'NutriNest logo lockup and route-based nav.
 * Cream frosted bar (matches the logo ground + Figma header); firms up on
 * scroll. Works over the dark hero (Home) and on the light inner pages.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-cinema ${
        scrolled
          ? "border-[#c3efd7] bg-[rgba(251,249,243,0.95)] shadow-[0_4px_20px_-4px_rgba(40,175,96,0.15)] backdrop-blur-md"
          : "border-transparent bg-[rgba(251,249,243,0.85)] backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="D'NutriNest — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-lockup.png" alt="D'NutriNest — Nest of wholesome millets" className="hidden h-12 w-auto sm:block" draggable={false} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="D'NutriNest" className="h-11 w-auto sm:hidden" draggable={false} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ROUTES.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    active ? "text-millet-jaggery" : "text-millet-fg hover:text-millet-jaggery"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-millet-fg sm:flex">
            <button aria-label="Recently viewed" className="transition-colors hover:text-millet-jaggery">
              <Eye className="h-5 w-5" />
            </button>
            <IconWithBadge count={2} label="Wishlist">
              <Heart className="h-5 w-5" />
            </IconWithBadge>
            <IconWithBadge count={3} label="Cart">
              <Cart className="h-5 w-5" />
            </IconWithBadge>
          </div>
          <Link
            href="/shop"
            className="rounded-full bg-millet-primary px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(40,175,96,0.4)] transition-colors duration-300 hover:bg-millet-fg"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

function IconWithBadge({
  count,
  label,
  children,
}: {
  count: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button aria-label={label} className="relative text-millet-fg transition-colors hover:text-millet-jaggery">
      {children}
      <span className="absolute -right-1.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-millet-primary px-1 text-[10px] font-semibold text-white">
        {count}
      </span>
    </button>
  );
}
