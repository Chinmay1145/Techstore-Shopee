import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Subscribed!", {
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Get the latest updates on new products, exclusive deals, and tech news delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground"
            />
            <Button type="submit" variant="hero" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
