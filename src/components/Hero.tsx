import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                New Arrivals
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Latest Tech at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Discover premium smartphones, accessories, and electronics with exclusive deals up to 40% off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/deals">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  View Deals
                </Button>
              </Link>
            </div>
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-primary-foreground/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-primary-foreground/80">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBanner}
                alt="Latest tech products"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
