/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Zap, Heart, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Unbiased Reviews",
    description: "We don't accept payments for positive reviews. If a software is bad, we'll tell you straight."
  },
  {
    icon: Zap,
    title: "Hands-on Testing",
    description: "Every tool listed here is tested by our team for at least 2 weeks before we publish a review."
  },
  {
    icon: Heart,
    title: "User-First Approach",
    description: "Our goal is to help you save money and increase productivity, not just to sell a product."
  },
  {
    icon: MessageSquare,
    title: "Community Support",
    description: "Have questions about a tool? Our team is always here to help you in the comments section."
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Why Readers Trust ShamsStack</h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            We are committed to transparency and providing genuine value to our readers. 
            Here is our editorial promise to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-xl mb-4">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[40px] bg-secondary text-primary flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="font-display text-2xl font-bold mb-2">Are you a Software Founder?</h4>
            <p className="font-medium opacity-80">
              Want us to review your product? We provide honest, in-depth analysis for software that adds true value.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-primary text-secondary font-bold rounded-2xl hover:bg-opacity-90 transition-all">
            Inquire for Review
          </button>
        </div>
      </div>
    </section>
  );
}
