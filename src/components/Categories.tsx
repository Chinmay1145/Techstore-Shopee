import { Card } from "@/components/ui/card";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide range of electronics and accessories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.id}`}>
              <Card className="group overflow-hidden border-border hover:shadow-card transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.productCount} products
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
