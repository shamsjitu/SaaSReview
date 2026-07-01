/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Force trigger sync with a minor comment: updated cover image handler
import React from 'react';

interface BlogCoverImageProps {
  slug: string;
  title: string;
  category?: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]"
}

export default function BlogCoverImage({ slug, title, category = "Privacy & Security", aspectRatio = "aspect-[16/9]" }: BlogCoverImageProps) {
  const imageMap: Record<string, string> = {
    "keeper-security-review": "/images/keeper_review_1782204653751.jpg",
    "proton-pass-free-vs-paid": "/images/proton_pass_vs_paid_1782204573083.jpg",
    "keeper-free-vs-paid": "/images/keeper_free_vs_paid_1782204557937.jpg",
    "nordpass-family-vs-premium": "/images/nordpass_family_vs_premium_1782204585191.jpg",
    "nordpass-family-plan-review": "/images/nordpass_family_review_1782204669270.jpg",
    "nordpass-premium-review": "/images/nordpass_premium_review_1782204682248.jpg",
    "nordpass-free-review": "/images/nordpass_free_review_1782204694700.jpg",
    "roboform-free-review": "/images/roboform_free_review_1782204710403.jpg",
    "roboform-free-vs-premium": "/images/roboform_free_vs_premium_1782204598869.jpg",
    "roboform-vs-google-password-manager": "/images/roboform_vs_google_1782204611513.jpg"
  };

  const imageUrl = imageMap[slug];
  const isNordpass = slug.toLowerCase().includes('nordpass');
  const isProton = slug.toLowerCase().includes('proton');
 
  if (imageUrl) {
    return (
      <div className={`relative w-full ${aspectRatio} overflow-hidden select-none`}>
        {isNordpass && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#05062a]/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-[#00d4b2]">
              <svg viewBox="0 0 100 100" className="w-4.5 h-4.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 15 70 L 33 46 L 41 54 L 51 32 L 61 50 L 68 42 L 85 70 L 85 90 L 15 90 Z" 
                  fill="white" 
                />
              </svg>
            </div>
            <span className="text-[10px] font-sans font-black tracking-widest text-white uppercase pr-1">
              NordPass
            </span>
          </div>
        )}
        {isProton && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#05062a]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="relative w-5 h-5 flex items-center justify-center select-none shrink-0">
              {/* Underlying shifted layer */}
              <div 
                className="absolute inset-[1.5px] rounded-[24%] bg-gradient-to-br from-[#7e57ff]/30 via-[#b357ff]/20 to-[#ff9e7a]/10 rotate-45 translate-x-[16%] translate-y-[16%] blur-[0.5px]"
              />
              {/* Main front layer */}
              <div 
                className="absolute inset-[1.5px] rounded-[24%] bg-gradient-to-br from-[#6c47ff] via-[#b357ff] to-[#ff9e79] rotate-45 border border-white/20 shadow-[0_4px_12px_rgba(108,71,255,0.35)]"
              />
            </div>
            <span className="text-[8px] font-sans font-black tracking-widest text-white uppercase pr-0.5 translate-y-[1px]">
              Proton Pass
            </span>
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-none transition-transform duration-500 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback to stylized technical box
  return (
    <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-[#05062a] to-[#12144d] flex items-center justify-center p-6 text-center select-none`}>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#CFA9FF] via-indigo-400 to-[#CFA9FF]"></div>
      <div className="space-y-2">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#CFA9FF] uppercase">{category}</span>
        <h3 className="text-white font-display font-black text-xl md:text-2xl tracking-tight leading-tight max-w-md line-clamp-2 uppercase">{title}</h3>
      </div>
    </div>
  );
}
