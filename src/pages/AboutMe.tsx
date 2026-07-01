/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import AboutAuthor from '../components/AboutAuthor';
import TrustSection from '../components/TrustSection';

export default function AboutMe() {
  return (
    <div className="pt-24 min-h-screen">
      <header className="bg-primary py-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary mb-6">
            About the Founder
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Learn more about the mission behind ShamsStack and the person dedicated to your business growth.
          </p>
        </motion.div>
      </header>
      
      <div className="-mt-20 relative z-10">
        <AboutAuthor />
      </div>
      
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-8">My Professional Background</h2>
          <p className="text-body-text text-lg leading-relaxed mb-12">
            With a background in software engineering and digital marketing, I've spent the last decade exploring how technology can solve real-world problems. 
            After successfully building multiple niche sites, I realized that many people struggle with choosing the right tools.
          </p>
          <p className="text-body-text text-lg leading-relaxed">
            ShamsStack isn't just another affiliate site. It's a resource hub where I share everything I've learned—from technical SEO to complex automation workflows. 
            I believe in a "show, don't just tell" approach, which is why you'll find video tutorials and screenshots in almost every review.
          </p>
        </div>
      </div>

      <TrustSection />
    </div>
  );
}
