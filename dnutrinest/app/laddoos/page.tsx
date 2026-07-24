import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { Breadcrumb } from "@/components/ui/primitives";
import FilterSidebar from "@/components/ui/FilterSidebar";
import { Toolbar, Pagination } from "@/components/ui/Toolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { LADDOO_PRODUCTS, LADDOO_FLAVORS, LADDOO_CALLOUT } from "@/lib/pages-content";
import { Leaf } from "@/components/icons";

export const metadata: Metadata = {
  title: "Laddoos & Sweets — D'NutriNest",
  description: "Traditional handcrafted laddoos made with nutritious millets and pure jaggery.",
};

export default function LaddoosPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Laddoos" }]} />

        <header className="mt-8 text-center">
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-bold tracking-[-0.03em] text-millet-fg">
            Laddoos &amp; Sweets
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-millet-fg/75">
            Indulge in our traditional handcrafted laddoos made with nutritious millets, pure jaggery, and wholesome ingredients. A perfect blend of taste and health.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-millet-fg/70">Filter by flavor:</span>
          {LADDOO_FLAVORS.map((f, i) => (
            <button
              key={f}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-millet-primary text-white"
                  : "border border-millet-border bg-white text-millet-fg hover:bg-millet-card"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <FilterSidebar />
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-millet-border bg-gradient-to-r from-[#FCF3DC] to-[#F5EEDD] px-5 py-4 text-sm text-millet-fg">
              <Leaf className="h-5 w-5 shrink-0 text-millet-primary" />
              {LADDOO_CALLOUT}
            </div>
            <Toolbar count={LADDOO_PRODUCTS.length} />
            <div className="mt-6 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {LADDOO_PRODUCTS.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
            <Pagination pages={3} />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
