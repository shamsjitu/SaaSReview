/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function AffiliateDisclosure() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 30, 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>
              ShamsStack may participate in affiliate programs operated by software companies, technology
              providers, and affiliate networks.
            </p>
            <p>This page explains how affiliate relationships work on our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">What Is an Affiliate Link?</h2>
            <p>Some links on ShamsStack are affiliate links.</p>
            <p>
              When you click one of these links and later make a qualifying purchase, start a qualifying
              subscription, or complete another qualifying action, ShamsStack may receive a commission from the
              company or affiliate network.
            </p>
            <p>The price you pay does not increase simply because you used an affiliate link.</p>
            <p>
              In some cases, an affiliate relationship may involve a free trial, registration, subscription,
              purchase, or another qualifying action rather than an immediate purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Why We Use Affiliate Links</h2>
            <p>Running a website requires time and resources.</p>
            <p>Affiliate commissions can help support:</p>
            <ul>
              <li>Research</li>
              <li>Writing and editing</li>
              <li>Website hosting and maintenance</li>
              <li>Content updates</li>
              <li>Software research and testing</li>
              <li>Development of new resources for readers</li>
            </ul>
            <p>Affiliate revenue allows us to continue publishing content without charging readers for every article.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Affiliate Links Do Not Automatically Mean Positive Reviews</h2>
            <p>This is important.</p>
            <p>
              A software company having an affiliate program does not mean that we are required to describe its
              product positively.
            </p>
            <p>Our reviews may discuss:</p>
            <ul>
              <li>Advantages</li>
              <li>Limitations</li>
              <li>Pricing</li>
              <li>Missing features</li>
              <li>Potential drawbacks</li>
              <li>Alternatives</li>
              <li>Different use cases</li>
              <li>Situations where the product may not be a good fit</li>
            </ul>
            <p>We believe readers are better served when commercial relationships are disclosed rather than hidden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Products or Access Provided by Companies</h2>
            <p>
              Sometimes a software company may provide product access, a trial account, demo access,
              documentation, or other information so that we can evaluate or understand its product.
            </p>
            <p>If such a relationship is relevant to an article, we aim to disclose it.</p>
            <p>Receiving access to a product does not guarantee that the resulting article will be positive.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Sponsored Content</h2>
            <p>Affiliate content and sponsored content are not necessarily the same thing.</p>
            <p>
              An affiliate relationship generally means that we may earn a commission when a reader completes a
              qualifying action through a referral link.
            </p>
            <p>
              Sponsored content involves a separate commercial arrangement in which a company may pay for content,
              placement, or another promotional activity.
            </p>
            <p>If ShamsStack publishes sponsored content, we intend to identify it clearly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Editorial Approach</h2>
            <p>We try to separate commercial relationships from editorial conclusions.</p>
            <p>
              Companies may provide factual corrections, updated pricing, product information, documentation, or
              clarification.
            </p>
            <p>We are happy to consider such information because accurate product information benefits readers.</p>
            <p>
              However, an affiliate relationship or commercial partnership does not give a company automatic
              control over our editorial conclusions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Your Choice</h2>
            <p>You are never required to use an affiliate link.</p>
            <p>If you prefer, you can visit a software company's website directly.</p>
            <p>If you do use an affiliate link from ShamsStack, you may support the website without paying an additional affiliate fee.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Transparency Matters</h2>
            <p>
              We believe readers should know when a financial relationship exists between a publisher and a
              product or service being discussed.
            </p>
            <p>That is why we aim to disclose affiliate relationships clearly rather than hiding them in fine print.</p>
            <p>
              For more information about how we approach software reviews, please see our{' '}
              <Link to="/legal/editorial-methodology" className="text-primary font-bold underline">Editorial & Review Methodology</Link>.
            </p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <p className="text-sm">
              Website: <a href="https://shamsstack.com" className="text-primary font-bold underline">https://shamsstack.com</a><br />
              Email: <a href="mailto:shamsuzzaman@shamsstack.com" className="text-primary font-bold underline">shamsuzzaman@shamsstack.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
