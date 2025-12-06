import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Package, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
              <CheckCircle className="h-24 w-24 text-accent relative animate-scale-in" />
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          <Card 
            className={`p-8 mb-8 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="font-mono font-semibold text-lg">{orderId}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="flex flex-col items-center p-4 bg-accent/10 rounded-lg">
                  <Package className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold">Processing</p>
                  <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Truck className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="font-semibold text-muted-foreground">Shipping</p>
                  <p className="text-sm text-muted-foreground">Will be shipped soon</p>
                </div>
              </div>
            </div>
          </Card>

          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link to="/orders">
              <Button variant="hero" size="lg">
                View Order Details
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
