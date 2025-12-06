import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = (product: Product) => {
    // Get existing cart from localStorage
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of the best tech products available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
