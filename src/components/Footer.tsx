/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Instagram, Youtube, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                <ShoppingBag className="text-secondary group-hover:text-primary w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-primary">
                ShamsStack
              </span>
            </Link>
            <p className="text-body-text mb-8 max-w-xs">
              ShamsStack provides independent analysis of digital tools and software. We may earn a commission when you purchase through our links.
            </p>
            <p className="text-[10px] text-gray-400 italic mb-8 max-w-xs leading-relaxed">
              Affiliate Disclosure: ShamsStack is a professional review site that receives compensation from the companies whose products we review.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-primary mb-6">Popular Categories</h4>
            <ul className="space-y-4">
              {[
                { name: 'Security & Privacy', path: '/blog' },
                { name: 'AI Automation', path: '/upcoming' },
                { name: 'Productivity Tools', path: '/upcoming' },
                { name: 'Web Development', path: '/upcoming' },
                { name: 'Design Assets', path: '/upcoming' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-body-text hover:text-primary transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-body-text hover:text-primary transition-colors">Expert Reviews</Link></li>
              <li><Link to="/upcoming" className="text-body-text hover:text-primary transition-colors">How-To Guides</Link></li>
              <li><Link to="/upcoming" className="text-body-text hover:text-primary transition-colors">Lifetime Deals</Link></li>
              <li><Link to="/legal/affiliate-disclosure" className="text-body-text hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/company/about-my-process" className="text-body-text hover:text-primary transition-colors">About My Process</Link></li>
              <li><Link to="/blog/latest-news" className="text-body-text hover:text-primary transition-colors">Latest News</Link></li>
              <li><Link to="/legal/privacy-policy" className="text-body-text hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/company/contact" className="text-body-text hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-body-text">
            © 2024 ShamsStack. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Terms</a>
            <a href="/sitemap.xml" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
