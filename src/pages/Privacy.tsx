/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-12">Privacy Policy</h1>
        
        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you subscribe to our newsletter, 
              fill out a contact form, or leave a comment on our reviews. This may include your name, email address, 
              and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Cookies and Tracking</h2>
            <p>
              We use cookies to improve your browsing experience. This includes Google Analytics to understand 
              site traffic and affiliate tracking cookies which help us earn commissions from our recommendations 
              at no extra cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Affiliate Disclosure</h2>
            <p>
              ShamsStack participates in various affiliate marketing programs. If you click on an affiliate link 
              and make a purchase, we may receive a commission. This does not impact our reviews, as we maintain 
              strict editorial independence.
            </p>
          </section>

          <section className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4">Questions?</h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please contact us at privacy@shamsstack.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
