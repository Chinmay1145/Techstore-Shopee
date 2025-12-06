import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
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
    window.addEventListener("storage", updateCartCount);
    
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
