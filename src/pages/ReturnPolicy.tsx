import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Return & Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: November 24, 2025</p>

          <section className="mt-8">
            <h2>30-Day Return Window</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you're not happy with your order, 
              you can return most items within 30 days of delivery for a full refund or exchange.
            </p>
          </section>

          <section className="mt-8">
            <h2>Return Eligibility</h2>
            <p>To be eligible for a return, items must meet the following conditions:</p>
            <ul>
              <li>Item must be unused and in the same condition as received</li>
              <li>Must be in original packaging with all accessories, manuals, and documentation</li>
              <li>Must include proof of purchase (order number or receipt)</li>
              <li>Return request must be initiated within 30 days of delivery</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul>
              <li>Opened software, games, or digital products</li>
              <li>Items marked as final sale or clearance</li>
              <li>Personalized or customized products</li>
              <li>Earphones, earbuds, or any items that come in direct contact with ears (unless defective)</li>
              <li>Gift cards and promotional items</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>How to Initiate a Return</h2>
            <ol>
              <li>Log in to your account and go to Order History</li>
              <li>Select the order containing the item you wish to return</li>
              <li>Click "Return Item" and select the reason for return</li>
              <li>Print the return shipping label provided</li>
              <li>Pack the item securely in its original packaging</li>
              <li>Attach the shipping label and drop off at the nearest courier location</li>
            </ol>
          </section>

          <section className="mt-8">
            <h2>Defective or Damaged Items</h2>
            <p>
              If you receive a defective or damaged product, please contact us within 48 hours of delivery. 
              We'll arrange for immediate replacement or full refund, including return shipping costs. 
              Please provide photos of the damage or defect when reporting.
            </p>
          </section>

          <section className="mt-8">
            <h2>Refund Process</h2>
            <ul>
              <li>Once we receive your returned item, we'll inspect it within 2-3 business days</li>
              <li>If approved, your refund will be processed to the original payment method</li>
              <li>Refunds typically appear in your account within 5-7 business days</li>
              <li>Original shipping charges are non-refundable (unless the return is due to our error)</li>
              <li>You'll receive an email confirmation once your refund is processed</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Exchanges</h2>
            <p>
              We currently don't offer direct exchanges. If you need a different item, please return the original 
              item for a refund and place a new order for the desired product.
            </p>
          </section>

          <section className="mt-8">
            <h2>Return Shipping Costs</h2>
            <ul>
              <li>You are responsible for return shipping costs unless the return is due to our error or a defective product</li>
              <li>We recommend using a trackable shipping service</li>
              <li>We are not responsible for items lost or damaged during return shipping</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Warranty Returns</h2>
            <p>
              For products covered by manufacturer's warranty, defects that occur after 30 days should be 
              handled directly with the manufacturer. Contact information is included with your product documentation.
            </p>
          </section>

          <section className="mt-8">
            <h2>Restocking Fee</h2>
            <p>
              A restocking fee of 10% may apply to opened electronics or items returned without original packaging. 
              This fee does not apply to defective items or returns due to our error.
            </p>
          </section>

          <section className="mt-8">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Return Policy, please contact us at:
              <br />
              Email: returns@techstore.com
              <br />
              Phone: +91 1234567890
              <br />
              Hours: Monday-Friday, 9:00 AM - 6:00 PM IST
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
