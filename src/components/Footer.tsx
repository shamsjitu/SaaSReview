/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-12 mb-16">
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
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-primary mb-6">Popular Categories</h4>
            <ul className="space-y-4">
              {[
                { name: 'AppSumo Deals', path: '/category/appsumo-deals' },
                { name: 'Business Tools', path: '/category/business-tools' },
                { name: 'Privacy and Security', path: '/category/privacy-security' },
                { name: 'GovTech Tools', path: '/category/govtech-tools' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-body-text hover:text-primary transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-body-text hover:text-primary transition-colors">Latest Posts</Link></li>
              <li><Link to="/company/about-my-process" className="text-body-text hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/company/about" className="text-body-text hover:text-primary transition-colors">About ShamsStack</Link></li>
              <li><Link to="/company/contact" className="text-body-text hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/resources" className="text-body-text hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Legals</h4>
            <ul className="space-y-4">
              <li><Link to="/legal/cookie-policy" className="text-body-text hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/legal/privacy-policy" className="text-body-text hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms-and-conditions" className="text-body-text hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/affiliate-disclosure" className="text-body-text hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to="/legal/dmca-policy" className="text-body-text hover:text-primary transition-colors">DMCA Policy</Link></li>
              <li><Link to="/legal/editorial-methodology" className="text-body-text hover:text-primary transition-colors">Editorial & Review Methodology</Link></li>
              <li><Link to="/legal/disclaimer" className="text-body-text hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-body-text">
            © 2024 ShamsStack. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/legal/privacy-policy" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Privacy</Link>
            <Link to="/legal/terms-and-conditions" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Terms</Link>
            <a href="/sitemap.xml" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
