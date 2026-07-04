/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface BlogCoverImageProps {
  slug: string;
  title: string;
  category?: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]"
  textOnly?: boolean;
}

// ==========================================
// High-Fidelity brand Logo SVGs
// ==========================================

const KeeperLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 12 L82 22 V54 C82 75 50 86 50 86 C50 86 18 75 18 54 V22 Z" fill="#0A2016" stroke="#10B981" strokeWidth="4" strokeLinejoin="round" />
    <path d="M50 20 L75 28 V52 C75 68 50 78 50 78 C50 78 25 68 25 52 V28 Z" fill="#10B981" opacity="0.12" />
    <circle cx="50" cy="45" r="12" fill="white" />
    <path d="M47 45 H53 L55 62 H45 Z" fill="white" />
    <circle cx="50" cy="45" r="5" fill="#0A2016" />
  </svg>
);

const ProtonPassLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(15, 15) scale(0.7)">
      <rect x="10" y="10" width="60" height="60" rx="18" fill="#7C3AED" opacity="0.25" transform="rotate(45 40 40) translate(4, 4)" />
      <rect x="10" y="10" width="60" height="60" rx="18" fill="url(#protonGrad)" transform="rotate(45 40 40)" stroke="#A78BFA" strokeWidth="3.5" />
      <path d="M33 28 H48 C53.5 28 57.5 31.5 57.5 37 C57.5 42.5 53.5 46 48 46 H41 V55 H33 V28 Z M41 39.5 H47 C48.8 39.5 50 38.5 50 37 C50 35.5 48.8 34.5 47 34.5 H41 V39.5 Z" fill="white" />
    </g>
    <defs>
      <linearGradient id="protonGrad" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6D28D9" />
        <stop offset="60%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const NordPassLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="#051D1A" stroke="#00D4B2" strokeWidth="4.5" />
    <circle cx="50" cy="50" r="31" fill="#00D4B2" opacity="0.08" />
    <path d="M34 66 L34 34" stroke="white" strokeWidth="6.5" strokeLinecap="round" />
    <path d="M34 34 L66 66" stroke="white" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 66 L66 34" stroke="white" strokeWidth="6.5" strokeLinecap="round" />
  </svg>
);

const RoboFormLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="#051821" stroke="#38BDF8" strokeWidth="4.5" />
    <circle cx="39" cy="50" r="13" stroke="white" strokeWidth="6.5" />
    <path d="M52 50 H75 M62 50 V61 M70 50 V61" stroke="white" strokeWidth="6.5" strokeLinecap="round" />
  </svg>
);

const GoogleLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L80 25 V55 C80 72 50 84 50 84 C50 84 20 72 20 55 V25 Z" fill="#0C1020" stroke="#3B82F6" strokeWidth="3" />
    <g transform="translate(14, 14) scale(0.72)">
      <path d="M50 24 C57.8 24 64.6 26.8 70.1 31.9 L78.4 23.6 C70.1 15.9 59.5 11.2 50 11.2 C31 11.2 15 22.1 7.2 38 L18.6 46.8 C21.2 33.6 32.8 24 50 24" fill="#EA4335" />
      <path d="M50 76 C32.8 76 21.2 66.4 18.6 53.2 L7.2 62 C15 77.9 31 88.8 50 88.8 C59.8 88.8 69.4 84.8 76.4 78 L65.3 69.3 C61.1 73.6 56.2 76 50 76" fill="#34A853" />
      <path d="M18.6 46.8 C18 48.9 17.6 51.1 17.6 53.4 C17.6 55.7 18 57.9 18.6 60 L7.2 68.8 C5.2 64.3 4 59.4 4 53.4 C4 47.4 5.2 42.5 7.2 38 L18.6 46.8 Z" fill="#FBBC05" />
      <path d="M76.4 78 C82.8 72 87 63.2 87 52.4 C87 49.6 86.6 47 86 44.4 H50 V57.2 H71 C70 62.4 66.8 66.8 62.2 69.6 L73.3 78.2 Z" fill="#4285F4" />
    </g>
  </svg>
);

const GenericSecurityLogo = () => (
  <svg className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 13 L80 23 V54 C80 74 50 85 50 85 C50 85 20 74 20 54 V23 Z" fill="#1C150A" stroke="#F59E0B" strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M50 30 C44.5 30 40 34.5 40 40 V48 H36 V68 H64 V48 H60 V40 C60 34.5 55.5 30 50 30 Z M46 40 C46 37.8 47.8 36 50 36 C52.2 36 54 37.8 54 40 V48 H46 V40 Z" fill="#F59E0B" />
    <circle cx="50" cy="58" r="3" fill="#1C150A" />
  </svg>
);

