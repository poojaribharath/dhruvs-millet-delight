import { useState } from "react";
import { Grid, List, Star, ShoppingCart, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import productsImage from "@/assets/products-showcase.jpg";

const SavorySnacks = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Spiced Bajra Khakhra",
      description: "Crispy pearl millet crackers infused with traditional Indian spices and herbs",
      price: "₹189",
      originalPrice: "₹229",
      rating: 4.7,
      reviews: 142,
      tag: "Bestseller",
      benefits: ["Low Fat", "High Fiber", "Gluten Free"],
      image: productsImage
    },
    {
      id: 2,
      name: "Jowar Namkeen Mix",
      description: "Crunchy sorghum-based savory mix with peanuts, curry leaves, and spices",
      price: "₹219",
      originalPrice: "₹289",
      rating: 4.6,
      reviews: 98,
      tag: "Popular",
      benefits: ["Heart Healthy", "Protein Rich", "No Preservatives"],
      image: productsImage
    },
    {
      id: 3,
      name: "Ragi Chakli Spirals",
      description: "Traditional spiral-shaped finger millet snacks with authentic South Indian flavor",
      price: "₹199",
      originalPrice: "₹259",
      rating: 4.8,
      reviews: 167,
      benefits: ["Calcium Rich", "Iron Rich", "Handmade"],
      image: productsImage
    },
    {
      id: 4,
      name: "Mixed Millet Bhel",
      description: "Healthy twist on traditional bhel with roasted millets, vegetables, and tangy chutneys",
      price: "₹179",
      originalPrice: "₹229",
      rating: 4.5,
      reviews: 89,
      tag: "New",
      benefits: ["Low Calorie", "Fiber Rich", "Digestive"],
      image: productsImage
    },
    {
      id: 5,
      name: "Foxtail Millet Murukku",
      description: "Traditional South Indian twisted snacks made with foxtail millet flour",
      price: "₹229",
      originalPrice: "₹299",
      rating: 4.7,
      reviews: 134,
      benefits: ["Antioxidants", "Gluten Free", "Traditional Recipe"],
      image: productsImage
    },
    {
      id: 6,
      name: "Little Millet Sev",
      description: "Fine, crispy noodle-like snacks made from little millet with perfect spice blend",
      price: "₹169",
      originalPrice: "₹219",
      rating: 4.4,
      reviews: 76,
      benefits: ["Light & Crispy", "No Trans Fat", "Fresh Made"],
      image: productsImage
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Savory Snacks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <img
            src={productsImage}
            alt="Variety of savory millet snacks"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-foreground/30 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  Savory Snacks
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  Discover our range of crispy, crunchy millet-based namkeens 
                  that bring authentic Indian flavors to healthy snacking.
                </p>
                <Button variant="hero" size="lg">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                Showing {products.length} products
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select defaultValue="popularity">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="hidden sm:flex items-center border border-border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className="space-y-6 mb-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card-fresh rounded-xl p-6 hover:shadow-strong transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-48 h-48 object-cover rounded-lg"
                      />
                      {product.tag && (
                        <Badge className="absolute top-3 left-3 bg-turmeric text-turmeric-foreground">
                          {product.tag}
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {product.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {benefit}
                          </Badge>
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
                        <span className="font-medium text-foreground">
                          {product.rating}
                        </span>
                        <span className="text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-x-3">
                          <span className="text-2xl font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-lg text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                        <Button 
                          variant="turmeric" 
                          onClick={() => addToCart(product.id)}
                          className="group"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        {/* Sticky Mobile Cart Button */}
        {cartItems > 0 && (
          <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
            <Button variant="turmeric" size="lg" className="w-full shadow-strong">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart ({cartItems})
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SavorySnacks;