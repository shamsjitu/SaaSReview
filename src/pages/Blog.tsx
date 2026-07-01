/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogHelper';
import BlogCoverImage from '../components/BlogCoverImage';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-6">
              Insights & Expertise
            </h1>
            <p className="text-body-text max-w-2xl mx-auto text-lg leading-relaxed">
              Detailed tutorials, marketing strategies, and personal research on how to grow your digital publishing empire.
            </p>
          </motion.div>
        </header>

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
                    <BlogCoverImage slug={post.slug} title={post.title} category={post.category} />
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
      </div>
    </div>
  );
}
