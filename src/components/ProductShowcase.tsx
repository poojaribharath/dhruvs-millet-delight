import { Star, Heart, ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products-showcase.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Protein Power Mix",
      description: "High-protein millet blend with nuts and seeds",
      price: "₹299",
      originalPrice: "₹399",
      rating: 4.8,
      reviews: 156,
      tag: "Bestseller",
      benefits: ["25g Protein", "Gluten Free", "No Sugar Added"]
    },
    {
      id: 2,
      name: "Morning Energy Bars",
      description: "Nutritious breakfast bars made with finger millet",
      price: "₹249",
      originalPrice: "₹329",
      rating: 4.9,
      reviews: 203,
      tag: "New",
      benefits: ["High Fiber", "Iron Rich", "Natural Sweeteners"]
    },
    {
      id: 3,
      name: "Crunchy Millet Snacks",
      description: "Roasted millet snacks with Indian spices",
      price: "₹199",
      originalPrice: "₹259",
      rating: 4.7,
      reviews: 89,
      tag: "Popular",
      benefits: ["Low Calorie", "Antioxidants", "Heart Healthy"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent-foreground rounded-full px-4 py-2 mb-4">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted millet-based products that combine traditional nutrition 
            with modern taste preferences.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-fresh rounded-xl p-6 hover:shadow-strong transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={productsImage}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-turmeric text-turmeric-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute top-3 right-3 bg-primary-foreground/80 hover:bg-background hover:text-destructive transition-all"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-turmeric-ink fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button variant="turmeric" size="sm" className="group">
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ShoppingCart className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;