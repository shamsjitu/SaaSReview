/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>
              Welcome to ShamsStack. By accessing and using this website, you agree to the following Terms and
              Conditions. Please read them carefully before using our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Website Information</h2>
            <p>
              ShamsStack provides technology-related content, including software reviews, SaaS comparisons,
              cybersecurity guides, and product recommendations. We aim to provide accurate and helpful
              information, but we do not guarantee that all information will always be complete, updated, or
              error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Use of Content</h2>
            <p>
              All content published on ShamsStack is for informational and educational purposes only. You may
              not copy, reproduce, or distribute our content without prior permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Affiliate Disclosure</h2>
            <p>
              Some links on this website are affiliate links. This means we may earn a commission if you
              purchase a product through our links, at no additional cost to you. Our reviews and opinions are
              based on our research and evaluation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the
              content, privacy policies, security, or practices of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Product Reviews</h2>
            <p>
              We provide reviews and comparisons of software products and digital tools. Product features,
              pricing, and availability may change over time. Users should verify information from the official
              product website before making a purchase decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
            <p>
              ShamsStack is not responsible for any loss, damage, or issues resulting from the use of
              information, products, or services mentioned on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. Any changes will be posted on this
              page.
            </p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p className="text-sm">
              If you have any questions about these Terms and Conditions, please contact us through our Contact
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