const logoSVGs: Record<string, React.ReactNode> = {
  keeper: <KeeperLogo />,
  proton: <ProtonPassLogo />,
  nordpass: <NordPassLogo />,
  roboform: <RoboFormLogo />,
  google: <GoogleLogo />,
  generic: <GenericSecurityLogo />
};

// ==========================================
// Theme Styling Maps
// ==========================================

interface ThemeStyle {
  accentText: string;
  accentBorder: string;
  glowFrom: string;
  dividerGlow: string;
  badgeBg: string;
}

const themeStyles: Record<string, ThemeStyle> = {
  emerald: {
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/20 hover:border-emerald-500/40",
    glowFrom: "from-emerald-500/10",
    dividerGlow: "via-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
  },
  purple: {
    accentText: "text-purple-400",
    accentBorder: "border-purple-500/20 hover:border-purple-500/40",
    glowFrom: "from-purple-500/10",
    dividerGlow: "via-purple-500/30",
    badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20"
  },
  cyan: {
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/20 hover:border-cyan-500/40",
    glowFrom: "from-cyan-500/10",
    dividerGlow: "via-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
  },
  teal: {
    accentText: "text-teal-400",
    accentBorder: "border-teal-500/20 hover:border-teal-500/40",
    glowFrom: "from-teal-500/10",
    dividerGlow: "via-teal-500/30",
    badgeBg: "bg-teal-500/10 text-teal-300 border-teal-500/20"
  },
  indigo: {
    accentText: "text-indigo-400",
    accentBorder: "border-indigo-500/20 hover:border-indigo-500/40",
    glowFrom: "from-indigo-500/10",
    dividerGlow: "via-indigo-500/30",
    badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
  },
  orange: {
    accentText: "text-orange-400",
    accentBorder: "border-orange-500/20 hover:border-orange-500/40",
    glowFrom: "from-orange-500/10",
    dividerGlow: "via-orange-500/30",
    badgeBg: "bg-orange-500/10 text-orange-300 border-orange-500/20"
  },
  blue: {
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/20 hover:border-blue-500/40",
    glowFrom: "from-blue-500/10",
    dividerGlow: "via-blue-500/30",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20"
  }
};

// ==========================================
// Brand helper names
// ==========================================

const brandNames: Record<string, string> = {
  keeper: "Keeper",
  proton: "Proton Pass",
  nordpass: "NordPass",
  roboform: "RoboForm",
  google: "Google Pass",
  generic: "Security"
};

function getCoverDetails(slug: string, title: string) {
  const normalizedSlug = slug.toLowerCase();
  const normalizedTitle = title.toLowerCase();

  // Initial detections
  let leftBrand = "generic";
  let rightBrand = "generic";
  let themeAccent: "emerald" | "purple" | "cyan" | "teal" | "indigo" | "orange" | "blue" = "indigo";

  const getBrandDisplayName = (b: string) => brandNames[b] || "Security";

  if (normalizedSlug.includes("keeper")) {
    leftBrand = "keeper";
    themeAccent = "emerald";
  } else if (normalizedSlug.includes("proton")) {
    leftBrand = "proton";
    themeAccent = "purple";
  } else if (normalizedSlug.includes("nordpass")) {
    leftBrand = "nordpass";
    themeAccent = "cyan";
  } else if (normalizedSlug.includes("roboform")) {
    leftBrand = "roboform";
    themeAccent = "teal";
  } else if (normalizedSlug.includes("google")) {
    leftBrand = "google";
    themeAccent = "blue";
  }

  // Determine if it is a comparison post
  const isComp = normalizedSlug.includes("-vs-") || normalizedTitle.includes(" vs ") || normalizedTitle.includes(" vs. ");

  if (isComp) {
    rightBrand = leftBrand;

    // Specific free vs paid matchups
    if (normalizedSlug.includes("vs-paid") || normalizedSlug.includes("vs-premium") || normalizedSlug.includes("free-vs-")) {
      const brandName = getBrandDisplayName(leftBrand);
      return {
        isComparison: true,
        leftBrand,
        rightBrand,
        leftTitle: `${brandName} Free`,
        rightTitle: `${brandName} Premium`,
        leftTag: "FREE PLAN",
        rightTag: "PREMIUM",
        themeAccent,
        brandName: brandName.toUpperCase()
      };
    }

    // Nordpass Family vs Premium
    if (normalizedSlug.includes("family-vs-premium")) {
      return {
        isComparison: true,
        leftBrand: "nordpass",
        rightBrand: "nordpass",
        leftTitle: "NordPass Premium",
        rightTitle: "NordPass Family",
        leftTag: "INDIVIDUAL",
        rightTag: "FAMILY PLAN",
        themeAccent: "cyan",
        brandName: "NORDPASS"
      };
    }

    // Roboform vs Google
    if (normalizedSlug.includes("vs-google") || normalizedSlug.includes("vs-google-password-manager")) {
      return {
        isComparison: true,
        leftBrand: "roboform",
        rightBrand: "google",
        leftTitle: "RoboForm",
        rightTitle: "Google Pass",
        leftTag: "PRO LOCK",
        rightTag: "BUILT-IN",
        themeAccent: "blue",
        brandName: "CREDENTIALS ANALYSIS"
      };
    }

    // Generic comparison fallback
    return {
      isComparison: true,
      leftBrand,
      rightBrand: "generic",
      leftTitle: getBrandDisplayName(leftBrand),
      rightTitle: "Alternative",
      leftTag: "OPTION A",
      rightTag: "OPTION B",
      themeAccent,
      brandName: "UNBIASED REVIEW"
    };
  }

  // Single review config
  let score = "4.5";
  let tag = "EXPERT CHOICE";

  if (normalizedSlug.includes("keeper")) {
    score = "4.2";
    tag = "SECURE VAULT";
  } else if (normalizedSlug.includes("nordpass-family")) {
    score = "4.3";
    tag = "FAMILY VAULT";
  } else if (normalizedSlug.includes("nordpass-premium")) {
    score = "4.5";
    tag = "TOP RATED";
  } else if (normalizedSlug.includes("nordpass-free")) {
    score = "4.0";
    tag = "FREE ESSENTIALS";
  } else if (normalizedSlug.includes("roboform-free")) {
    score = "4.2";
    tag = "EASY FILLER";
  }

  return {
    isComparison: false,
    brand: leftBrand,
    title: getBrandDisplayName(leftBrand) + " Review",
    subtitle: title,
    score,
    tag,
    themeAccent
  };
}

