/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PlayCircle, Terminal, HelpCircle, ArrowRight } from 'lucide-react';

const GUIDES = [
  {
    title: "How to Choose Your First SaaS Niche",
    duration: "12 min read",
    tag: "A-Z Guide",
    icon: PlayCircle
  },
  {
    title: "Mastering AppSumo: When to Buy & When to Pass",
    duration: "15 min read",
    tag: "Pro Tip",
    icon: HelpCircle
  },
  {
    title: "Setting Up Your First Content Audit",
    duration: "10 min read",
    tag: "Practical",
    icon: Terminal
  },
  {
    title: "The Art of Writing Unbiased SaaS Reviews",
    duration: "18 min read",
    tag: "Editorial",
    icon: PlayCircle
  }
];

export default function HowToGuides() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Education</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">How-To Guides</h1>
          <p className="text-body-text max-w-xl text-lg">
            Step-by-step tutorials designed to take you from a beginner to an expert SaaS publisher.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {GUIDES.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-2xl transition-all"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-[24px] flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                <guide.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black uppercase text-gray-500 tracking-widest">{guide.tag}</span>
                  <span className="text-xs text-gray-300">{guide.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                  {guide.title}
                </h3>
                <button className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 text-secondary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
