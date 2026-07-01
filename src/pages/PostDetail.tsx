
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_DATA } from '../data/siteData';
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getBlogPosts } from '../utils/blogHelper';
import BlogCoverImage from '../components/BlogCoverImage';

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const getTextFromReactNode = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join('');
  }
  if (node.props && node.props.children) {
    return getTextFromReactNode(node.props.children);
  }
  return '';
};

interface TableCTAProps {
  slug: string;
  onShowToast: (message: string) => void;
}

interface CTAButton {
  text: string;
  url: string;
  toastText: string;
  isPrimary: boolean;
}

function TableCTA({ slug, onShowToast }: TableCTAProps) {
  const s = slug.toLowerCase().trim();
  
  let buttons: CTAButton[] = [];

  switch (s) {
    // 1. Comparisons with custom dual buttons
    case 'nordpass-family-vs-premium':
      buttons = [
        {
          text: 'Try Family for Free',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening official NordPass Family Plan Trial...',
          isPrimary: true
        },
        {
          text: 'Try Premium Free',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening official NordPass Premium Trial...',
          isPrimary: false
        }
      ];
      break;

    case 'roboform-vs-google-password-manager':
      buttons = [
        {
          text: 'Try RoboForm Free Trial',
          url: 'https://www.roboform.com/pricing',
          toastText: 'Opening official RoboForm 30-day Free Trial...',
          isPrimary: true
        },
        {
          text: 'Try Google Password Manager',
          url: 'https://passwords.google.com/',
          toastText: 'Opening official Google Password Manager...',
          isPrimary: false
        }
      ];
      break;

    case 'proton-pass-free-vs-paid':
      buttons = [
        {
          text: 'Sign Up Free',
          url: 'https://proton.me/pass/pricing',
          toastText: 'Opening official Proton Pass Free registration...',
          isPrimary: true
        },
        {
          text: 'Try Free Trial',
          url: 'https://proton.me/pass/pricing',
          toastText: 'Opening official Proton Pass 30-day Free Trial...',
          isPrimary: false
        }
      ];
      break;

    case 'keeper-free-vs-paid':
      buttons = [
        {
          text: 'Sign Up Free',
          url: 'https://www.keepersecurity.com/pricing.html',
          toastText: 'Opening official Keeper Security Free registration...',
          isPrimary: true
        },
        {
          text: 'Try Free Trial',
          url: 'https://www.keepersecurity.com/pricing.html',
          toastText: 'Opening official Keeper Security 30-day Free Trial...',
          isPrimary: false
        }
      ];
      break;

    case 'roboform-free-vs-premium':
      buttons = [
        {
          text: 'Sign Up Free',
          url: 'https://www.roboform.com/pricing',
          toastText: 'Opening official RoboForm Free registration...',
          isPrimary: true
        },
        {
          text: 'Try Free Trial',
          url: 'https://www.roboform.com/pricing',
          toastText: 'Opening official RoboForm 30-day Free Trial...',
          isPrimary: false
        }
      ];
      break;

    // 2. Reviews with single button pointing to official pricing page
    case 'nordpass-free-review':
      buttons = [
        {
          text: 'Sign Up Free',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening official NordPass Free registration...',
          isPrimary: true
        }
      ];
      break;

    case 'nordpass-premium-review':
      buttons = [
        {
          text: 'Try Free Trial',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening official NordPass Premium 30-day Free Trial...',
          isPrimary: true
        }
      ];
      break;

    case 'nordpass-family-plan-review':
      buttons = [
        {
          text: 'Try Free Trial',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening official NordPass Family Plan Trial...',
          isPrimary: true
        }
      ];
      break;

    case 'roboform-free-review':
      buttons = [
        {
          text: 'Sign Up Free',
          url: 'https://www.roboform.com/pricing',
          toastText: 'Opening official RoboForm Free registration...',
          isPrimary: true
        }
      ];
      break;

    case 'keeper-security-review':
      buttons = [
        {
          text: 'Try Free Trial',
          url: 'https://www.keepersecurity.com/pricing.html',
          toastText: 'Opening official Keeper Security 30-day Free Trial...',
          isPrimary: true
        }
      ];
      break;

    // Fallback/Defaults
    default:
      buttons = [
        {
          text: 'Try Free Trial',
          url: 'https://nordpass.com/pricing/',
          toastText: 'Opening secure registration portal...',
          isPrimary: true
        }
      ];
  }

  const handleAction = (btn: CTAButton) => {
    onShowToast(btn.toastText);
    setTimeout(() => {
      window.open(btn.url, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="mt-8 mb-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto select-none">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleAction(btn)}
          className={`
            w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] text-center cursor-pointer
            ${btn.isPrimary 
              ? 'bg-[#1a73e8] hover:bg-[#155cb4] text-white border-2 border-transparent shadow-[0_4px_12px_rgba(26,115,232,0.15)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.3)]' 
              : 'bg-white hover:bg-gray-50 text-[#05062a] border-2 border-[#05062a] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]'
            }
          `}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default function PostDetail({ overriddenSlug }: { overriddenSlug?: string } = {}) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isTocExpanded, setIsTocExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const currentSlug = overriddenSlug || slug || '';
  const post = getPostBySlug(currentSlug);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ShamsStack`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.excerpt || '';
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-secondary mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  const tocs: { text: string; slug: string }[] = [];
  if (post && post.content) {
    const lines = post.content.split('\n');
    lines.forEach(line => {
      const match = line.match(/^##\s+(.+)$/);
      if (match) {
        const text = match[1].trim().replace(/[\*\`\#]/g, '');
        if (text) {
          tocs.push({
            text,
            slug: generateSlug(text)
          });
        }
      }
    });
  }

  const relatedPosts = getBlogPosts()
    .filter(p => p.slug !== currentSlug)
    .slice(0, 2);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Top Progress Bar or Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Insights</span>
        </button>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-4 py-1.5 bg-secondary text-primary rounded-full text-xs font-black uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[31px] md:text-[55px] font-display font-extrabold text-[#05062a] mb-8 leading-[1.15] tracking-tight text-primary flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            {post.slug.toLowerCase().includes('proton') && (
              <span className="inline-flex items-center justify-center select-none w-10 h-10 md:w-14 md:h-14 relative shrink-0">
                <span className="absolute inset-[3px] rounded-[24%] bg-gradient-to-br from-[#7e57ff]/30 via-[#b357ff]/20 to-[#ff9e7a]/10 rotate-45 translate-x-[16%] translate-y-[16%] blur-[1px]" />
                <span className="absolute inset-[3px] rounded-[24%] bg-gradient-to-br from-[#6c47ff] via-[#b357ff] to-[#ff9e79] rotate-45 border border-white/20 shadow-[0_4px_12px_rgba(108,71,255,0.35)]" />
              </span>
            )}
            <span>{post.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-[#05062a]/80 font-medium leading-relaxed mb-10 border-l-4 border-[#cfa9ff] pl-5 py-1"
          >
            {post.excerpt}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between py-8 border-y border-gray-100"
          >
            <div className="flex items-center gap-4">
              <img 
                src={SITE_DATA.author.image} 
                alt={SITE_DATA.author.name} 
                className="w-12 h-12 rounded-full grayscale"
              />
              <div>
                <p className="text-sm font-black text-primary">{SITE_DATA.author.name}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Lead Researcher</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-primary">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-primary">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </header>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 mb-20 animate-fade-in">
        <div className="rounded-[40px] overflow-hidden shadow-2xl">
          <BlogCoverImage slug={post.slug} title={post.title} category={post.category} aspectRatio="aspect-[21/9]" />
        </div>
      </div>

      {/* Content Area */}
      <article className="max-w-3xl mx-auto px-4 pb-24">
        {/* Table of Contents - Sticky & Collapsible */}
        {tocs.length > 0 && (
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md pt-4 pb-4 mb-14 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="overflow-hidden border-2 border-[#cfa9ff] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-none">
              <div 
                onClick={() => setIsTocExpanded(!isTocExpanded)}
                className="flex items-center justify-between py-4 px-6 cursor-pointer select-none bg-white hover:bg-[#cfa9ff]/5 transition-colors"
                id="toc-header"
              >
                <span className="font-display font-bold text-lg text-[#05062a] tracking-tight">
                  Table of Contents
                </span>
                {isTocExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[#05062a] stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#05062a] stroke-[2.5]" />
                )}
              </div>
              
              {isTocExpanded && (
                <div className="border-t-2 border-[#cfa9ff] overflow-x-auto max-h-[60vh] overflow-y-auto">
                  <table className="w-full border-collapse text-base text-[#05062a]">
                    <thead>
                      <tr className="bg-[#cfa9ff]/20 border-b-2 border-[#cfa9ff]">
                        <th className="px-6 py-4 font-black text-center border-r border-[#cfa9ff] tracking-wide text-base text-[#05062a] w-16">
                          No.
                        </th>
                        <th className="px-6 py-4 font-black text-left border-r last:border-r-0 border-[#cfa9ff] tracking-wide text-base text-[#05062a]">
                          Section Title
                        </th>
                        <th className="px-6 py-4 font-black text-center tracking-wide text-base text-[#05062a] w-32">
                          Navigation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#cfa9ff]">
                      {tocs.map((item, index) => (
                        <tr key={index} className="odd:bg-white even:bg-[#cfa9ff]/5 hover:bg-[#cfa9ff]/10 transition-all duration-150">
                          <td className="px-6 py-[14px] font-black border-r border-[#cfa9ff] text-center text-[#05062a] text-sm md:text-base w-16 bg-[#cfa9ff]/5">
                            {index + 1}
                          </td>
                          <td className="px-6 py-[14px] text-left border-r border-[#cfa9ff] font-bold text-[#05062a] text-sm md:text-base leading-relaxed">
                            <a 
                              href={`#${item.slug}`} 
                              className="hover:text-primary transition-colors block w-full hover:underline decoration-2 underline-offset-4"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.slug);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  window.history.pushState(null, '', `#${item.slug}`);
                                  setIsTocExpanded(false);
                                }
                              }}
                            >
                              {item.text}
                            </a>
                          </td>
                          <td className="px-6 py-[14px] text-center font-bold text-[#05062a] text-sm md:text-base w-32">
                            <a 
                              href={`#${item.slug}`}
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#cfa9ff]/20 hover:bg-[#cfa9ff] text-[#05062a] rounded-none border border-[#cfa9ff] text-xs font-black uppercase tracking-widest transition-all duration-150"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.slug);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  window.history.pushState(null, '', `#${item.slug}`);
                                  setIsTocExpanded(false);
                                }
                              }}
                            >
                              Read &rarr;
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="prose prose-lg prose-primary max-w-none">
          <div className="markdown-body text-body-text leading-relaxed text-[17px] space-y-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => {
                  const textContent = getTextFromReactNode(children);
                  const slug = generateSlug(textContent);
                  return (
                    <h2 id={slug} className="scroll-mt-24 font-display font-extrabold text-[#05062a] text-2xl md:text-3xl mt-16 mb-[29px]">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const textContent = getTextFromReactNode(children);
                  const slug = generateSlug(textContent);
                  return (
                    <h3 id={slug} className="scroll-mt-24 font-display font-bold text-[#05062a] text-xl md:text-2xl mt-12 mb-[21px]">
                      {children}
                    </h3>
                  );
                },
                table: ({ children }) => (
                  <div className="my-12 flex flex-col items-center w-full">
                    <div className="overflow-hidden rounded-[24px] border border-[#cfa9ff] shadow-[0_12px_40px_rgba(5,6,42,0.08)] max-w-full w-full">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-base min-w-[700px] text-[#05062a]">
                          {children}
                        </table>
                      </div>
                    </div>
                    <TableCTA slug={post.slug} onShowToast={setToastMessage} />
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-[#cfa9ff] text-[#05062a] font-display font-black tracking-tight border-b-2 border-[#cfa9ff]">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-[#cfa9ff]/20">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="odd:bg-white even:bg-[#cfa9ff]/8 hover:bg-[#cfa9ff]/15 transition-all duration-150">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-5 font-black text-center border-r last:border-r-0 border-[#05062a]/15 tracking-wide text-lg text-[#05062a]">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-[18px] text-center border-r last:border-r-0 border-[#cfa9ff]/15 font-bold text-[#05062a]/90 text-sm md:text-base leading-relaxed">
                    {children}
                  </td>
                ),
                img: ({ src, alt }) => (
                  <div className="my-8 flex flex-col items-center">
                    <div className="border-[10px] border-[#cfa9ff] bg-white shadow-xl max-w-full overflow-hidden select-none">
                      <img 
                        src={src} 
                        alt={alt} 
                        className="w-full h-auto object-contain max-h-[550px] transition-transform duration-500 hover:scale-[1.01]" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {alt && (
                      <span className="text-xs font-mono font-bold text-[#05062a]/60 mt-3 block uppercase tracking-wider">
                        {alt}
                      </span>
                    )}
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Affiliate Box */}
        <div className="mt-20 p-10 bg-primary rounded-[40px] text-white">
          <h3 className="text-3xl font-display font-bold mb-6 italic">Expert Verdict</h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Based on our internal testing, we believe this tool represents the best value for professionals in 2024. If you decide to pick it up, using our link helps us continue doing these deep research dives.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-black rounded-full hover:scale-105 transition-transform group"
          >
            VIEW LATEST PRICING
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-primary mb-12">Continue Your Research</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {relatedPosts.map(rp => (
                <Link 
                  key={rp.slug} 
                  to={`/blog/${rp.slug}`}
                  className="group block bg-white p-8 rounded-[40px] shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">
                    {rp.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-primary group-hover:text-secondary transition-colors mb-4">
                    {rp.title}
                  </h3>
                  <p className="text-body-text text-base line-clamp-2">
                    {rp.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#05062a] text-white px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(5,6,42,0.3)] border-2 border-[#cfa9ff]/40 flex items-center gap-3 select-none max-w-sm w-[90%] md:w-auto"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a73e8] animate-pulse" />
            <p className="text-sm font-semibold tracking-wide font-sans">{toastMessage}</p>
            <button 
              onClick={() => setToastMessage(null)}
              className="ml-auto text-xs text-white/50 hover:text-white font-bold pl-4"
              aria-label="Close notification"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
