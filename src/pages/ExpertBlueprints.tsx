/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FileCode, Layers, BookOpen, Download } from 'lucide-react';

const BLUEPRINTS = [
  {
    title: "The Ultimate Affiliate Site Blueprint",
    desc: "Complete architectural breakdown of a 6-figure affiliate site.",
    level: "Advanced",
    icon: Layers
  },
  {
    title: "Content Cluster Master Map",
    desc: "How to organize your topics to dominate search results.",
    level: "Intermediate",
    icon: FileCode
  },
  {
    title: "Monetization Strategy Guide",
    desc: "Placing your links for maximum CTR without hurting UX.",
    level: "All Levels",
    icon: BookOpen
  }
];

export default function ExpertBlueprints() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">Expert Blueprints</h1>
          <p className="text-body-text max-w-2xl mx-auto text-lg">
            Practical, actionable frameworks to scale your SaaS affiliate business. No fluff, just structure.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {BLUEPRINTS.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500 shadow-sm"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <bp.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4 block">{bp.level}</span>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors">{bp.title}</h3>
              <p className="text-body-text mb-10 group-hover:text-white/70 transition-colors">{bp.desc}</p>
              <button className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest group-hover:text-secondary group-hover:gap-5 transition-all">
                Access Snapshot
                <Download className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
