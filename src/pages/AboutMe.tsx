/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/siteData';

export default function AboutMe() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <header className="bg-primary py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary mb-6">
            About ShamsStack
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Independent Research. Honest Reviews. Better Software Decisions.
          </p>
        </motion.div>
      </header>

      <div className="-mt-20 relative z-10 mb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-4 mb-6">
                  {SITE_DATA.author.bio.split('\n\n').map((para, i) => (
                    <p key={i} className="text-body-text text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <Link to="/company/contact" className="flex items-center gap-2 px-6 py-3 bg-primary text-secondary rounded-xl font-bold hover:bg-opacity-90 transition-all">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Link>
                  <a href="https://www.linkedin.com/in/md-shamsuzzaman-4002201a4/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-primary rounded-xl hover:bg-secondary transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto bg-white">
                <img
                  src={SITE_DATA.author.image}
                  alt={SITE_DATA.author.name}
                  className="w-full h-full object-contain p-4 sm:p-6 lg:p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="markdown-body text-body-text max-w-none">
          <section>
            <p>
              Choosing the right software is not always easy. A tool may look impressive on its official website, but
              that does not necessarily tell you what it is like to use, where it falls short, or whether it is worth
              the price.
            </p>
            <p>That is why I created ShamsStack.</p>
            <p>
              I'm Md. Shamsuzzaman, the person behind ShamsStack. I have an Honours degree in Economics and around five
              to six years of experience in SEO, affiliate marketing, website creation, and website management.
            </p>
            <p>
              Through ShamsStack, I research software products and publish reviews to help readers understand what a
              tool offers, what it may be good for, and what they should consider before making a purchase.
            </p>
            <p>
              My aim is not to convince everyone to buy a particular product. It is to give readers useful information
              so they can make their own decisions.
            </p>
            <p>
              <strong>Trust comes before income.</strong> That is the principle I want to follow in every article I
              publish.
            </p>
          </section>

          <section>
            <h2>Why I Started ShamsStack</h2>
            <p>
              Software reviews can influence how people spend their money. A good review should help someone understand
              a product, not simply repeat what the company says about itself.
            </p>
            <p>
              I wanted ShamsStack to be a place where readers could research software before deciding whether to pay for
              it.
            </p>
            <p>When I cover a product, I try to answer practical questions:</p>
            <ul>
              <li>What does the software actually offer?</li>
              <li>Who is it designed for?</li>
              <li>Which features may be useful?</li>
              <li>What are its limitations or potential drawbacks?</li>
              <li>Is the pricing suitable for the people it targets?</li>
              <li>Are there alternatives worth considering?</li>
              <li>What should a buyer check before making a decision?</li>
            </ul>
            <p>
              Not every product is right for every person or business. A tool that works well for one user may be
              unsuitable for another because of its price, features, needs, or experience level.
            </p>
            <p>
              I want my articles to help readers understand those differences rather than make every product sound like
              the perfect choice.
            </p>
          </section>

          <section>
            <h2>How I Research Software</h2>
            <p>
              I take a research-based approach to software reviews. The sources I use depend on the product and the
              information available, but I generally look at the following areas.
            </p>

            <h3>1. The Official Website and Documentation</h3>
            <p>
              I start with the product's official website to understand what it does, who it serves, and how the company
              presents its features.
            </p>
            <p>
              Where available, I also check product documentation, feature descriptions, pricing pages, and relevant
              help materials. These sources can explain how a tool is intended to work and which features are included
              in different plans.
            </p>
            <p>
              However, a company's own description is not the same as independent evidence of how well a product
              performs. I keep that distinction in mind when writing.
            </p>

            <h3>2. User Reviews on Trustpilot, G2, and Reddit</h3>
            <p>
              Official product pages tell only part of the story. Feedback from people who have used a product can offer
              a different perspective.
            </p>
            <p>
              Where relevant, I check user discussions and reviews on platforms such as Trustpilot, G2, and Reddit. I
              look at both positive and negative experiences rather than selecting only comments that support a
              favourable conclusion.
            </p>
            <p>
              Positive reviews may help identify features users appreciate or problems a product solves for them.
              Negative feedback may point to concerns about pricing, support, usability, reliability, or other parts of
              the experience.
            </p>
            <p>
              I also consider the context of a comment. One person's complaint does not automatically prove that a
              product has a widespread problem, just as one positive review does not prove that everyone will be
              satisfied.
            </p>
            <p>
              When several independent discussions raise similar concerns, those concerns may deserve closer attention.
              I aim to present user feedback fairly and avoid treating individual opinions as established facts.
            </p>
            <p>
              User reviews are not always available, detailed, or consistent. When I cannot find enough useful
              feedback, I do not pretend otherwise.
            </p>

            <h3>3. Features, Pricing, and Limitations</h3>
            <p>
              I look beyond a feature list to understand what the available information tells readers about the
              product.
            </p>
            <p>
              Pricing is an important part of that process. A tool may offer useful features, but its cost, plan
              restrictions, usage limits, or additional charges may affect whether it makes sense for a particular
              buyer.
            </p>
            <p>
              When the information is available, I explain relevant differences between plans and point out limitations
              that readers should know about.
            </p>
            <p>If a detail is unclear or cannot be confirmed from reliable sources, I avoid presenting a guess as a fact.</p>

            <h3>4. Comparing Alternatives</h3>
            <p>
              Sometimes, the best way to understand a product is to compare it with other tools serving a similar
              purpose.
            </p>
            <p>
              When useful, I look at differences in features, pricing, intended users, and available options. The aim is
              not to declare one product the winner in every situation, but to explain which differences may matter when
              choosing between them.
            </p>
            <p>
              An alternative that suits a small business may not be the best fit for a larger team. Likewise, a more
              expensive product is not automatically a better choice.
            </p>

            <h3>5. Separating Facts From Opinions</h3>
            <p>
              I try to make a clear distinction between information confirmed through available sources, claims made by
              the software company, feedback shared by users, and my own analysis.
            </p>
            <p>These are not always the same thing.</p>
            <p>
              For example, a company may advertise a particular benefit, while user discussions reveal concerns about a
              related feature. Both may be relevant to a buyer, but they should not be presented as though they are the
              same kind of evidence.
            </p>
            <p>
              My goal is to give readers enough context to understand what is known, what users have reported, and what
              remains uncertain.
            </p>
          </section>

          <section>
            <h2>Do I Personally Test Every Software Product?</h2>
            <p>No. I do not claim to have personally tested every product covered on ShamsStack.</p>
            <p>
              Some of my reviews are based on research using official documentation, product information, pricing
              details, user reviews, and other relevant sources. The available evidence varies from one product to
              another.
            </p>
            <p>
              I believe it is important to be clear about this because researching a product is not the same as using it
              firsthand.
            </p>
            <p>
              I will not invent personal experiences, claim to have tested features I have not tested, or present
              research-based findings as results from my own hands-on testing.
            </p>
            <p>
              Where I have not personally used a product, readers should understand that the review is based on research
              rather than direct experience.
            </p>
            <p>
              I would rather be open about that limitation than make a claim simply to make an article sound more
              convincing.
            </p>
          </section>

          <section>
            <h2>How I Approach Recommendations</h2>
            <p>
              I do not believe a useful software review should focus only on a product's strengths.
            </p>
            <p>
              Readers also need to understand the drawbacks, costs, restrictions, and situations in which a product may
              not be the right choice.
            </p>
            <p>When the available evidence supports it, I discuss:</p>
            <ul>
              <li>The main features and potential benefits</li>
              <li>Limitations and possible drawbacks</li>
              <li>Pricing and plan differences</li>
              <li>Relevant feedback from users</li>
              <li>Alternatives worth comparing</li>
              <li>The types of users or businesses that may benefit from the product</li>
            </ul>
            <p>
              I do not assume that a product is suitable for everyone. My aim is to explain what the available
              information suggests and allow readers to decide whether it fits their needs.
            </p>
            <p>
              Software products can also change over time. Features, pricing, and terms may be updated, so I encourage
              readers to check the official website before making a purchase.
            </p>
            <p>
              I cannot guarantee that every detail will always remain current or that every article will be free from
              mistakes. However, I want to correct errors when they are identified and improve articles when better
              information becomes available.
            </p>
          </section>

          <section>
            <h2>How ShamsStack Earns Money</h2>
            <p>
              Some links on ShamsStack may be affiliate links. If you purchase a product through one of these links, I
              may earn a commission at no additional cost to you.
            </p>
            <p>
              Affiliate commissions can help support the time and work involved in researching and publishing content.
              However, earning a commission should not be a reason to hide a product's limitations or present it as a
              better choice than the evidence supports.
            </p>
            <p>
              I want readers to be able to understand both the benefits and the drawbacks of a product, whether or not
              an affiliate relationship is involved.
            </p>
            <p>
              If a product has limitations worth knowing about, I believe readers should be told about them. Hiding
              relevant information would work against the trust I want to build through ShamsStack.
            </p>
            <p>
              For more details, please read the{' '}
              <a href="https://shamsstack.com/disclaimer" className="text-primary font-bold underline">Affiliate Disclosure</a>
              {' '}and{' '}
              <a href="https://shamsstack.com/privacy-policy" className="text-primary font-bold underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>My Commitment to Readers</h2>
            <p>I run ShamsStack with a few straightforward principles in mind.</p>
            <p>
              <strong>Honesty:</strong> I will not claim to have personally tested a product when I have not.
            </p>
            <p>
              <strong>Transparency:</strong> I aim to make the basis of my research clear and disclose affiliate
              relationships where applicable.
            </p>
            <p>
              <strong>Balance:</strong> I will consider both positive and negative information rather than focusing only
              on a product's selling points.
            </p>
            <p>
              <strong>Careful research:</strong> I will use relevant sources, check important details where possible, and
              avoid presenting unsupported claims as facts.
            </p>
            <p>
              <strong>Continuous improvement:</strong> When I discover an error or receive credible information that
              changes my understanding of a product, I want to review the content and make corrections where needed.
            </p>
            <p>
              These principles do not mean every article will be perfect. They describe the standards I want to work
              towards and maintain.
            </p>
            <p>
              Building trust takes time, and I understand that it cannot be achieved through words alone. It depends on
              how consistently those words are reflected in the work.
            </p>
          </section>

          <section>
            <h2>Get in Touch</h2>
            <p>
              If you have a question about an article, notice an error, or want to share your experience with a product
              covered on ShamsStack, I welcome your feedback.
            </p>
            <p>
              Reader comments and corrections can help identify information that needs clarification or updating.
            </p>
            <p>You can get in touch through the contact page.</p>
            <p>
              Thank you for taking the time to learn about ShamsStack and how I approach software research.
            </p>
            <p>
              <strong>My goal is simple: research carefully, write honestly, and help readers make informed decisions.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
