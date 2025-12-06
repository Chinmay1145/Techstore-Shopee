import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: November 24, 2025</p>

          <section className="mt-8">
            <h2>Introduction</h2>
            <p>
              Welcome to TechStore. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we handle your personal data when you visit our website 
              and tell you about your privacy rights.
            </p>
          </section>

          <section className="mt-8">
            <h2>Information We Collect</h2>
            <p>We collect and process the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through payment providers)</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
              <li><strong>Usage Data:</strong> How you interact with our website, products viewed, purchase history</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Improve our website and services</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your information with:
            </p>
            <ul>
              <li>Payment processors and shipping partners to fulfill orders</li>
              <li>Service providers who help us operate our business</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal data from unauthorized access, 
              alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology.
            </p>
          </section>

          <section className="mt-8">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mt-8">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@techstore.com
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

export default PrivacyPolicy;
