/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Disclaimer() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 30, 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>Welcome to ShamsStack.</p>
            <p>
              ShamsStack publishes software reviews, comparisons, tutorials, buying guides, and other
              informational content about digital products and services.
            </p>
            <p>
              We want readers to understand how this website operates, particularly when a review includes an
              affiliate link or information supplied by a software company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. General Information</h2>
            <p>The information published on ShamsStack is provided for general informational and educational purposes.</p>
            <p>
              We make reasonable efforts to keep information accurate and useful, but software products, pricing,
              features, plans, policies, and availability can change.
            </p>
            <p>For that reason, information that was accurate when an article was published may change later.</p>
            <p>
              Before making a purchase or relying on an important product feature, we recommend checking the
              software company's current website and documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Affiliate Disclosure</h2>
            <p>Some links on ShamsStack are affiliate links.</p>
            <p>
              This means that if you click certain links and make a purchase or complete another qualifying
              action, we may receive a commission from the company or affiliate network.
            </p>
            <p>You do not pay extra because of an affiliate link.</p>
            <p>
              Affiliate commissions help support the operation of ShamsStack, including research, writing, website
              maintenance, and future content.
            </p>
            <p>
              We believe readers should know when a financial relationship exists. Therefore, where an article
              contains affiliate links, we aim to make that relationship clear.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Affiliate Relationships Do Not Guarantee Positive Reviews</h2>
            <p>An affiliate relationship does not automatically mean that a product will receive a positive review.</p>
            <p>Our reviews may include:</p>
            <ul>
              <li>Features we find useful.</li>
              <li>Limitations or missing features.</li>
              <li>Pricing considerations.</li>
              <li>Potential disadvantages.</li>
              <li>Alternatives worth considering.</li>
              <li>Differences between plans.</li>
              <li>Situations where a product may or may not be a good fit.</li>
            </ul>
            <p>We do not promise a company that its product will receive a favorable review in exchange for an affiliate relationship.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Independent Opinions</h2>
            <p>
              Where we express an opinion about a product, that opinion represents the writer's assessment based
              on the information, testing, research, demonstrations, documentation, or other evidence available
              to us at the time.
            </p>
            <p>We do not claim that every reader will have the same experience.</p>
            <p>
              Software performance can vary depending on device, operating system, configuration, location,
              subscription plan, integrations, and other factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Products Provided for Review</h2>
            <p>
              From time to time, a company may provide access to software, a trial account, demo access,
              promotional access, or other consideration so that we can evaluate its product.
            </p>
            <p>Receiving access to a product does not mean that the company controls the content of our review.</p>
            <p>Where such a relationship is relevant to a particular article, we aim to disclose it clearly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Sponsored Content</h2>
            <p>
              If ShamsStack publishes sponsored content, paid placements, or another form of commercial
              collaboration, we will make the commercial nature of that content clear.
            </p>
            <p>Sponsored content may be subject to different commercial terms than an independent editorial review.</p>
            <p>We do not intend to present paid advertising as an independent editorial opinion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Pricing and Offers</h2>
            <p>
              Software pricing, discounts, free trials, coupon codes, refund policies, and subscription terms can
              change without notice.
            </p>
            <p>
              When we mention a price or promotion, it should be understood as information available at the time
              the content was researched or updated.
            </p>
            <p>Please confirm the current price and terms directly with the software provider before purchasing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Results and Business Decisions</h2>
            <p>
              ShamsStack may discuss productivity, marketing, business software, security tools, and other
              products that can affect business or financial decisions.
            </p>
            <p>
              We do not guarantee that using a particular software product will produce a specific result,
              increase revenue, save a particular amount of time, improve rankings, or achieve any other
              particular outcome.
            </p>
            <p>Readers are responsible for evaluating whether a product is appropriate for their own circumstances.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Third-Party Information</h2>
            <p>
              Some articles may refer to information supplied by software companies, public documentation, user
              reports, independent research, or other third-party sources.
            </p>
            <p>We make reasonable efforts to distinguish company claims from our own observations.</p>
            <p>Where appropriate, readers should verify important claims with the original source.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. External Links</h2>
            <p>
              ShamsStack links to third-party websites for additional information, product access, documentation,
              or other purposes.
            </p>
            <p>
              We do not control those websites and are not responsible for their content, availability, privacy
              practices, pricing, policies, or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. No Professional Advice</h2>
            <p>
              Unless specifically stated otherwise, information on ShamsStack should not be considered legal,
              financial, medical, cybersecurity, or other professional advice.
            </p>
            <p>For decisions requiring professional advice, consult a qualified professional.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">12. Changes</h2>
            <p>
              We may update this Disclaimer as ShamsStack's business model, content, partnerships, or website
              features change.
            </p>
            <p>The "Last Updated" date at the top of this page indicates when this page was most recently reviewed.</p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">13. Contact</h2>
            <p className="text-sm">
              If you have a question about this Disclaimer or believe that an article contains inaccurate or
              outdated information, please contact:
            </p>
            <p className="text-sm mt-2">
              Website: <a href="https://shamsstack.com" className="text-primary font-bold underline">https://shamsstack.com</a><br />
              Email: <a href="mailto:shamsuzzaman@shamsstack.com" className="text-primary font-bold underline">shamsuzzaman@shamsstack.com</a>
            </p>
            <p className="text-sm mt-4 italic">
              We appreciate specific feedback, including the article URL and the information you believe should
              be corrected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
