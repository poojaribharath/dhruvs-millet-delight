import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { Breadcrumb, Pill } from "@/components/ui/primitives";
import { Toolbar, Pagination } from "@/components/ui/Toolbar";
import { ProductRow } from "@/components/ui/ProductCard";
import { SAVORY_PRODUCTS } from "@/lib/pages-content";

export const metadata: Metadata = {
  title: "Savory Snacks — D'NutriNest",
  description: "Crunchy, spiced millet snacks — khakhra, namkeen, chakli, murukku and more.",
};

export default function SavorySnacksPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Savory Snacks" }]} />

        {/* Hero banner */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-millet-fg to-millet-primary px-8 py-14 text-center text-white sm:px-14">
          <div className="flex justify-center">
            <Pill tone="light">Guilt-Free Crunch</Pill>
          </div>
          <h1 className="mt-5 text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em]">Savory Millet Snacks</h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/80">
            Crispy, spiced, and baked — traditional Indian namkeen reinvented with ancient millets. All the flavor, none of the guilt.
          </p>
        </div>

        <div className="mt-10">
          <Toolbar count={SAVORY_PRODUCTS.length} />
          <div className="mt-6 space-y-6">
            {SAVORY_PRODUCTS.map((p) => (
              <ProductRow key={p.name} product={p} />
            ))}
          </div>
          <Pagination pages={2} />
        </div>
      </div>
    </PageShell>
  );
}
