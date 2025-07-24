import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <HealthBenefits />
      <Footer />
    </div>
  );
};

export default Index;
