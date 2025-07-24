import { Heart, Shield, Zap, Brain, Leaf, Award } from "lucide-react";

const HealthBenefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in magnesium and antioxidants that support cardiovascular health and reduce cholesterol levels.",
      color: "text-destructive"
    },
    {
      icon: Shield,
      title: "Immune Boost",
      description: "Packed with essential vitamins and minerals that strengthen your immune system naturally.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Sustained Energy",
      description: "Complex carbohydrates provide steady energy release without blood sugar spikes.",
      color: "text-turmeric"
    },
    {
      icon: Brain,
      title: "Brain Function",
      description: "B-vitamins and omega-3 fatty acids support cognitive function and mental clarity.",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Digestive Health",
      description: "High fiber content promotes healthy digestion and supports gut microbiome balance.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Weight Management",
      description: "Low glycemic index and high protein content help maintain healthy weight goals.",
      color: "text-info"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Health & Wellness</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose Millet?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Millets are ancient supergrains that have been nourishing humanity for thousands of years. 
            Discover the science-backed benefits that make them perfect for modern healthy living.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="card-fresh rounded-xl p-8 text-center hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nutritional Facts */}
        <div className="gradient-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Nutritional Powerhouse
            </h3>
            <p className="text-muted-foreground">
              Per 100g serving of our premium millet blend
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">378</div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">11g</div>
              <div className="text-sm text-muted-foreground">Protein</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">8.5g</div>
              <div className="text-sm text-muted-foreground">Fiber</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-turmeric mb-2">3mg</div>
              <div className="text-sm text-muted-foreground">Iron</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;