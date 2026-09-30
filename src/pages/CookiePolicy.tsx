/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Cookie Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last Updated: September 2026</p>

        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <p>
              This Cookie Policy explains how ShamsStack uses cookies and similar tracking technologies when you
              visit our website. By continuing to use this site, you consent to the use of cookies as described
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the site
              remember information about your visit, which can make it easier to use the site again and make the
              site more useful to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Cookies</h2>
            <p>
              We use cookies for a few core purposes: to understand how visitors use our site (via analytics tools
              like Google Analytics), to remember your preferences, and to track referrals through our affiliate
              links so we can earn a commission at no extra cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Types of Cookies We Use</h2>
            <p>
              <strong>Essential cookies:</strong> required for the site to function properly.<br />
              <strong>Analytics cookies:</strong> help us understand how visitors interact with our content.<br />
              <strong>Affiliate tracking cookies:</strong> placed by our partner programs when you click an
              affiliate link, so the referring partner can attribute a sale or sign-up back to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers let you control cookies through their settings, including blocking or deleting
              them. Note that disabling cookies may affect how parts of this website function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page.
            </p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">Questions?</h2>
            <p className="text-sm">
              If you have any questions about this Cookie Policy, please contact us at privacy@shamsstack.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
