/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout, Search, BarChart3, Cloud, Palette, ShieldCheck, Zap, Cpu, MousePointer2, Code2, PenTool, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { icon: TrendingUp, name: "Marketing & SEO", slug: "marketing-seo", count: "45 Tools", color: "bg-blue-50 text-blue-600" },
  { icon: Cpu, name: "AI Automation", slug: "ai-automation", count: "32 Tools", color: "bg-indigo-50 text-indigo-600" },
  { icon: MousePointer2, name: "Productivity", slug: "productivity", count: "28 Tools", color: "bg-purple-50 text-purple-600" },
  { icon: Code2, name: "Web Development", slug: "web-dev", count: "115 Tools", color: "bg-red-50 text-red-600" },
  { icon: PenTool, name: "Design Tools", slug: "design", count: "22 Tools", color: "bg-orange-50 text-orange-600" },
  { icon: BarChart3, name: "Sales & CRM", slug: "sales-crm", count: "19 Tools", color: "bg-teal-50 text-teal-600" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Browse by Category</h2>
            <p className="text-body-text max-w-2xl mx-auto">
              Master your niche with these curated software collections. 
              Each tool is rigorously tested for high-growth businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link 
                to={`/category/${cat.slug}`}
                className="flex flex-col items-center text-center p-8 h-full rounded-[32px] border border-gray-100 hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary transition-all`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{cat.name}</h3>
                <p className="text-[10px] text-body-text font-black uppercase tracking-widest">{cat.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
