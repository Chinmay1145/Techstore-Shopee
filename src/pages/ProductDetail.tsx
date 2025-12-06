import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const items = JSON.parse(cart);
      const count = items.reduce((acc: number, item: any) => acc + item.quantity, 0);
      setCartItemsCount(count);
    }
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemsCount={cartItemsCount} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemsCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));
    
    toast.success("Added to cart", {
      description: `${quantity} ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <p className="text-4xl font-bold text-foreground mb-6">
                ₹{product.price.toLocaleString()}
              </p>

              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium text-foreground">Quantity:</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="cart" 
                  size="lg" 
                  className="flex-1"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    handleAddToCart();
                    navigate("/cart");
                  }}
                >
                  Buy Now
                </Button>
              </div>

              {!product.inStock && (
                <p className="text-destructive text-sm">Out of Stock</p>
              )}
            </div>

            <Separator />

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium text-foreground">Free Delivery</p>
                <p className="text-xs text-muted-foreground">On orders above ₹500</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium text-foreground">Warranty</p>
                <p className="text-xs text-muted-foreground">1 Year Standard</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium text-foreground">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 Days Return</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
