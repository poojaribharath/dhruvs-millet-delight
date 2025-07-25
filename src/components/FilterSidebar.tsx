import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
}

const FilterSidebar = () => {
  const [filters, setFilters] = useState<FilterSection[]>([
    { id: "category", title: "Category", isOpen: true },
    { id: "dietary", title: "Dietary Needs", isOpen: true },
    { id: "price", title: "Price Range", isOpen: true },
  ]);

  const [priceRange, setPriceRange] = useState([0, 500]);

  const toggleFilter = (id: string) => {
    setFilters(filters.map(filter => 
      filter.id === id ? { ...filter, isOpen: !filter.isOpen } : filter
    ));
  };

  const categories = [
    "Laddoos & Sweets",
    "Savory Snacks",
    "Breakfast Bars",
    "Health Mixes"
  ];

  const dietaryNeeds = [
    "Gluten Free",
    "No Sugar Added",
    "High Protein",
    "High Fiber",
    "Vegan"
  ];

  return (
    <div className="w-72 bg-card border border-border rounded-xl p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-lg text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <button
            onClick={() => toggleFilter("category")}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <Label className="font-medium text-foreground">Category</Label>
            {filters.find(f => f.id === "category")?.isOpen ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          {filters.find(f => f.id === "category")?.isOpen && (
            <div className="space-y-3 mt-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <Label
                    htmlFor={category}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dietary Needs Filter */}
        <div>
          <button
            onClick={() => toggleFilter("dietary")}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <Label className="font-medium text-foreground">Dietary Needs</Label>
            {filters.find(f => f.id === "dietary")?.isOpen ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          {filters.find(f => f.id === "dietary")?.isOpen && (
            <div className="space-y-3 mt-3">
              {dietaryNeeds.map((need) => (
                <div key={need} className="flex items-center space-x-2">
                  <Checkbox id={need} />
                  <Label
                    htmlFor={need}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div>
          <button
            onClick={() => toggleFilter("price")}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <Label className="font-medium text-foreground">Price Range</Label>
            {filters.find(f => f.id === "price")?.isOpen ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          {filters.find(f => f.id === "price")?.isOpen && (
            <div className="space-y-4 mt-3">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={500}
                step={10}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Button variant="turmeric" className="w-full mt-6">
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;