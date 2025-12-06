import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/types/product";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/hooks/useWishlist";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      await removeFromWishlist(product.id);
    } else {
      await addToWishlist(product.id);
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-product transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background/95 backdrop-blur-sm"
            onClick={handleWishlistToggle}
          >
            <Heart 
              className={`h-5 w-5 transition-all ${inWishlist ? 'fill-accent text-accent' : 'text-foreground'}`}
            />
          </Button>
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-sm font-semibold text-foreground">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</p>
          </div>
        </div>

        <Button
          variant="cart"
          className="w-full"
          disabled={!product.inStock}
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.(product);
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
