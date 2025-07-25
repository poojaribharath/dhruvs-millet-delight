import { useState } from "react";
import { Grid, List, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Laddoos = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const flavors = ["All", "Ragi", "Bajra", "Jowar", "Mixed Millet"];
  
  const products = [
    {
      id: 1,
      name: "Traditional Ragi Laddoos",
      description: "Handcrafted finger millet laddoos with pure jaggery and ghee",
      price: "₹279",
      originalPrice: "₹349",
      rating: 4.8,
      reviews: 156,
      tag: "Bestseller",
      benefits: ["Calcium Rich", "Natural Sweeteners", "Gluten Free"]
    },
    {
      id: 2,
      name: "Bajra Date Laddoos",
      description: "Pearl millet laddoos sweetened with dates and nuts",
      price: "₹299",
      originalPrice: "₹379",
      rating: 4.7,
      reviews: 142,
      tag: "New",
      benefits: ["No Sugar Added", "High Fiber", "Iron Rich"]
    },
    {
      id: 3,
      name: "Jowar Coconut Laddoos",
      description: "Sorghum and coconut blend with cardamom essence",
      price: "₹259",
      originalPrice: "₹329",
      rating: 4.6,
      reviews: 98,
      benefits: ["Heart Healthy", "Antioxidants", "Natural Flavors"]
    },
    {
      id: 4,
      name: "Mixed Millet Protein Balls",
      description: "Power-packed laddoos with multiple millets and seeds",
      price: "₹329",
      originalPrice: "₹419",
      rating: 4.9,
      reviews: 203,
      tag: "Premium",
      benefits: ["25g Protein", "Superfood Blend", "Energy Boost"]
    },
    {
      id: 5,
      name: "Chocolate Ragi Laddoos",
      description: "Kids' favorite - ragi laddoos with natural cocoa",
      price: "₹289",
      originalPrice: "₹359",
      rating: 4.8,
      reviews: 167,
      tag: "Kids Special",
      benefits: ["Kid Friendly", "Calcium Rich", "Natural Cocoa"]
    },
    {
      id: 6,
      name: "Festive Special Assorted Box",
      description: "Combination of 4 different millet laddoo varieties",
      price: "₹499",
      originalPrice: "₹649",
      rating: 4.9,
      reviews: 89,
      tag: "Gift Box",
      benefits: ["Variety Pack", "Gift Ready", "Premium Quality"]
    }
  ];

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
              <BreadcrumbPage>Laddoos & Sweets</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Laddoos & Sweets
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our traditional handcrafted laddoos made with nutritious millets, 
            pure jaggery, and wholesome ingredients. A perfect blend of taste and health.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-sm font-medium text-foreground">Filter by flavor:</span>
          {flavors.map((flavor) => (
            <Button
              key={flavor}
              variant={selectedFlavor === flavor ? "turmeric" : "outline"}
              size="sm"
              onClick={() => setSelectedFlavor(selectedFlavor === flavor ? null : flavor)}
            >
              {flavor}
            </Button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Gift Bundle Callout */}
            <div className="bg-gradient-to-r from-turmeric/10 to-primary/10 border border-turmeric/20 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-turmeric/20 p-3 rounded-full">
                  <Gift className="w-6 h-6 text-turmeric" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Special Gift Pack Bundle
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get our festive assorted box with 4 different laddoo varieties. Perfect for gifting!
                  </p>
                </div>
                <Button variant="turmeric" size="sm">
                  View Bundle
                </Button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                Showing {products.length} products
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
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

            {/* Products Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
              {products.map((product) => (
                <div key={product.id} className="break-inside-avoid">
                  <ProductCard product={product} showQuickView={true} />
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
      </main>

      <Footer />
    </div>
  );
};

export default Laddoos;