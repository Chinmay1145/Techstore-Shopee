import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useWishlist } from "@/hooks/useWishlist";
import { supabase } from "@/integrations/supabase/client";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Wishlist = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { wishlistItems, isLoading } = useWishlist();
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const items = JSON.parse(cart);
        const count = items.reduce((acc: number, item: any) => acc + item.quantity, 0);
        setCartItemsCount(count);
      }
    };

    updateCartCount();

    // Check if user is logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (!user) {
        toast.error("Please log in to view your wishlist");
        navigate("/auth");
      }
    });
  }, [navigate]);

  const handleAddToCart = (product: Product) => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItemsCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));
    
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const wishlistProducts = products.filter((p) => wishlistItems.includes(p.id));

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-accent fill-accent" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">My Wishlist</h1>
          </div>
          <p className="text-muted-foreground">
            {wishlistProducts.length} {wishlistProducts.length === 1 ? "item" : "items"} in your wishlist
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading your wishlist...</p>
          </div>
        ) : wishlistProducts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground mb-6">Your wishlist is empty</p>
            <Link to="/shop">
              <Button variant="hero" size="lg">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
