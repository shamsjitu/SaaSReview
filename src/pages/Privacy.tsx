/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 30, 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>
              Welcome to ShamsStack ("ShamsStack," "we," "us," or "our"). ShamsStack is a software-focused website
              where we publish software reviews, comparisons, guides, tutorials, and other useful content to help
              readers understand and evaluate digital products and services.
            </p>
            <p>
              This Privacy Policy explains what information may be collected when you visit shamsstack.com, how
              that information may be used, and the choices available to you.
            </p>
            <p>
              We believe privacy information should be understandable rather than filled with unnecessary legal
              language. If something in this policy is unclear, you can contact us using the details provided
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We May Collect</h2>
            <p>Depending on how you use the website, we may collect limited information such as:</p>
            <ul>
              <li>Your name or email address if you voluntarily contact us.</li>
              <li>Information you provide when submitting a form, feedback, or business inquiry.</li>
              <li>Technical information such as browser type, device type, operating system, referring page, and approximate geographic information.</li>
              <li>Website usage information, such as pages visited, links clicked, and general interaction with the website.</li>
              <li>Information collected through cookies and similar technologies.</li>
            </ul>
            <p>You do not normally need to create an account or provide personal information simply to read articles on ShamsStack.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Information</h2>
            <p>We may use information we collect to:</p>
            <ul>
              <li>Operate and maintain ShamsStack.</li>
              <li>Respond to questions, feedback, or business inquiries.</li>
              <li>Understand how visitors use the website.</li>
              <li>Improve our articles, reviews, website structure, and user experience.</li>
              <li>Detect technical problems, abuse, spam, or security issues.</li>
              <li>Measure website traffic and content performance.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We do not collect personal information simply because we can. Where information is not reasonably
              necessary for the operation of the website or a specific service, we do not intend to request it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Analytics and Third-Party Services</h2>
            <p>
              ShamsStack may use third-party services for analytics, website performance, security, advertising,
              affiliate tracking, or other legitimate website functions.
            </p>
            <p>
              These services may collect information such as browser information, device information, approximate
              location, pages visited, referral information, or other technical data depending on how the service
              operates.
            </p>
            <p>
              Third-party services operate under their own privacy policies. We encourage you to review the
              privacy policies of any third-party service you interact with.
            </p>
            <p>
              Examples may include analytics providers, hosting providers, security services, affiliate networks,
              advertising providers, and software vendors whose websites we link to.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Affiliate Links</h2>
            <p>
              Some articles on ShamsStack may contain affiliate links.
            </p>
            <p>
              If you click an affiliate link and later purchase a product or service, ShamsStack may receive a
              commission at no additional cost to you.
            </p>
            <p>
              The existence of an affiliate relationship does not mean that a company has paid us to give it a
              positive review. Our goal is to provide useful and honest information, including limitations or
              drawbacks when relevant.
            </p>
            <p>
              Affiliate relationships are explained in more detail in our{' '}
              <Link to="/legal/affiliate-disclosure" className="text-primary font-bold underline">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
            <p>ShamsStack may use cookies and similar technologies for purposes such as:</p>
            <ul>
              <li>Keeping the website functioning properly.</li>
              <li>Remembering certain preferences.</li>
              <li>Understanding website traffic.</li>
              <li>Measuring the performance of content.</li>
              <li>Supporting affiliate tracking.</li>
              <li>Improving security and website performance.</li>
            </ul>
            <p>Some cookies may be placed by third-party services.</p>
            <p>
              Where applicable, non-essential cookies may require your consent before they are used. You can also
              control cookies through your browser settings.
            </p>
            <p>
              For more information, please see our{' '}
              <Link to="/legal/cookie-policy" className="text-primary font-bold underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Links to Other Websites</h2>
            <p>
              Our articles may contain links to websites operated by other companies or organizations.
            </p>
            <p>
              If you leave ShamsStack and visit another website, that website's privacy policy and terms will
              apply to your use of that website.
            </p>
            <p>We do not control how third-party websites collect or use information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Data Retention</h2>
            <p>
              We keep personal information only for as long as reasonably necessary for the purpose for which it
              was collected, unless a longer retention period is required or permitted by applicable law.
            </p>
            <p>
              For example, if you email us about a business inquiry, we may retain the correspondence for a
              reasonable period so that we can manage the communication and maintain appropriate business records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Data Security</h2>
            <p>We take reasonable measures to protect information handled through ShamsStack.</p>
            <p>
              However, no website, server, online communication, or method of electronic storage can be
              guaranteed to be completely secure.
            </p>
            <p>For that reason, we cannot promise absolute security of information transmitted to or through the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Children's Privacy</h2>
            <p>ShamsStack is not designed specifically for children.</p>
            <p>
              We do not knowingly request or collect personal information from children for the purpose of
              creating accounts or providing services.
            </p>
            <p>
              If you believe a child has provided personal information to us, please contact us so that we can
              review the situation and take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Your Privacy Rights</h2>
            <p>Depending on where you live, you may have certain rights regarding your personal information.</p>
            <p>
              These may include rights to request access to, correction of, deletion of, or information about the
              processing of your personal data.
            </p>
            <p>The availability of these rights depends on applicable law and the circumstances of the request.</p>
            <p>To make a privacy-related request, contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy when our website, services, technology, or legal obligations
              change.
            </p>
            <p>When we make changes, we will update the "Last Updated" date at the top of this page.</p>
            <p>We encourage visitors to review this page periodically.</p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">12. Contact</h2>
            <p className="text-sm">
              If you have questions about this Privacy Policy or how ShamsStack handles information, please
              contact:
            </p>
            <p className="text-sm mt-2">
              Website: <a href="https://shamsstack.com" className="text-primary font-bold underline">https://shamsstack.com</a><br />
              Email: <a href="mailto:shamsuzzaman@shamsstack.com" className="text-primary font-bold underline">shamsuzzaman@shamsstack.com</a>
            </p>
            <p className="text-sm mt-4 italic">
              ShamsStack aims to keep its privacy practices understandable and proportionate to the way the
              website operates. We do not intend this policy to promise practices that the website does not
              actually follow.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
