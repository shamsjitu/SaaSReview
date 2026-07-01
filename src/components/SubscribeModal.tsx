/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-primary/60 backdrop-blur-sm cursor-pointer"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-900 hover:text-secondary hover:bg-gray-100 rounded-full transition-all z-10 cursor-pointer pointer-events-auto"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-display font-bold text-primary mb-3">You're Subscribed!</h2>
                <p className="text-body-text">Welcome to the inner circle. Get ready for expert blueprints.</p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">Newsletter</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Join the <span className="text-secondary">SaaS Elite</span>.
                </h2>
                <p className="text-body-text mb-8 text-lg">
                  Get the latest lifetime deals and expert blueprints delivered straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-primary font-medium"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all disabled:opacity-70 group"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Subscribe Now
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </button>
                </form>
                
                <p className="mt-6 text-center text-xs text-gray-400">
                  Zero spam. Just massive value. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </>
      )}
    </AnimatePresence>
  );
}
