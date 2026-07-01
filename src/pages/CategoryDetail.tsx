/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MousePointer2, Cpu, TrendingUp, Code2, PenTool, BarChart3, ArrowRight, Star } from 'lucide-react';

const CATEGORY_DATA: Record<string, any> = {
  "marketing-seo": {
    name: "Marketing & SEO",
    icon: TrendingUp,
    description: "Dominate search engines and explode your traffic with these pro-level marketing tools.",
    tools: [
      { name: "NeuronWriter", rating: 4.9, desc: "NLP-driven content optimization for SEO." },
      { name: "SiteGuru", rating: 4.8, desc: "Actionable SEO audits for your website." },
      { name: "Surfer SEO", rating: 4.9, desc: "The industry standard for page optimization." }
    ]
  },
  "ai-automation": {
    name: "AI Automation",
    icon: Cpu,
    description: "Put your business on autopilot with cutting-edge AI and automation workflows.",
    tools: [
      { name: "TaskMagic", rating: 4.7, desc: "Browser-based automation without code." },
      { name: "ContentShake AI", rating: 4.8, desc: "AI-powered content generation by Semrush." },
      { name: "Katteb", rating: 4.6, desc: "Fact-checked AI writer for publishers." }
    ]
  },
  "productivity": {
    name: "Productivity",
    icon: MousePointer2,
    description: "Get more done in less time. Professional tools for efficient founders.",
    tools: [
      { name: "TidyCal", rating: 4.8, desc: "Simple and robust scheduling solution." },
      { name: "Briefcase", rating: 4.5, desc: "Curated toolkit for busy entrepreneurs." },
      { name: "Notion", rating: 4.9, desc: "The ultimate all-in-one workspace." }
    ]
  },
  "web-dev": {
    name: "Web Development",
    icon: Code2,
    description: "Build, host, and manage your sites with high-performance development tools.",
    tools: [
      { name: "Brizy Cloud", rating: 4.7, desc: "Fast and easy landing page builder." },
      { name: "Kinsta", rating: 5.0, desc: "Managed WordPress hosting for agencies." },
      { name: "WP Reset", rating: 4.8, desc: "The ultimate WordPress troubleshooting tool." }
    ]
  },
  "design": {
    name: "Design Tools",
    icon: PenTool,
    description: "Stunning visuals made easy. Pro-level design tools for non-designers.",
    tools: [
      { name: "Canva Pro", rating: 4.9, desc: "Universal design tool for marketing assets." },
      { name: "Glorify", rating: 4.7, desc: "E-commerce focused specialized design tool." },
      { name: "VistaCreate", rating: 4.6, desc: "Easy-to-use graphic design platform." }
    ]
  },
  "sales-crm": {
    name: "Sales & CRM",
    icon: BarChart3,
    description: "Close more deals and manage your customer relationships effortlessly.",
    tools: [
      { name: "LeadRocks", rating: 4.6, desc: "B2B contact database for lead generation." },
      { name: "Sociamonials", rating: 4.7, desc: "Social media marketing with ROI tracking." },
      { name: "Pipedrive", rating: 4.8, desc: "The sales-first CRM for growing teams." }
    ]
  }
};

export default function CategoryDetail() {
  const { slug } = useParams();
  const data = slug ? CATEGORY_DATA[slug] : null;

  if (!data) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-2xl font-bold">Category not found.</h1>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="pt-24 min-h-screen bg-white">
      <header className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/10">
              <Icon className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">
              {data.name}
            </h1>
            <p className="text-body-text max-w-2xl mx-auto text-lg leading-relaxed italic">
             "{data.description}"
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.tools.map((tool: any, index: number) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {tool.name}
                </h3>
                <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="text-xs font-bold text-primary">{tool.rating}</span>
                </div>
              </div>
              <p className="text-body-text text-sm mb-8 leading-relaxed">
                {tool.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                Read Review
                <ArrowRight className="w-4 h-4 text-secondary" />
              </button>
            </motion.div>
          ))}
          
          {/* Dummy extra tools to fill the page */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-[32px] bg-gray-50/50 border border-dashed border-gray-200 flex items-center justify-center text-center">
              <div>
                <p className="text-gray-400 font-bold mb-2">Upcoming Analysis</p>
                <p className="text-xs text-gray-300">More {data.name} tools being tested...</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[40px] bg-secondary/10 border border-secondary/20 text-center">
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Want the Full Comparison?</h2>
          <p className="text-body-text mb-8">We have a private spreadsheet of over 200+ tools with their performance metrics.</p>
          <button className="bg-primary text-secondary px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
            Join the Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
