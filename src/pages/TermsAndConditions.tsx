/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 30, 2026</p>

        <div className="markdown-body text-body-text max-w-none">
          <section>
            <p>
              These Terms and Conditions govern your use of shamsstack.com ("ShamsStack," "we," "us," or "our").
            </p>
            <p>By accessing or using this website, you agree to use it responsibly and in accordance with these Terms.</p>
            <p>If you do not agree with these Terms, please do not use the website.</p>
          </section>

          <section>
            <h2>1. About ShamsStack</h2>
            <p>
              ShamsStack is an independent website that publishes software reviews, comparisons, guides,
              tutorials, and related informational content.
            </p>
            <p>
              We may also participate in affiliate programs with software companies, technology providers, and
              affiliate networks.
            </p>
          </section>

          <section>
            <h2>2. Use of the Website</h2>
            <p>You may use ShamsStack for lawful personal or business purposes.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful purposes.</li>
              <li>Attempt to interfere with the operation or security of the website.</li>
              <li>Attempt to gain unauthorized access to restricted areas or systems.</li>
              <li>Copy or reproduce substantial portions of our content without permission.</li>
              <li>Scrape, harvest, or systematically reproduce website content in a way that harms the operation of the website.</li>
              <li>Misrepresent your relationship with ShamsStack.</li>
              <li>Use our content to create misleading or fraudulent materials.</li>
            </ul>
            <p>We reserve the right to restrict access to the website where reasonably necessary to protect the website, its users, or our rights.</p>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the original written content published on ShamsStack is owned by or
              licensed to ShamsStack.
            </p>
            <p>
              This includes original articles, text, page content, graphics created for the website, branding,
              and other original materials.
            </p>
            <p>You may:</p>
            <ul>
              <li>Read our content for personal or legitimate business research.</li>
              <li>Share links to our articles.</li>
              <li>Quote reasonable portions of our content for commentary, criticism, or other lawful purposes, with appropriate attribution and a link to the original article.</li>
            </ul>
            <p>
              You may not reproduce substantial portions of our content, republish complete articles, or present
              our original content as your own without prior permission.
            </p>
            <p>Third-party names, logos, trademarks, screenshots, and product materials remain the property of their respective owners.</p>
          </section>

          <section>
            <h2>4. Software Reviews and Third-Party Products</h2>
            <p>ShamsStack reviews products and services operated by third parties.</p>
            <p>We do not own or control those products unless explicitly stated.</p>
            <p>
              A review, comparison, or mention of a product does not mean that the product company endorses
              ShamsStack or that ShamsStack represents the company.
            </p>
            <p>Product features, pricing, availability, and policies may change.</p>
          </section>

          <section>
            <h2>5. Affiliate Links</h2>
            <p>Some links on ShamsStack may be affiliate links.</p>
            <p>When a reader purchases through an affiliate link, we may receive a commission at no additional cost to the reader.</p>
            <p>Affiliate relationships do not automatically determine the editorial content of our reviews.</p>
            <p>
              For more information, please read our{' '}
              <Link to="/legal/disclaimer" className="text-primary font-bold underline">Disclaimer</Link>.
            </p>
          </section>

          <section>
            <h2>6. Accuracy of Information</h2>
            <p>We make reasonable efforts to publish useful and accurate information.</p>
            <p>
              However, we do not guarantee that every statement on the website will always be complete, current,
              or error-free.
            </p>
            <p>Software changes frequently, and third-party information can become outdated.</p>
            <p>If you identify an error, we welcome corrections and will consider reasonable requests to update inaccurate information.</p>
          </section>

          <section>
            <h2>7. External Websites</h2>
            <p>ShamsStack may link to third-party websites.</p>
            <p>Those websites operate independently from ShamsStack and may have their own terms, privacy policies, pricing, and practices.</p>
            <p>We are not responsible for third-party websites or for transactions you make with third-party companies.</p>
          </section>

          <section>
            <h2>8. No Guarantee</h2>
            <p>Your use of information provided by ShamsStack is at your own discretion.</p>
            <p>We do not guarantee that:</p>
            <ul>
              <li>A particular software product will meet your requirements.</li>
              <li>A product will remain available.</li>
              <li>A free trial or discount will remain available.</li>
              <li>A product will produce a particular business or financial result.</li>
              <li>Information on a third-party website will remain accurate or available.</li>
            </ul>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, ShamsStack and its operators shall not be responsible for
              losses or damages arising from your use of, or reliance on, information published on the website or
              from your use of third-party products or websites linked from ShamsStack.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation
              is not permitted by applicable law.
            </p>
          </section>

          <section>
            <h2>10. Changes to These Terms</h2>
            <p>We may update these Terms when necessary.</p>
            <p>The updated version will be published on this page with a revised "Last Updated" date.</p>
            <p>
              Your continued use of the website after an update means you acknowledge the updated Terms to the
              extent permitted by applicable law.
            </p>
          </section>

          <section className="mt-12 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="!mt-0 !mb-4 !text-xl">11. Contact</h2>
            <p className="mb-0 text-sm">Questions regarding these Terms may be sent to:</p>
            <p className="mb-0 text-sm mt-2">
              Website: <a href="https://shamsstack.com" className="text-primary font-bold underline">https://shamsstack.com</a><br />
              Email: <a href="mailto:shamsuzzaman@shamsstack.com" className="text-primary font-bold underline">shamsuzzaman@shamsstack.com</a>
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be interpreted in accordance with the applicable laws of{' '}
              Bangladesh, except
              where applicable law requires otherwise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
