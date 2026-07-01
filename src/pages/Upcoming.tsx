/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, Shield, Cpu, Bookmark, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Upcoming() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF9F6] relative overflow-hidden px-4 py-20 select-none">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#05062a_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Abstract decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#CFA9FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Logo badge */}
          <div className="inline-flex items-center justify-center p-3 bg-white border-2 border-[#05062A] rounded-2xl shadow-[4px_4px_0px_#CFA9FF] mb-4">
            <Sparkles className="w-10 h-10 text-[#05062A]" strokeWidth={1.5} />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-black uppercase tracking-[0.25em] text-[#05062A]/60">
              Content Pipeline Active
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-[#05062A] tracking-tight leading-tight uppercase">
              Awesome Reviews Are Upcoming!
            </h1>
          </div>

          <p className="text-lg text-[#05062A]/80 font-medium leading-relaxed max-w-xl mx-auto">
            Our research laboratory is actively testing new software, comparing features, and performing in-depth benchmarks. We reject basic summaries to bring you complete, independent, and meticulously verified analysis soon.
          </p>

          {/* Quick Stats / Visual Blocks for polish */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y-2 border-[#05062A]/10 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-black text-[#05062A]">100%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#05062A]/50 font-bold">Independent</div>
            </div>
            <div className="text-center border-x border-[#05062A]/10">
              <div className="text-2xl font-black text-[#05062A]">2026</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#05062A]/50 font-bold">Benchmarks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#05062A]">Zero</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#05062A]/50 font-bold">Sponsored Hype</div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#05062A] hover:bg-[#12144d] text-white font-bold text-sm tracking-widest uppercase border-2 border-[#05062A] rounded-none shadow-[4px_4px_0px_#CFA9FF] hover:shadow-[2px_2px_0px_#CFA9FF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              Explore Our Live Reviews
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#05062A] font-bold text-sm tracking-widest uppercase border-2 border-[#05062A] transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
