import type { Product } from "@/lib/site-content";
import { Badge, StarRating, Button } from "@/components/ui/primitives";
import { HeartOutline } from "@/components/icons";

/** Grid product card — Home, Shop, Laddoos. */
export function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-millet-border bg-white shadow-[0_10px_40px_-16px_rgba(40,175,96,0.28)] transition-shadow duration-500 hover:shadow-[0_18px_50px_-16px_rgba(40,175,96,0.4)]">
      <div className="relative m-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5EEDD] to-[#EAD9B0] p-3">
        {p.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-millet-turmeric px-3 py-1 text-[11px] font-semibold text-millet-fg shadow-sm">
            {p.badge}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/70 text-millet-primary backdrop-blur transition-colors hover:text-millet-jaggery"
        >
          <HeartOutline className="h-4 w-4" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/products-showcase.jpg"
          alt={p.name}
          className="h-44 w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5">
        <h3 className="text-lg font-bold text-millet-fg">{p.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-millet-fg/75">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-3">
          <StarRating rating={p.rating} reviews={p.reviews} />
        </div>
        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-millet-fg">₹{p.price}</span>
            <span className="text-sm text-millet-fg/50 line-through">₹{p.compareAt}</span>
          </div>
          <Button variant="primary" size="sm" className="rounded-lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}

/** Horizontal list row — Savory Snacks. */
export function ProductRow({ product: p }: { product: Product }) {
  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-millet-border bg-white p-5 shadow-[0_10px_40px_-20px_rgba(40,175,96,0.28)] sm:flex-row sm:items-center">
      <div className="shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5EEDD] to-[#EAD9B0] p-2 sm:w-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/products-showcase.jpg" alt={p.name} className="h-40 w-full rounded-xl object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-millet-fg">{p.name}</h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-millet-fg/75">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-3">
          <StarRating rating={p.rating} reviews={p.reviews} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-millet-fg">₹{p.price}</span>
          <span className="text-sm text-millet-fg/50 line-through">₹{p.compareAt}</span>
        </div>
        <Button variant="turmeric" size="sm" className="rounded-lg">
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
