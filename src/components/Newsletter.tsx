/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-[40px] overflow-hidden p-12 md:p-20">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Never Miss a <br />
                <span className="text-secondary">SaaS Lifetime Deal.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 50,000+ entrepreneurs who get our weekly digest of the best software tools and exclusive discounts.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Exclusive coupons', 'Expert buying guides', 'Early access to sales', 'No spam, ever.'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full bg-white py-4 pl-12 pr-4 rounded-xl text-primary font-medium focus:ring-2 focus:ring-secondary outline-none transition-shadow"
                  />
                </div>
                <button className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all transform active:scale-95 shadow-lg shadow-secondary/20">
                  Getting Started for Free
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  By clicking subscribe, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent -z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20 -z-0" />
        </div>
      </div>
    </section>
  );
}
