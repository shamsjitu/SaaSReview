/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    id: 1,
    name: "Rahat Ahmed",
    role: "Agency Founder",
    content: "ShamsStack helps me find the best marketing tools without wasting thousands on bad subscriptions. Their comparisons saved me so much money!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rahat"
  },
  {
    id: 2,
    name: "Sadia Islam",
    role: "Product Designer",
    content: "I found my favorite design assets tool through this site. The detailed breakdown of features is exactly what a professional needs.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sadia"
  },
  {
    id: 3,
    name: "Arif Khan",
    role: "SEO Consultant",
    content: "The best place to compare SEO software. They don't just list features; they actually test the data accuracy.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=arif"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">What Our Readers Say</h2>
          <p className="text-body-text max-w-2xl mx-auto">
            Trusted by thousands of shoppers every month. Here's why people rely on our expert analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-secondary/5 border border-gray-100 hover:border-secondary transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-gray-300'}`} />
                ))}
              </div>

              <p className="text-body-text leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-body-text font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
