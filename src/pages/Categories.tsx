import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Categories = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const items = JSON.parse(cart);
      const count = items.reduce((acc: number, item: any) => acc + item.quantity, 0);
      setCartItemsCount(count);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by product categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.id}`}>
              <Card className="group overflow-hidden border-border hover:shadow-product transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
