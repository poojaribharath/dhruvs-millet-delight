import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productsImage from "@/assets/products-showcase.jpg";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    rating: number;
    reviews: number;
    tag?: string;
    benefits?: string[];
    image?: string;
  };
  showQuickView?: boolean;
}

const ProductCard = ({ product, showQuickView = false }: ProductCardProps) => {
  return (
    <div className="card-fresh rounded-xl p-4 hover:shadow-strong transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image || productsImage}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Tag */}
        {product.tag && (
          <Badge className="absolute top-3 left-3 bg-turmeric text-turmeric-foreground">
            {product.tag}
          </Badge>
        )}
        
        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="bg-primary-foreground/90 hover:bg-background hover:text-destructive transition-all"
          >
            <Heart className="w-4 h-4" />
          </Button>
          {showQuickView && (
            <Button
              variant="ghost"
              size="icon"
              className="bg-primary-foreground/90 hover:bg-background transition-all"
            >
              <Eye className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Benefits */}
        {product.benefits && (
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary"
              >
                {benefit}
              </Badge>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-turmeric-ink fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-foreground">
            {product.rating}
          </span>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="font-bold text-primary">
              {product.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          </div>
          <Button variant="turmeric" size="sm" className="group">
            <ShoppingCart className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;