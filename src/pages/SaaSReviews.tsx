/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Star, ArrowRight, Sparkles, AlignLeft } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogHelper';
import BlogCoverImage from '../components/BlogCoverImage';

interface ReviewItem {
  id: number | string;
  title: string;
  rating: number;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
}

export default function SaaSReviews() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [textOnlyMode, setTextOnlyMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('blog_cover_text_only') === 'true';
  });

  const toggleCoverMode = (val: boolean) => {
    localStorage.setItem('blog_cover_text_only', String(val));
    setTextOnlyMode(val);
    window.dispatchEvent(new Event('blog_cover_text_only_changed'));
  };

  // Convert default reviews and blog posts into a unified review stream
  const staticReviews: ReviewItem[] = (SITE_DATA.reviews || []).map((r, index) => ({
    id: `static-${index}-${r.id}`,
    title: r.title,
    rating: r.rating || 4.8,
    slug: (r as any).slug || 'content-strategy-2024',
    excerpt: r.excerpt,
    category: r.category,
    image: r.image
  }));

  // Gather additional custom & default blog reviews (e.g. neuronwriter, tidycal, thinkific)
  const blogPosts = getBlogPosts();
  const blogReviews: ReviewItem[] = blogPosts
    .filter(p => 
      p.category === 'AppSumo Deals' || 
      p.category === 'Rising AI' || 
      p.category === 'SEO & Content' || 
      p.slug.includes('review') ||
      p.slug.includes('thinkific')
    )
    .map(p => ({
      id: `blog-${p.id}`,
      title: p.title,
      rating: p.slug.includes('thinkific') ? 4.8 : (p.slug.includes('neuronwriter') ? 4.9 : (p.slug.includes('tidycal') ? 4.8 : (p.slug.includes('kinsta') ? 5.0 : 4.7))),
      slug: p.slug,
      excerpt: p.excerpt,
      category: p.category,
      image: p.image
    }));

  // Combine static and live custom blog reviews, ensuring unique keys/articles
  const seenSlugs = new Set<string>();
  const combinedReviews: ReviewItem[] = [];

  // Prioritize custom blog reviews so user-written posts/drafts (like Thinkific) override default placements
  [...blogReviews, ...staticReviews].forEach(item => {
    if (!seenSlugs.has(item.slug)) {
      seenSlugs.add(item.slug);
      combinedReviews.push(item);
    }
  });

  // Category search mapping for uniform tag matching
  const mapCategoryToTag = (cat: string): string => {
    const formatted = cat.toLowerCase();
    if (formatted.includes('seo') || formatted.includes('content')) return 'SEO Tools';
    if (formatted.includes('affiliate') || formatted.includes('brand') || formatted.includes('marketing')) return 'Impact Radius';
    if (formatted.includes('trend') || formatted.includes('product hunt') || formatted.includes('deal')) return 'Product Hunt';
    if (formatted.includes('host') || formatted.includes('kinsta')) return 'Hosting';
    if (formatted.includes('ai') || formatted.includes('intelligence')) return 'AI';
    if (formatted.includes('secure') || formatted.includes('security') || formatted.includes('privacy')) return 'Security';
    return 'Other';
  };

  // Filter based on search query and selected tag
  const filteredReviews = combinedReviews.filter(review => {
    const matchesSearch = 
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedTag === 'All') return matchesSearch;
    const tagMatch = mapCategoryToTag(review.category) === selectedTag;
    return matchesSearch && tagMatch;
  });

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4 block">Independent Analysis</span>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
                SaaS & Market Reviews
              </h1>
              <p className="text-body-text text-lg">
                We go beyond AppSumo. Our lab tests everything — from Impact Radius brand partners to trending Product Hunt launches, local course platforms, and established SaaS giants.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews..." 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary text-primary font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 mt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-4">
              {["All", "SEO Tools", "Impact Radius", "Product Hunt", "Hosting", "AI", "Security"].map(tag => {
                const isActive = selectedTag === tag;
                return (
                  <button 
                    key={tag} 
                    onClick={() => setSelectedTag(tag)}
                    className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-primary text-secondary border-primary shadow-md' 
                        : 'border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Design Style Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-gray-50 border border-gray-100 rounded-2xl">
              <button
                onClick={() => toggleCoverMode(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  !textOnlyMode
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-400 hover:text-primary'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                With Logos
              </button>
              <button
                onClick={() => toggleCoverMode(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  textOnlyMode
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-400 hover:text-primary'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                Text-Only
              </button>
            </div>
          </div>
        </header>

        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden"
              >
                <Link to={`/blog/${review.slug}`} className="block aspect-[16/10] overflow-hidden rounded-[32px] mb-6 shadow-sm group-hover:shadow-lg transition-all border border-gray-100 relative">
                  {review.image && review.image.startsWith('/images/') ? (
                    <BlogCoverImage slug={review.slug} title={review.title} category={review.category} aspectRatio="w-full h-full" image={review.image} />
                  ) : (
                    <img 
                      src={review.image} 
                      alt={review.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-primary rounded-full text-[9px] font-black uppercase tracking-widest border border-gray-100 shadow-sm">
                    {review.category}
                  </span>
                </Link>
                <div className="space-y-4 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-secondary fill-secondary" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-primary">{review.rating}</span>
                  </div>
                  <Link to={`/blog/${review.slug}`} className="block">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                      {review.title}
                    </h3>
                  </Link>
                  <p className="text-body-text text-sm leading-relaxed line-clamp-2 mb-4">
                    {review.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${review.slug}`}
                    className="flex items-center gap-2 text-sm font-extrabold text-primary group-hover:gap-4 group-hover:text-[#B59D73] mt-auto transition-all"
                  >
                    Read Full Review
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-200 rounded-[32px] bg-gray-50/50">
            <h3 className="text-xl font-bold text-primary mb-2">No reviews found</h3>
            <p className="text-body-text text-sm max-w-sm mx-auto">
              We couldn't find any reviews matching "{searchQuery}" in this category. Write the blog article or try searching something else!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
