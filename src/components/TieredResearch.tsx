
import { motion } from 'motion/react';
import { Star, ArrowUpRight, Zap, Target, TrendingUp, FlaskConical } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { Link } from 'react-router-dom';

const getPickSlug = (name: string): string => {
  const formatted = name.toLowerCase();
  if (formatted.includes('neuronwriter')) return 'neuronwriter-review-2024';
  if (formatted.includes('tidycal')) return 'tidycal-review-calendly-alternative';
  if (formatted.includes('proton')) return 'proton-pass-free-vs-paid';
  if (formatted.includes('perplexity')) return 'product-hunt-rising-stars-2024';
  if (formatted.includes('gamma')) return 'product-hunt-rising-stars-2024';
  if (formatted.includes('surfer')) return 'neuronwriter-review-2024';
  return '';
};

export default function TieredResearch() {
  const corePicks = SITE_DATA.topPicks.filter(p => p.tier === 'core');
  const growthPicks = SITE_DATA.topPicks.filter(p => p.tier === 'growth');
  const experimentalPicks = SITE_DATA.topPicks.filter(p => p.tier === 'experimental');

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strategy Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4 block">Hand-Picked Tools</span>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold text-primary leading-none tracking-tighter">
                Best Tools.
              </h2>
            </div>
            <p className="text-body-text text-lg max-w-sm leading-relaxed font-medium">
              We've tested hundreds of tools to find the ones that truly help your business grow.
            </p>
          </motion.div>
        </div>

        {/* Tier 1: The Core (70%) - Focus on Stability & High ROI */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="p-3 bg-primary text-secondary rounded-2xl">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-black text-primary uppercase tracking-tight">The Foundation</h3>
              <p className="text-sm font-bold text-gray-400">Essential Tools with Guaranteed Lifetime Value</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {corePicks.map((pick, idx) => {
              const slug = getPickSlug(pick.name);
              return (
                <motion.div
                  key={pick.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-gray-50 rounded-[40px] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                        {pick.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-primary">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span className="text-sm font-black">{pick.rating}</span>
                      </div>
                    </div>
                    {slug ? (
                      <Link to={`/blog/${slug}`}>
                        <h4 className="text-4xl font-display font-black text-primary mb-6 hover:text-secondary transition-colors cursor-pointer">
                          {pick.name}
                        </h4>
                      </Link>
                    ) : (
                      <h4 className="text-4xl font-display font-black text-primary mb-6 transition-colors">
                        {pick.name}
                      </h4>
                    )}
                    <p className="text-body-text text-lg mb-10 leading-relaxed font-medium">
                      {pick.description}
                    </p>
                  </div>
                  {slug ? (
                    <Link 
                      to={`/blog/${slug}`}
                      className="inline-flex items-center gap-4 text-primary font-black uppercase text-xs tracking-widest hover:gap-8 transition-all"
                    >
                      ANALYZE ASSET
                      <ArrowUpRight className="w-5 h-5 text-secondary" />
                    </Link>
                  ) : (
                    <a 
                      href={pick.link}
                      className="inline-flex items-center gap-4 text-primary font-black uppercase text-xs tracking-widest hover:gap-8 transition-all"
                    >
                      ACQUIRE ASSET
                      <ArrowUpRight className="w-5 h-5 text-secondary" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tier 2: The Growth (20%) - Rising Trends */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="p-3 bg-secondary text-primary rounded-2xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-black text-primary uppercase tracking-tight">Growth & AppSumo (20%)</h3>
              <p className="text-sm font-bold text-gray-400">Scaling Assets: Emerging AppSumo Deals & AI Transformers</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {growthPicks.map((pick, idx) => {
              const slug = getPickSlug(pick.name);
              return (
                <motion.div
                  key={pick.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-primary p-10 rounded-[40px] text-white flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 text-left"
                >
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Strategic Deal</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-secondary text-secondary" />
                        <span className="text-xs font-bold">{pick.rating}</span>
                      </div>
                    </div>
                    {slug ? (
                      <Link to={`/blog/${slug}`}>
                        <h4 className="text-3xl font-display font-bold mb-4 hover:text-secondary transition-colors cursor-pointer">{pick.name}</h4>
                      </Link>
                    ) : (
                      <h4 className="text-3xl font-display font-bold mb-4">{pick.name}</h4>
                    )}
                    <p className="text-white/60 text-base mb-8 leading-relaxed">
                      {pick.description}
                    </p>
                  </div>
                  {slug ? (
                    <Link 
                      to={`/blog/${slug}`}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-2xl group hover:bg-secondary hover:text-primary transition-colors text-white"
                    >
                      <span className="text-xs font-black uppercase tracking-widest">Analyze Tool</span>
                      <Zap className="w-4 h-4 text-secondary" />
                    </Link>
                  ) : (
                    <a 
                      href={pick.link}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-2xl group hover:bg-secondary hover:text-primary transition-colors text-white"
                    >
                      <span className="text-xs font-black uppercase tracking-widest">Analyze Tool</span>
                      <Zap className="w-4 h-4 text-white" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tier 3: The Lab (10%) - Experimental */}
        <div>
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="p-3 bg-gray-100 text-primary rounded-2xl">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-black text-primary uppercase tracking-tight">The Lab</h3>
              <p className="text-sm font-bold text-gray-400">Experimental Tools: Niche Solutions & New Innovations</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {experimentalPicks.map((pick, idx) => {
              const slug = getPickSlug(pick.name);
              return (
                <motion.div
                  key={pick.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-gray-100 rounded-[30px] hover:border-secondary transition-colors group text-left"
                >
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-display font-black text-primary group-hover:bg-secondary transition-colors">
                      0{idx + 1}
                    </div>
                    <div>
                      {slug ? (
                        <Link to={`/blog/${slug}`}>
                          <h4 className="text-xl font-bold text-primary hover:text-secondary transition-colors cursor-pointer">{pick.name}</h4>
                        </Link>
                      ) : (
                        <h4 className="text-xl font-bold text-primary">{pick.name}</h4>
                      )}
                      <p className="text-sm text-gray-400 font-medium">{pick.badge}</p>
                    </div>
                  </div>
                  <p className="text-body-text max-w-md text-sm leading-relaxed mb-4 md:mb-0 md:px-8 italic">
                    "{pick.description}"
                  </p>
                  {slug ? (
                    <Link 
                      to={`/blog/${slug}`}
                      className="p-4 rounded-full border border-gray-100 hover:bg-primary hover:text-white transition-all text-gray-400 hover:scale-105"
                    >
                      <ArrowUpRight className="w-5 h-5 hover:text-white" />
                    </Link>
                  ) : (
                    <a 
                      href={pick.link}
                      className="p-4 rounded-full border border-gray-100 hover:bg-primary hover:text-white transition-all text-gray-400"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
