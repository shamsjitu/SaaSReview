/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function AboutAuthor() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">The Expert Behind The Reviews</span>
                <h2 className="font-display text-4xl font-bold text-primary mb-6">Hello, I'm {SITE_DATA.author.name}</h2>
                <p className="text-body-text text-lg leading-relaxed mb-8">
                  {SITE_DATA.author.bio}
                </p>
                <p className="text-body-text mb-10">
                  I started ShamsStack with one simple goal: to help publishers and founders navigate the complex world of software tools. I don't just list software; I test them in my daily workflow to ensure you're getting honest, practical advice.
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-primary text-secondary rounded-xl font-bold hover:bg-opacity-90 transition-all">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>
                  <div className="flex gap-2">
                    <a href="#" className="p-3 bg-gray-100 text-primary rounded-xl hover:bg-secondary transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 text-primary rounded-xl hover:bg-secondary transition-all">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="relative aspect-square lg:aspect-auto">
              <img 
                src="https://picsum.photos/seed/author_shams/800/1000" 
                alt="Author" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
