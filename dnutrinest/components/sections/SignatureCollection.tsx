"use client";

import { motion } from "framer-motion";
import { PRODUCTS, type Product } from "@/lib/site-content";
import { Leaf, Star, HeartOutline } from "@/components/icons";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function SignatureCollection() {
  return (
    <section id="collection" className="bg-millet-bg px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-millet-soft/60 px-4 py-1.5 text-xs font-medium text-millet-fg ring-1 ring-inset ring-millet-border backdrop-blur">
            <Leaf className="h-3.5 w-3.5" /> Premium Products
          </span>
          <h2 className="mt-6 text-[clamp(2rem,5vw,2.75rem)] font-bold tracking-[-0.03em] text-millet-fg">
            Our Signature Collection
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-millet-primary/80">
            Carefully crafted millet-based products that combine traditional nutrition with modern taste preferences.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#collection"
            className="rounded-full border border-millet-border bg-white/60 px-7 py-3 text-sm font-semibold text-millet-fg shadow-[0_4px_20px_-6px_rgba(40,175,96,0.25)] backdrop-blur transition-colors duration-300 hover:bg-white"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-millet-border bg-white shadow-[0_10px_40px_-16px_rgba(40,175,96,0.28)] transition-shadow duration-500 hover:shadow-[0_18px_50px_-16px_rgba(40,175,96,0.4)]">
      {/* Image */}
      <div className="relative m-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8f7ee] to-[#d3efdd] p-3">
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

      {/* Body */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        <h3 className="text-lg font-bold text-millet-fg">{p.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-millet-primary/75">{p.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-millet-soft/50 px-2.5 py-1 text-[11px] font-medium text-millet-fg">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-sm">
          <span className="flex text-millet-turmeric">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="h-3.5 w-3.5" style={{ color: s < Math.round(p.rating) ? "#eab308" : "#d7e6dc" }} />
            ))}
          </span>
          <span className="font-semibold text-millet-fg">{p.rating.toFixed(1)}</span>
          <span className="text-millet-primary/60">({p.reviews} reviews)</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-millet-fg">₹{p.price}</span>
            <span className="text-sm text-millet-primary/50 line-through">₹{p.compareAt}</span>
          </div>
          <button className="rounded-lg bg-millet-turmeric px-4 py-2 text-[13px] font-semibold text-millet-fg transition-transform duration-300 hover:scale-[1.04]">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
