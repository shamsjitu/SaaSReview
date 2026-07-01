/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/siteData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Updated {SITE_DATA.currentMonth} {SITE_DATA.currentYear}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
              Build a Smarter <span className="text-secondary italic">Digital</span> Empire.
            </h1>
            
            <p className="font-sans text-lg text-body-text mb-10 max-w-xl leading-relaxed">
              We decode the world of software to help you select a tech stack that scales. Expertly researched reviews on AI, automation, and stable lifetime assets.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/blog" className="bg-primary text-secondary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Explore Research Hub
                <ArrowRight className="w-5 h-5 text-accent" />
              </Link>
              <Link to="/company/about-my-process" className="bg-white border-2 border-gray-100 text-primary px-8 py-4 rounded-full font-bold hover:border-primary transition-all">
                About My Process
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Image/Shape */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full -z-10 translate-x-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <img 
              src="https://picsum.photos/seed/tech/1200/1600" 
              alt="Tech Setup" 
              className="w-full h-full object-cover rounded-l-[100px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
