import { useState } from "react";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

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
      benefits: ["High Fiber", "Iron Rich"]
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
      benefits: ["Low Calorie", "Antioxidants"]
    },
    {
      id: 4,
      name: "Ragi Laddoos",
      description: "Traditional laddoos made with finger millet and jaggery",
      price: "₹279",
      originalPrice: "₹349",
      rating: 4.6,
      reviews: 124,
      benefits: ["Calcium Rich", "Natural Sweeteners"]
    },
    {
      id: 5,
      name: "Bajra Khakhra",
      description: "Crispy pearl millet crackers with herbs",
      price: "₹189",
      originalPrice: "₹229",
      rating: 4.5,
      reviews: 67,
      benefits: ["Fiber Rich", "Low Fat"]
    },
    {
      id: 6,
      name: "Jowar Namkeen",
      description: "Crunchy sorghum-based savory snacks",
      price: "₹219",
      originalPrice: "₹289",
      rating: 4.7,
      reviews: 98,
      benefits: ["Gluten Free", "Heart Healthy"]
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
              <BreadcrumbPage>Shop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Discover our complete range of healthy millet-based snacks
            </p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className={`hidden md:block ${showFilters ? 'block' : 'hidden'} md:block`}>
            <FilterSidebar />
          </div>

          {/* Mobile Filter Sidebar */}
          {showFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-80 bg-background overflow-y-auto p-4">
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                Showing {products.length} products
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48" aria-label="Sort products">
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
                    aria-label="Grid view"
                    aria-pressed={viewMode === 'grid'}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="sm"
                    aria-label="List view"
                    aria-pressed={viewMode === 'list'}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 mb-12 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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
                  <PaginationLink href="#">3</PaginationLink>
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

export default Shop;