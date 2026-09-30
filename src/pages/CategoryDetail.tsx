/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Tag, Briefcase, ShieldCheck, Landmark, Calendar, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { getBlogPosts } from '../utils/blogHelper';
import BlogCoverImage from '../components/BlogCoverImage';

const CATEGORY_META: Record<string, { name: string; icon: any; description: string }> = {
  'appsumo-deals': {
    name: 'AppSumo Deals',
    icon: Tag,
    description: 'Lifetime-deal software reviews, tested and evaluated before you spend your credits.'
  },
  'business-tools': {
    name: 'Business Tools',
    icon: Briefcase,
    description: 'SaaS and business platforms reviewed for teams, freelancers, and growing companies.'
  },
  'privacy-security': {
    name: 'Privacy & Security',
    icon: ShieldCheck,
    description: 'Password managers, VPNs, and security software, reviewed with your privacy in mind.'
  },
  'govtech-tools': {
    name: 'GovTech Tools',
    icon: Landmark,
    description: 'Software built for government and public-sector workflows.'
  }
};

export default function CategoryDetail() {
  const { slug } = useParams();
  const meta = slug ? CATEGORY_META[slug] : null;

  if (!meta) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-2xl font-bold">Category not found.</h1>
      </div>
    );
  }

  const Icon = meta.icon;
  const posts = getBlogPosts().filter((post) => post.category === meta.name);

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
              {meta.name}
            </h1>
            <p className="text-body-text max-w-2xl mx-auto text-lg leading-relaxed">
              {meta.description}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-body-text">No articles in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="group-hover:scale-102 transition-transform duration-500">
                      <BlogCoverImage slug={post.slug} title={post.title} category={post.category} image={post.image} />
                    </div>
                  </Link>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-body-text mb-8 text-base leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-3">
                      <img
                        src={SITE_DATA.author.image}
                        alt={SITE_DATA.author.name}
                        className="w-8 h-8 rounded-full grayscale"
                      />
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">{SITE_DATA.author.name}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:text-secondary"
                    >
                      Read More
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
