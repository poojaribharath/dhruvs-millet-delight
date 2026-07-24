import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { Breadcrumb } from "@/components/ui/primitives";
import FilterSidebar from "@/components/ui/FilterSidebar";
import { Toolbar, Pagination } from "@/components/ui/Toolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { SHOP_PRODUCTS } from "@/lib/pages-content";

export const metadata: Metadata = {
  title: "All Products — D'NutriNest",
  description: "Discover our complete range of healthy millet-based snacks.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />

        <header className="mt-8">
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-bold tracking-[-0.03em] text-millet-fg">
            All Products
          </h1>
          <p className="mt-2 text-[15px] text-millet-fg/75">
            Discover our complete range of healthy millet-based snacks
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <FilterSidebar />
          <div className="flex-1">
            <Toolbar count={SHOP_PRODUCTS.length} />
            <div className="mt-6 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {SHOP_PRODUCTS.map((p) => (
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
