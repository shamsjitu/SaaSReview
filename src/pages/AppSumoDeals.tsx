/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Tag, ExternalLink, Calendar, Star } from 'lucide-react';

const DEALS = [
  {
    title: "TaskMagic",
    description: "Automate your manual tasks without code. A must-have for productivity hackers.",
    price: "$49",
    savings: "90%",
    image: "https://picsum.photos/seed/taskmagic/800/500",
    link: "#"
  },
  {
    title: "ContentShake AI",
    description: "Write SEO-friendly content faster than ever with Semrush's power.",
    price: "$89",
    savings: "70%",
    image: "https://picsum.photos/seed/content/800/500",
    link: "#"
  },
  {
    title: "NeuronWriter",
    description: "The gold standard for SEO content optimization. Rank higher in weeks.",
    price: "$69",
    savings: "85%",
    image: "https://picsum.photos/seed/seo/800/500",
    link: "#"
  },
  {
    title: "Brizy Cloud",
    description: "Easiest website builder for agencies. Host multiple client sites effortlessly.",
    price: "$59",
    savings: "60%",
    image: "https://picsum.photos/seed/web/800/500",
    link: "#"
  }
];

export default function AppSumoDeals() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">
              Latest AppSumo Lifetime Deals
            </h1>
            <p className="text-body-text max-w-2xl mx-auto text-lg leading-relaxed">
              Don't miss out on these exclusive software savings. We've hand-picked the best LTDs (Lifetime Deals) that will actually grow your business.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEALS.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm">
                  Save {deal.savings}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{deal.title}</h3>
                  <div className="text-3xl font-black text-secondary">{deal.price}</div>
                </div>
                <p className="text-body-text mb-8 leading-relaxed">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <Calendar className="w-4 h-4" />
                    Limited Time
                  </div>
                  <a 
                    href={deal.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-bold rounded-xl hover:bg-opacity-90 transition-all"
                  >
                    Get the Deal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
