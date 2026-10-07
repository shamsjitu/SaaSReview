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
            About Me
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            I'm Md. Shamsuzzaman — and I believe trust comes before income.
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
            <p className="text-2xl md:text-3xl font-extrabold text-primary leading-snug">Hello, I'm Md. Shamsuzzaman, the person behind ShamsStack.</p>
            <p>
              I completed my Honours degree in Economics, but my professional interests have gradually moved
              toward the digital world. For around 5–6 years, I have been working with SEO, affiliate marketing,
              website creation, website management, content research, and online publishing.
            </p>
            <p>ShamsStack is the result of that journey.</p>
            <p>But there is something more important behind this website than SEO, traffic, or affiliate commissions.</p>
            <p className="text-xl font-bold text-primary">Trust.</p>
            <p>
              My first goal with ShamsStack is to build trust with readers and maintain that trust for the long
              term. If affiliate income comes from that trust, that is a good result. If it doesn't, I would still
              rather keep the trust than publish something I don't genuinely believe is useful.
            </p>
            <p>That principle guides how I approach the content on this website.</p>
          </section>

          <section>
            <h2>Why I Started ShamsStack</h2>
            <p>The software industry is full of tools that promise to make life easier, faster, or more productive.</p>
            <p>
              But when someone is trying to choose a software product, it can be difficult to understand what is
              actually useful and what is simply good marketing.
            </p>
            <p>I created ShamsStack to make that decision a little easier.</p>
            <p>My goal is not to tell everyone that a particular software is "the best."</p>
            <p>Instead, I try to answer practical questions such as:</p>
            <ul>
              <li>What does this software actually do?</li>
              <li>Who is it really suitable for?</li>
              <li>What are its useful features?</li>
              <li>What are its limitations?</li>
              <li>How does its pricing work?</li>
              <li>Are there important things a buyer should know before paying?</li>
              <li>How does it compare with other options?</li>
              <li>Is it worth considering for a particular type of user?</li>
            </ul>
            <p>Sometimes the right answer is that a product may be useful.</p>
            <p>Sometimes the right answer is that another option may be more suitable.</p>
            <p>I believe both conclusions are valuable.</p>
          </section>

          <section>
            <h2>My Approach to Software Reviews</h2>
            <p>I want to be completely transparent about how I work.</p>
            <p>
              I am not a professional software engineer or a full-time software tester, and I don't personally use
              every software product I write about.
            </p>
            <p>For many products, my work is primarily based on extensive research rather than pretending that I personally used every feature.</p>
            <p>That means I may study information from:</p>
            <ul>
              <li>The software company's official website and documentation</li>
              <li>Pricing and plan information</li>
              <li>Product features and limitations</li>
              <li>User-facing documentation and help resources</li>
              <li>Independent reviews and comparisons</li>
              <li>Publicly available user feedback</li>
              <li>Industry sources and other relevant information</li>
            </ul>
            <p>I then bring that information together and try to explain it in a way that is useful to someone who is considering the product.</p>
            <p>If I have personally tested or used a product, I will say so.</p>
            <p>If I have not, I will not pretend that I did.</p>
            <p>I believe being honest about the research process is more valuable than making a review sound more impressive than it really is.</p>
          </section>

          <section>
            <h2>Affiliate Marketing Is Not My Reason for Saying Something Is Good</h2>
            <p>Yes, ShamsStack may use affiliate links.</p>
            <p>
              When someone purchases a product through certain links on the website, I may receive a commission
              at no additional cost to that person.
            </p>
            <p>But I don't want an affiliate commission to decide what I say about a product.</p>
            <p>A company offering an affiliate program does not automatically mean that I will recommend its software.</p>
            <p>Likewise, a product not having an affiliate program does not automatically mean that I will ignore it.</p>
            <p>My priority is to provide information that I believe is useful to the reader.</p>
            <p>I also believe affiliate relationships should be disclosed clearly so readers can understand the relationship before deciding how much weight to give a recommendation.</p>
            <p>
              You can read the full{' '}
              <Link to="/legal/affiliate-disclosure" className="text-primary font-bold underline">Affiliate Disclosure</Link>
              {' '}and{' '}
              <Link to="/legal/editorial-methodology" className="text-primary font-bold underline">Editorial & Review Methodology</Link>
              {' '}pages for more details.
            </p>
          </section>

          <section>
            <h2>What I Will Not Do</h2>
            <p>There are many ways to make an affiliate website look successful.</p>
            <p>I could make every product sound amazing.</p>
            <p>I could hide important limitations.</p>
            <p>I could publish a positive review simply because a company offers a commission.</p>
            <p>I could make claims about using software that I never actually used.</p>
            <p>But that is not the kind of website I want to build.</p>
            <p>I would rather publish fewer articles than publish misleading ones.</p>
            <p>I cannot promise that every article will be perfect. Research can have limitations, software changes over time, and information can become outdated.</p>
            <p>
              What I can promise is that I will make a genuine effort to research the subject carefully, present
              information honestly, identify important limitations when I find them, and correct information when
              I discover that something needs to be updated.
            </p>
          </section>

          <section>
            <h2>My Long-Term Goal</h2>
            <p>I am not building ShamsStack only for today's traffic or today's affiliate commission.</p>
            <p>I want to build something that can still be trusted years from now.</p>
            <p>For me, earning from affiliate marketing would be a positive outcome of creating useful content—not a reason to compromise the content itself.</p>
            <p className="text-xl font-bold text-primary">Trust first. Income second.</p>
            <p>If I can build a website where readers feel that their time, money, and attention are respected, then I consider that a meaningful success.</p>
            <p>And if affiliate income comes from that trust, I will be grateful for it.</p>
          </section>

          <section>
            <h2>A Little About My Background</h2>
            <p>My academic background is in Economics, which has influenced the way I approach information and decision-making.</p>
            <p>Over the last 5–6 years, I have worked with areas including:</p>
            <ul>
              <li>SEO</li>
              <li>Affiliate marketing</li>
              <li>Website creation</li>
              <li>Website management</li>
              <li>Content research</li>
              <li>Online publishing</li>
              <li>Digital marketing</li>
            </ul>
            <p>I am still learning.</p>
            <p>The digital world changes quickly, and I don't believe anyone should pretend to know everything.</p>
            <p>So I continue to research, learn, test what I can, and improve the way I create content.</p>
          </section>

          <section>
            <h2>Why You Can Contact Me</h2>
            <p>If you are a reader and notice something that appears incorrect, outdated, or unclear, I welcome corrections.</p>
            <p>If you represent a software company and believe there is important information about your product that I have missed, you can also contact me.</p>
            <p>I may not always change an article simply because a company disagrees with something I wrote. However, if you can provide reliable information that changes the facts, I am happy to review it.</p>
            <p>That is part of maintaining a trustworthy website.</p>
          </section>

          <section className="mt-12 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
            <h2 className="!mt-0 !mb-4 !text-xl">Finally, Thank You</h2>
            <p className="mb-0 text-sm">If you are reading this page, thank you for taking the time to learn who is behind ShamsStack.</p>
            <p className="mb-0 text-sm mt-2">There are countless websites publishing software reviews today. I don't expect you to trust mine simply because I say it is trustworthy.</p>
            <p className="mb-0 text-sm mt-2">I believe trust should be earned through the work itself.</p>
            <p className="mb-0 text-sm mt-4">My aim is simple:</p>
            <p className="mb-0 text-sm font-bold text-primary mt-1">Research carefully. Write honestly. Be transparent. Keep improving.</p>
            <p className="mb-0 text-sm mt-2">And hopefully, earn your trust one article at a time.</p>
            <p className="mb-0 text-sm mt-4 italic">— Md. Shamsuzzaman, Founder, ShamsStack</p>
          </section>
        </div>
      </div>
    </div>
  );
}
