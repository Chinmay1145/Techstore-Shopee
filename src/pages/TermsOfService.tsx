import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: November 24, 2025</p>

          <section className="mt-8">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using TechStore's website and services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2>Eligibility</h2>
            <p>
              You must be at least 18 years old to make purchases on our website. By placing an order, 
              you confirm that you meet this age requirement and have the legal capacity to enter into contracts.
            </p>
          </section>

          <section className="mt-8">
            <h2>Account Registration</h2>
            <p>
              To make purchases, you may need to create an account. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Providing accurate and complete information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Products and Pricing</h2>
            <ul>
              <li>All prices are listed in Indian Rupees (₹) and are subject to change without notice</li>
              <li>We strive for accuracy but errors may occur. We reserve the right to correct any pricing errors</li>
              <li>Product availability is not guaranteed and may change at any time</li>
              <li>Images are for illustration purposes and actual products may vary</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Orders and Payment</h2>
            <p>
              By placing an order, you make an offer to purchase products. We reserve the right to accept or decline any order. 
              Payment must be received in full before order processing. We accept various payment methods as displayed at checkout.
            </p>
          </section>

          <section className="mt-8">
            <h2>Shipping and Delivery</h2>
            <ul>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers to you upon delivery</li>
              <li>You are responsible for providing accurate shipping information</li>
              <li>Shipping costs are non-refundable unless the return is due to our error</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Returns and Refunds</h2>
            <p>
              Please refer to our Return Policy for detailed information about returns, exchanges, and refunds. 
              Returns must be requested within 30 days of delivery for most products.
            </p>
          </section>

          <section className="mt-8">
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of TechStore and protected by copyright and trademark laws. 
              Unauthorized use is prohibited.
            </p>
          </section>

          <section className="mt-8">
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, TechStore shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of our services or products.
            </p>
          </section>

          <section className="mt-8">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes shall be subject to 
              the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="mt-8">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services 
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mt-8">
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@techstore.com
              <br />
              Phone: +91 1234567890
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
