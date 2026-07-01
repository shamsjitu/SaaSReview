/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Star, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Limited Time Offers</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Latest AppSumo Deals</h2>
            <p className="text-body-text max-w-xl">
              Grab these lifetime deals before they expire. We update this list as soon as new software hits the market.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-primary border-b-2 border-accent pb-1 hover:text-secondary hover:border-secondary transition-all">
            See All Active Deals
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_DATA.latestDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-secondary/20"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                  <div className="bg-secondary text-primary font-black px-3 py-1 rounded-full text-xs shadow-lg">
                    LIFETIME
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-bold text-primary mb-3 line-clamp-1 group-hover:text-secondary transition-colors">
                  {deal.title}
                </h3>
                <p className="text-body-text text-sm mb-6 line-clamp-2 leading-relaxed">
                  {deal.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-2xl font-black text-primary">{deal.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">{deal.oldPrice}</span>
                  </div>
                  <a 
                    href={deal.link}
                    className="p-3 bg-gray-100 text-primary rounded-2xl hover:bg-primary hover:text-secondary transition-all transform active:scale-95 shadow-sm"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
