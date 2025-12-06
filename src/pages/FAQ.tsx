import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI, net banking, and popular digital wallets including Paytm, PhonePe, and Google Pay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days. Express shipping is available for delivery within 1-3 business days. Delivery times may vary based on your location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and in the same condition as received. Electronics must include all accessories and documentation."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. We're working on expanding our shipping to international locations soon."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can use this number to track your package on our website or the courier's website."
    },
    {
      question: "Are your products genuine?",
      answer: "Yes, all our products are 100% authentic and sourced directly from authorized manufacturers and distributors. Each product comes with a manufacturer's warranty."
    },
    {
      question: "What if I receive a defective product?",
      answer: "If you receive a defective or damaged product, please contact us within 48 hours of delivery. We'll arrange for a replacement or full refund immediately."
    },
    {
      question: "Do you offer EMI options?",
      answer: "Yes, we offer EMI options on purchases above ₹3,000. You can choose from 3, 6, 9, or 12-month EMI plans through your credit card or select digital payment platforms."
    },
    {
      question: "How do I cancel my order?",
      answer: "You can cancel your order before it ships by contacting our customer support or through your account dashboard. Once shipped, you can refuse delivery or initiate a return after receiving the product."
    },
    {
      question: "What is the warranty on products?",
      answer: "All products come with manufacturer's warranty ranging from 6 months to 2 years depending on the product category. Extended warranty options are also available at checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-12">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