// ==========================================
// Bottom Branding Logo matching Cyber Insider style
// ==========================================

const CyberInsiderLogo = () => (
  <div className="flex items-center gap-2 select-none">
    {/* Clean emerald logo block */}
    <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 L82 25 V55 C82 75 50 85 50 85 C50 85 18 75 18 55 V25 Z" fill="none" stroke="#10B981" strokeWidth="12" strokeLinejoin="round" />
      <path d="M50 35 V65 M35 50 H65" stroke="#10B981" strokeWidth="12" strokeLinecap="round" />
    </svg>
    <div className="flex items-center gap-0.5 text-[11px] md:text-[13px] font-sans tracking-wide">
      <span className="font-extrabold text-white uppercase">Cyber</span>
      <span className="font-light text-emerald-400 uppercase">Insider</span>
    </div>
  </div>
);

export default function BlogCoverImage({ slug, title, category = "Privacy & Security", aspectRatio = "aspect-[16/9]", textOnly }: BlogCoverImageProps) {
  const [textOnlyMode, setTextOnlyMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('blog_cover_text_only') === 'true';
  });

  useEffect(() => {
    const handleUpdate = () => {
      setTextOnlyMode(localStorage.getItem('blog_cover_text_only') === 'true');
    };
    window.addEventListener('blog_cover_text_only_changed', handleUpdate);
    return () => window.removeEventListener('blog_cover_text_only_changed', handleUpdate);
  }, []);

  const isTextOnly = textOnly ?? textOnlyMode;
  const info = getCoverDetails(slug, title);
  const theme = themeStyles[info.themeAccent] || themeStyles.indigo;

  if (info.isComparison) {
    const leftLogo = logoSVGs[info.leftBrand] || logoSVGs.generic;
    const rightLogo = logoSVGs[info.rightBrand] || logoSVGs.generic;

    return (
      <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-[#04060d] via-[#090e1a] to-[#04060d] flex flex-col justify-between overflow-hidden select-none p-4 md:p-6 border border-white/[0.04] rounded-lg`}>
        {/* Spotlights - Coming down from the top */}
        <div className="absolute inset-x-0 top-0 h-44 overflow-hidden pointer-events-none">
          {/* Left Spotlight */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-44 h-56 bg-gradient-to-b from-white/[0.07] via-white/[0.01] to-transparent rounded-full blur-2xl transform rotate-6 origin-top" />
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Right Spotlight */}
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-44 h-56 bg-gradient-to-b from-white/[0.07] via-white/[0.01] to-transparent rounded-full blur-2xl transform -rotate-6 origin-top" />
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Faint Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.03] pb-2">
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${theme.accentText} animate-pulse bg-current`} />
            <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
              {info.brandName} HEAD-TO-HEAD
            </span>
          </div>
          <span className="text-[7px] md:text-[8px] font-sans font-bold tracking-widest text-white/40 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.02]">
            UNBIASED COMPARISON
          </span>
        </div>

        {/* Middle Slash and VS Marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75%] w-[1.5px] bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-12 pointer-events-none z-10">
          <div className="absolute inset-y-1/5 left-1/2 -translate-x-1/2 w-[1px] bg-white shadow-[0_0_8px_#fff]" />
        </div>
        
        {/* Symmetrical Offset VS text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute -left-3 -top-3 text-xs md:text-sm font-black tracking-widest text-white/95 italic drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">V</span>
            <span className="absolute left-1.5 top-0.5 text-xs md:text-sm font-black tracking-widest text-white/45 italic">S</span>
          </div>
        </div>

        {/* Symmetrical layout: Left and Right brand cards */}
        <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-8 items-center my-auto">
          {/* Left Brand Lockup (Equal layout, clean) */}
          <div className="flex flex-col items-center justify-center space-y-3">
            {/* Lockup together: Logo and Name next to each other */}
            <div className="flex items-center gap-2.5 md:gap-3.5 px-3 md:px-5 py-2 md:py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm transition-all hover:bg-white/[0.03] hover:border-white/[0.06]">
              {!isTextOnly && (
                <div className="shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                  {leftLogo}
                </div>
              )}
              <span className="text-sm sm:text-base md:text-xl font-extrabold tracking-tight text-white font-display select-none uppercase">
                {info.leftTitle}
              </span>
            </div>
            <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/70 uppercase">
              {info.leftTag}
            </span>
          </div>

          {/* Right Brand Lockup (Exactly equal, neutral) */}
          <div className="flex flex-col items-center justify-center space-y-3">
            {/* Lockup together: Logo and Name next to each other */}
            <div className="flex items-center gap-2.5 md:gap-3.5 px-3 md:px-5 py-2 md:py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm transition-all hover:bg-white/[0.03] hover:border-white/[0.06]">
              {!isTextOnly && (
                <div className="shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                  {rightLogo}
                </div>
              )}
              <span className="text-sm sm:text-base md:text-xl font-extrabold tracking-tight text-white font-display select-none uppercase">
                {info.rightTitle}
              </span>
            </div>
            <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/70 uppercase">
              {info.rightTag}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.03]">
          <span className="text-[7px] md:text-[8px] font-mono text-white/40 tracking-widest">
            STRICTLY UNBIASED • 2026
          </span>
          <CyberInsiderLogo />
        </div>
      </div>
    );
  }

  // ==========================================
  // SINGLE REVIEW LAYOUT (Premium Centralized Spotlight)
  // ==========================================
  const brandLogo = logoSVGs[info.brand] || logoSVGs.generic;

  return (
    <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-[#04060d] via-[#090e1a] to-[#04060d] flex flex-col justify-between overflow-hidden select-none p-4 md:p-6 border border-white/[0.04] rounded-lg`}>
      {/* Central Spotlight */}
      <div className="absolute inset-x-0 top-0 h-48 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-64 bg-gradient-to-b from-white/[0.08] via-white/[0.01] to-transparent rounded-full blur-2xl origin-top" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Faint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.03] pb-2">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${theme.accentText} animate-pulse bg-current`} />
          <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
            EXPERT PLATFORM REVIEW
          </span>
        </div>
        <span className="text-[7px] md:text-[8px] font-sans font-bold tracking-widest text-white/40 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.02]">
          IN-DEPTH ANALYSIS
        </span>
      </div>

      {/* Centered Majestic Lockup */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-3.5 md:space-y-4">
        {/* Brand Lockup: logo and text side-by-side inside glass panel */}
        <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2.5 md:py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:bg-white/[0.03] hover:border-white/[0.07]">
          {!isTextOnly && (
            <div className="shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
              {brandLogo}
            </div>
          )}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className={`text-[8px] md:text-[9px] font-mono tracking-[0.2em] ${theme.accentText} font-bold uppercase`}>
              SECURE REVIEW
            </span>
            <span className="text-base sm:text-lg md:text-2xl font-black tracking-tight text-white font-display select-none uppercase">
              {info.title}
            </span>
          </div>
        </div>

        {/* Rating and Tag badges */}
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] md:text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/60 uppercase">
            {info.tag}
          </span>
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
            <span className="text-amber-400 text-[9px] md:text-[11px]">★</span>
            <span className="text-[9px] md:text-[11px] font-mono font-black text-amber-300 tracking-wider">
              {info.score} / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.03]">
        <span className="text-[7px] md:text-[8px] font-mono text-white/40 tracking-widest">
          HANDS-ON TESTING • 2026
        </span>
        <CyberInsiderLogo />
      </div>
    </div>
  );
}
