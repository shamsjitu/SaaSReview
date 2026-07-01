/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <header className="bg-primary py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary mb-6">
            Get in Touch
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question about a SaaS tool? Or want us to review your product? We're here to help.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email Us</h4>
                  <p className="text-body-text">hello@saasreview.com</p>
                  <p className="text-xs text-gray-400 mt-1">We usually reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Collaborations</h4>
                  <p className="text-body-text">partners@saasreview.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Base</h4>
                  <p className="text-body-text">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Shams" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="jitu@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>Software Review Request</option>
                  <option>Advertising Enquiry</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Write your message here..."></textarea>
              </div>
              <button className="w-full bg-primary text-secondary py-5 rounded-[20px] font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
