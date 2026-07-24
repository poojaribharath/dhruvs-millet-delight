"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/site-content";
import { SectionHeader, Button } from "@/components/ui/primitives";
import { ProductCard } from "@/components/ui/ProductCard";

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
        <SectionHeader
          pill="Premium Products"
          title="Our Signature Collection"
          subtitle="Carefully crafted millet-based products that combine traditional nutrition with modern taste preferences."
        />

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
          <Button variant="glass" href="/shop" className="!text-millet-fg !border-millet-border !bg-white/60 hover:!bg-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
