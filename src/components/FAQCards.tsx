/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Is AppSumo legit?",
    a: "Absolutely. AppSumo has been around since 2010 and has saved entrepreneurs millions of dollars. They offer a 60-day no-questions-asked refund policy on almost every deal."
  },
  {
    q: "How often do you update the deals?",
    a: "We update our list weekly. Every Monday, we scan the AppSumo marketplace for new launches and remove deals that have ended."
  },
  {
    q: "What is a 'Lifetime Deal' (LTD)?",
    a: "An LTD means you pay once and get access to the software forever. No monthly subscriptions. It's usually offered by startups to gain early adopters."
  },
  {
    q: "Is AppSumo Plus worth it?",
    a: "If you buy more than 2-3 deals a year, yes. For $99/year, you get 10% off every purchase and access to exclusive 'Plus-only' deals."
  }
];

export default function FAQCards() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">SaaS & AppSumo FAQs</h2>
          <p className="text-body-text italic">New to AppSumo? Here's what you need to know.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="mt-1">
                  <HelpCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-3">{faq.q}</h4>
                  <p className="text-body-text leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
