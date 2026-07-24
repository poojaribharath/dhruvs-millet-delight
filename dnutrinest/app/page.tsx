import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import StatsBand from "@/components/sections/StatsBand";
import SignatureCollection from "@/components/sections/SignatureCollection";
import WhyMillet from "@/components/sections/WhyMillet";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main id="top" className="relative bg-millet-bg">
      <Header />
      <Hero />
      <StatsBand />
      <SignatureCollection />
      <WhyMillet />
      <SiteFooter />
    </main>
  );
}
