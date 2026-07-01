/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Menu, ShoppingBag, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SubscribeModal from './SubscribeModal';

function isPostDetail(pathname: string) {
  const path = pathname.replace(/\/$/, "");
  if (path === "/blog" || path === "/blog/writer-workbench" || path === "/blog/expert-blueprints" || path === "/blog/how-to-guides") {
    return false;
  }
  return path.startsWith("/blog/") || 
         path === "/nordpass-family-vs-premium" || 
         path === "/nordpass-family-plan-review";
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const location = useLocation();

  if (isPostDetail(location.pathname)) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-display cursor-pointer group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
              <ShoppingBag className="text-secondary group-hover:text-primary w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">
              ShamsStack
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-body-text hover:text-primary transition-colors">Home</Link>
            <Link to="/reviews/expert-analysis" className="text-sm font-medium text-body-text hover:text-primary transition-colors">Tool Reviews</Link>
            <Link to="/blog" className="text-sm font-medium text-body-text hover:text-primary transition-colors">Blog</Link>
            <Link to="/company/about-my-process" className="text-sm font-medium text-body-text hover:text-primary transition-colors">About Me</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsSubscribeOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <User className="w-4 h-4 text-secondary" />
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 flex flex-col gap-4 text-center"
        >
          <Link to="/" className="text-lg font-medium py-4 border-b border-gray-50 text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/reviews/expert-analysis" className="text-lg font-medium py-4 border-b border-gray-50 text-primary" onClick={() => setIsMenuOpen(false)}>Tool Reviews</Link>
          <Link to="/blog" className="text-lg font-medium py-4 border-b border-gray-50 text-primary" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/company/about-my-process" className="text-lg font-medium py-4 border-b border-gray-50 text-primary" onClick={() => setIsMenuOpen(false)}>About Me</Link>
          <button 
            onClick={() => {
              setIsSubscribeOpen(true);
              setIsMenuOpen(false);
            }}
            className="mt-4 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-secondary hover:text-primary transition-all cursor-pointer active:scale-95"
          >
            Subscribe Now
          </button>
        </motion.div>
      )}

      <SubscribeModal 
        isOpen={isSubscribeOpen} 
        onClose={() => setIsSubscribeOpen(false)} 
      />
    </nav>
  );
}
