/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function AboutShamsStack() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-12">About ShamsStack</h1>

        <div className="markdown-body text-body-text max-w-none">
          <section>
            <p className="text-xl font-bold text-primary">
              Software reviews, comparisons, and practical guides for making better software decisions.
            </p>
            <p>Choosing software is not always as simple as looking at a feature list.</p>
            <p>
              Two products can offer similar features but differ significantly in pricing, ease of use,
              limitations, support, or who they are actually designed for. ShamsStack exists to make that decision
              a little easier.
            </p>
            <p>
              We publish software reviews, comparisons, tutorials, and practical guides covering tools that can
              help with business, productivity, marketing, security, and other everyday digital work.
            </p>
          </section>

          <section>
            <h2>What We Try to Do</h2>
            <p>Our goal is straightforward: give readers useful information before they decide whether a software product is worth their time or money.</p>
            <p>That means our articles may cover both the things a product does well and the areas where it may fall short.</p>
            <p>
              We do not believe every software product is right for everyone. A tool that works well for one type
              of user may be unnecessary, too expensive, or missing an important feature for another.
            </p>
            <p>That is why our reviews try to focus on the actual use case rather than simply repeating a product's marketing claims.</p>
          </section>

          <section>
            <h2>How We Approach Reviews</h2>
            <p>When researching a software product, we may look at factors such as:</p>
            <ul>
              <li>Features and available plans</li>
              <li>Pricing and billing structure</li>
              <li>Free plans or trial availability</li>
              <li>Ease of use</li>
              <li>Important limitations</li>
              <li>Intended users and use cases</li>
              <li>Integrations and compatibility</li>
              <li>Documentation and support information</li>
              <li>Alternatives and competing products</li>
              <li>Information provided by the software company</li>
              <li>Publicly available product information</li>
            </ul>
            <p>The exact research process can vary depending on the product and the type of article.</p>
            <p>We also recognize that software changes frequently. Features, pricing, interfaces, and policies can change after an article is published.</p>
            <p>For that reason, we try to update articles when meaningful changes come to our attention.</p>
          </section>

          <section>
            <h2>Affiliate Relationships</h2>
            <p>Some links on ShamsStack are affiliate links.</p>
            <p>
              If you click an affiliate link and subsequently make a qualifying purchase or take another
              qualifying action, we may receive a commission at no additional cost to you.
            </p>
            <p>Affiliate revenue helps support the website and its content.</p>
            <p>However, an affiliate relationship does not mean that a company can purchase a favorable review.</p>
            <p>Where relevant, we aim to make commercial relationships clear to readers.</p>
            <p>
              For more information, see our{' '}
              <Link to="/legal/affiliate-disclosure" className="text-primary font-bold underline">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2>We Don't Expect Every Product to Be a Fit</h2>
            <p>A useful review should not simply tell everyone to buy the product.</p>
            <p>Instead, we try to explain who may benefit from a product, who may not, and what readers should consider before making a decision.</p>
            <p>That can include discussing limitations, pricing concerns, missing features, or alternative solutions when those factors are relevant.</p>
          </section>

          <section>
            <h2>Corrections and Updates</h2>
            <p>If you notice information on ShamsStack that is inaccurate, outdated, or missing important context, we welcome feedback.</p>
            <p>When contacting us about a correction, please include the article URL and, where possible, the specific information that needs attention.</p>
            <p>We review reasonable correction requests and update content when appropriate.</p>
          </section>

          <section>
            <h2>Our Relationship With Software Companies</h2>
            <p>We may communicate directly with software companies, affiliate managers, public relations teams, and product representatives.</p>
            <p>A company may also provide information, documentation, product access, trial access, or other materials that help us understand its product.</p>
            <p>Receiving information or access from a company does not automatically determine the conclusions expressed in an article.</p>
            <p>Where a relationship is relevant to an article, we aim to disclose it appropriately.</p>
          </section>

          <section>
            <h2>Who ShamsStack Is For</h2>
            <p>ShamsStack is written for people who want to understand software before committing their time or money to it.</p>
            <p>Our readers may include individuals, creators, freelancers, marketers, small businesses, teams, and other people evaluating digital tools.</p>
            <p>We aim to keep our writing practical and understandable rather than filling articles with unnecessary technical language.</p>
          </section>

          <section className="mt-12 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="!mt-0 !mb-4 !text-xl">Get in Touch</h2>
            <p className="mb-0 text-sm">
              If you represent a software company and would like to discuss an affiliate partnership, product
              information, review opportunity, or another business matter, we'd be happy to hear from you.
            </p>
            <p className="mb-0 text-sm mt-2">For corrections, feedback, copyright concerns, or general questions, you can also contact us.</p>
            <p className="mb-0 text-sm mt-4">
              Website: <a href="https://shamsstack.com" className="text-primary font-bold underline">https://shamsstack.com</a><br />
              Email: <a href="mailto:shamsuzzaman@shamsstack.com" className="text-primary font-bold underline">shamsuzzaman@shamsstack.com</a>
            </p>
            <p className="mb-0 text-sm mt-4 italic">Thank you for visiting ShamsStack.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
