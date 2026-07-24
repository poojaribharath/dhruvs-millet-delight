import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/sections/SiteFooter";

/** Standard inner-page frame: fixed header, padded main, footer. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-millet-bg">
      <Header />
      <main className="pt-[72px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
