/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function AffiliateDisclosure() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-12">Affiliate Disclosure</h1>
        
        <div className="prose prose-lg text-body-text max-w-none space-y-8">
          <p className="text-xl font-medium leading-relaxed">
            In compliance with the FTC guidelines, please assume that any and all links on this website are affiliate links for which we receive a small commission from sales of certain items.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">What is an Affiliate Link?</h2>
            <p>
              An affiliate link is a specific URL that contains the affiliate's ID or username. In affiliate programs, 
              advertisers use affiliate links to record the traffic that is sent to the advertiser's website. 
              This process is typically handled by an affiliate network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">How does this affect you?</h2>
            <p>
              As a reader, you do not pay more when you click through an affiliate link. In fact, in many cases, 
              we have negotiated special discounts (like those on AppSumo) that are only available through our links.
            </p>
          </section>

          <section className="p-10 bg-secondary/5 rounded-[40px] border border-secondary/10">
            <h3 className="text-xl font-bold text-primary mb-4">Editorial Independence</h3>
            <p>
              Our reviews are based on our own honest opinions and experience with the products. We do not accept 
              payment for positive reviews. Our goal is to provide you with the information you need to make 
              an informed decision.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
