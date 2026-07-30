import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh millet grains and healthy snacks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-2 mb-8">
            <Star className="w-5 h-5 text-turmeric" />
            <span className="text-sm font-medium">100% Natural & Organic</span>
            <Star className="w-5 h-5 text-turmeric" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Nourish Your Body with
            <span className="block gradient-fresh bg-clip-text text-transparent">
              Dhruv's Millet Delight
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Discover the power of ancient grains with our premium collection of 
            healthy, delicious millet-based snacks that fuel your wellness journey.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-medium">100% Natural</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="w-6 h-6 text-turmeric" />
              <span className="font-medium">High Protein</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Star className="w-6 h-6 text-secondary" />
              <span className="font-medium">Gluten Free</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl" className="group">
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-turmeric mb-2">50K+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Product Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5⭐</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-primary-foreground/80">Organic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-turmeric/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;