import Link from "next/link";
import type { ReactNode } from "react";
import { Star, Leaf } from "@/components/icons";

/* ------------------------------------------------------------------ Button */
type ButtonVariant = "primary" | "turmeric" | "outline" | "glass" | "ghost";
const BTN: Record<ButtonVariant, string> = {
  primary:
    "bg-millet-primary text-white shadow-[0_8px_24px_-8px_rgba(40,175,96,0.5)] hover:bg-millet-fg",
  turmeric: "bg-millet-turmeric text-millet-fg hover:brightness-[0.97]",
  outline: "border border-millet-border bg-white text-millet-fg hover:bg-millet-card",
  glass:
    "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-millet-mint hover:text-millet-mint",
  ghost: "text-millet-fg hover:bg-millet-card",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "md",
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  size?: "sm" | "md";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const pad = size === "sm" ? "px-4 py-2 text-[13px]" : "px-6 py-3 text-sm";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${pad} ${BTN[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------- Pill */
export function Pill({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "light";
}) {
  const cls =
    tone === "light"
      ? "bg-white/10 text-white ring-white/15"
      : "bg-millet-soft/60 text-millet-fg ring-millet-border";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium ring-1 ring-inset backdrop-blur ${cls}`}
    >
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------- Badge */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-millet-soft/50 px-2.5 py-1 text-[11px] font-medium text-millet-fg">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- StarRating */
export function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span className="flex">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star
            key={s}
            className="h-3.5 w-3.5"
            style={{ color: s < Math.round(rating) ? "#eab308" : "#d7e6dc" }}
          />
        ))}
      </span>
      <span className="font-semibold text-millet-fg">{rating.toFixed(1)}</span>
      <span className="text-millet-primary/60">({reviews} reviews)</span>
    </div>
  );
}

/* ---------------------------------------------------------- SectionHeader */
export function SectionHeader({
  pill,
  title,
  subtitle,
  align = "center",
  tone = "green",
}: {
  pill?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "green" | "light";
}) {
  const wrap = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";
  const titleColor = tone === "light" ? "text-white" : "text-millet-fg";
  const subColor = tone === "light" ? "text-white/70" : "text-millet-primary/80";
  return (
    <header className={`mb-14 ${wrap}`}>
      {pill && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Pill tone={tone === "light" ? "light" : "green"}>{pill}</Pill>
        </div>
      )}
      <h2 className={`mt-5 text-[clamp(2rem,5vw,2.75rem)] font-bold tracking-[-0.03em] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-xl text-[15px] leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </header>
  );
}

/* ------------------------------------------------------------- Breadcrumb */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-millet-primary/60">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          {it.href ? (
            <Link href={it.href} className="transition-colors hover:text-millet-fg">
              {it.label}
            </Link>
          ) : (
            <span className="text-millet-fg">{it.label}</span>
          )}
          {i < items.length - 1 && <span aria-hidden>/</span>}
        </span>
      ))}
    </nav>
  );
}
