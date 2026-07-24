import { SORT_OPTIONS } from "@/lib/pages-content";

/** "Showing N products" + sort select + grid/list view toggle. */
export function Toolbar({ count }: { count: number }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="text-sm text-millet-primary/70">Showing {count} products</span>
      <div className="flex items-center gap-3">
        <select
          aria-label="Sort products"
          className="rounded-lg border border-millet-border bg-white px-3 py-2 text-sm text-millet-fg outline-none focus:border-millet-primary"
          defaultValue={SORT_OPTIONS[0]}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <div className="flex overflow-hidden rounded-lg border border-millet-border">
          <button aria-label="Grid view" className="bg-millet-card px-2.5 py-2 text-millet-fg">
            <GridIcon />
          </button>
          <button aria-label="List view" className="border-l border-millet-border bg-white px-2.5 py-2 text-millet-primary/60">
            <ListIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Pagination({ pages = 3 }: { pages?: number }) {
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      <button className="grid h-9 w-9 place-items-center rounded-lg border border-millet-border bg-white text-millet-primary/60" aria-label="Previous">
        ‹
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-medium ${
            p === 1 ? "bg-millet-primary text-white" : "border border-millet-border bg-white text-millet-fg"
          }`}
        >
          {p}
        </button>
      ))}
      <button className="grid h-9 w-9 place-items-center rounded-lg border border-millet-border bg-white text-millet-primary/60" aria-label="Next">
        ›
      </button>
    </nav>
  );
}

const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <rect x="3" y="4" width="18" height="4" rx="1.5" /><rect x="3" y="10" width="18" height="4" rx="1.5" /><rect x="3" y="16" width="18" height="4" rx="1.5" />
  </svg>
);
