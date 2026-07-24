"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ROUTES } from "@/lib/pages-content";
import { Eye, Heart, Cart } from "@/components/icons";

/**
 * Site-wide header — Apple-style frosted glass (heavy backdrop blur +
 * saturation, translucent ground, hairline border). Route-aware links with an
 * active state, a compact action cluster, and a burger menu on small screens.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ease-cinema ${
        scrolled || open
          ? "border-millet-border/60 bg-[rgba(250,248,244,0.72)]"
          : "border-millet-border/25 bg-[rgba(250,248,244,0.55)]"
      } backdrop-blur-2xl backdrop-saturate-150`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="D'NutriNest — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-lockup.png" alt="D'NutriNest — Nest of wholesome millets" className="hidden h-12 w-auto sm:block" draggable={false} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="D'NutriNest" className="h-11 w-auto sm:hidden" draggable={false} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ROUTES.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  isActive(link.href) ? "text-millet-jaggery" : "text-millet-fg hover:text-millet-jaggery"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
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
            className="rounded-full bg-millet-primary px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(123,144,68,0.5)] transition-colors duration-300 hover:bg-millet-fg"
          >
            Shop Now
          </Link>

          {/* Burger — tablet & mobile */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-millet-fg transition-colors hover:bg-millet-card/60 lg:hidden"
          >
            <Burger open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile glass panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-millet-border/40 lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {NAV_ROUTES.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-millet-card/70 text-millet-jaggery"
                        : "text-millet-fg hover:bg-millet-card/50"
                    }`}
                  >
                    {link.label}
                    <span aria-hidden className="text-millet-straw">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mx-auto flex max-w-7xl items-center gap-5 border-t border-millet-border/40 px-6 py-4 text-millet-fg">
              <button aria-label="Recently viewed" className="hover:text-millet-jaggery">
                <Eye className="h-5 w-5" />
              </button>
              <IconWithBadge count={2} label="Wishlist">
                <Heart className="h-5 w-5" />
              </IconWithBadge>
              <IconWithBadge count={3} label="Cart">
                <Cart className="h-5 w-5" />
              </IconWithBadge>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

/** Animated hamburger ↔ close icon. */
function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
        }`}
      />
    </span>
  );
}
