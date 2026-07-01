/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const RESOURCES = [
  {
    title: "SaaS Evaluation Checklist",
    desc: "A 15-point checklist we use to evaluate every software before buying.",
    type: "PDF Guide",
    icon: CheckCircle
  },
  {
    title: "Affiliate Site Map 2024",
    desc: "How we structure our high-converting affiliate pages.",
    type: "Blueprint",
    icon: FileText
  },
  {
    title: "SEO Content Template",
    desc: "Our exact template for writing reviews that rank on page 1.",
    type: "Google Doc",
    icon: Download
  }
];

export default function Resources() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <header className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">Expert Resources</h1>
          <p className="text-body-text max-w-2xl mx-auto text-lg leading-relaxed">
            Free blueprints, checklists, and templates to help you build and scale your digital publishing business.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((res, index) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <res.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4 block">{res.type}</span>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{res.title}</h3>
              <p className="text-body-text mb-10 leading-relaxed">{res.desc}</p>
              <button className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest group-hover:gap-6 transition-all">
                Download Now
                <ArrowRight className="w-5 h-5 text-secondary" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
