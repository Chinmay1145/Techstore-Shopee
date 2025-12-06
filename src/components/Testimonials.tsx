import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Tech Enthusiast",
    rating: 5,
    comment: "Amazing quality products and super fast delivery! Got my new smartphone within 2 days. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    comment: "Best online electronics store! The customer service is excellent and prices are very competitive.",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    rating: 5,
    comment: "Purchased laptops for my entire team. Great bulk discounts and professional service throughout.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their tech needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 border-border hover:shadow-card transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
