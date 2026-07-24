import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/primitives";
import { Leaf } from "@/components/icons";
import { NOT_FOUND } from "@/lib/pages-content";

export const metadata: Metadata = { title: "Page not found — D'NutriNest" };

export default function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto grid min-h-[70vh] max-w-xl place-items-center px-5 py-20 text-center">
        <div>
          <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-millet-card text-millet-primary">
            <Leaf className="h-11 w-11" />
          </span>
          <div className="mt-6 text-6xl font-bold tracking-[-0.04em] text-millet-fg">{NOT_FOUND.code}</div>
          <h1 className="mt-4 text-2xl font-bold text-millet-fg">{NOT_FOUND.title}</h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-millet-primary/75">{NOT_FOUND.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/">Back to Home</Button>
            <Button variant="outline" href="/shop">Browse Products</Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
