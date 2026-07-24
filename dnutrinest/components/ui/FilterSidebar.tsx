import { SHOP_FILTERS } from "@/lib/pages-content";
import { Button } from "@/components/ui/primitives";

/** Static filter sidebar matching the Figma (Category / Price / Dietary). */
export default function FilterSidebar() {
  return (
    <aside className="h-max w-full rounded-2xl border border-millet-border bg-white p-6 shadow-[0_10px_40px_-24px_rgba(40,175,96,0.35)] lg:w-64">
      <FilterGroup title="Category">
        {SHOP_FILTERS.category.map((c, i) => (
          <Check key={c} label={c} defaultChecked={i === 0} />
        ))}
      </FilterGroup>

      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-millet-fg">Price Range</h4>
        <input
          type="range"
          min={SHOP_FILTERS.priceMin}
          max={SHOP_FILTERS.priceMax}
          defaultValue={300}
          className="w-full accent-millet-primary"
          aria-label="Price range"
        />
        <div className="mt-1 flex justify-between text-xs text-millet-primary/60">
          <span>₹{SHOP_FILTERS.priceMin}</span>
          <span>₹{SHOP_FILTERS.priceMax}</span>
        </div>
      </div>

      <div className="mt-6">
        <FilterGroup title="Dietary Needs">
          {SHOP_FILTERS.dietary.map((d, i) => (
            <Check key={d} label={d} defaultChecked={i === 0} />
          ))}
        </FilterGroup>
      </div>

      <Button variant="primary" className="mt-6 w-full">
        Apply Filters
      </Button>
    </aside>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-millet-fg">{title}</h4>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Check({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-millet-primary/85">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 rounded border-millet-border accent-millet-primary"
      />
      {label}
    </label>
  );
}
