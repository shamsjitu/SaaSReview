/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogHelper';

import BlogCoverImage from './BlogCoverImage';

export default function LatestArticles() {
  const posts = getBlogPosts().slice(0, 10);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Latest Insights & Tutorials</h2>
            <p className="text-body-text max-w-2xl leading-relaxed">
              In-depth research on SEO, content strategy, and the best lifetime software deals.
            </p>
          </div>
          <Link to="/blog" className="flex items-center gap-2 px-6 py-3 bg-secondary/10 text-primary font-bold rounded-xl hover:bg-secondary transition-all">
            View All Articles
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[40px] overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100"
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
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-body-text text-base leading-relaxed line-clamp-2 mb-8">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-all"
                >
                  Read Investigation
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            See More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
