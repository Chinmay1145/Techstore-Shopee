import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

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
  }, []);

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

  // Show products with ratings above 4.5 as "deals"
  const dealProducts = products.filter(p => p.rating >= 4.5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Limited Time Offers</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Exclusive Deals & Offers
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Save up to 40% on top-rated products. Limited stock available!
            </p>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {dealProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No deals available at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Deals;
