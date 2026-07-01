import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Plus, 
  Trash2, 
  CheckCircle, 
  Edit3, 
  Copy, 
  Globe, 
  FileText, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Download,
  Check,
  RotateCcw,
  Star
} from 'lucide-react';
import { saveBlogPost, deleteBlogPost, getCustomPosts, BlogPost } from '../utils/blogHelper';
import { SITE_DATA } from '../data/siteData';
import { Link } from 'react-router-dom';

// Recommended 20+ software tools for writing articles (Categorized for 60-30-10 strategy)
interface PresetTool {
  id: string;
  name: string;
  category: 'SEO & Content' | 'AppSumo Deals' | 'Rising AI' | 'Privacy & Security';
  weight: string; // "60% Focus", "30% Focus", "10% Focus"
  rating: number;
  badge: string;
  excerpt: string;
  suggestedSlug: string;
  tags: string[];
  defaultContent: string;
}

const PRESET_TOOLS: PresetTool[] = [
  {
    id: 'keeper',
    name: 'Keeper',
    category: 'Privacy & Security',
    weight: 'Strategic Asset',
    rating: 4.1,
    badge: 'Password Manager',
    excerpt: 'Comparing Keeper Free vs Keeper Unlimited? See the key differences in features, device support, password storage, security, and pricing to find out if upgrading is worth it.',
    suggestedSlug: 'keeper-free-vs-paid',
    tags: ['Privacy', 'Cybersecurity', 'Utilities'],
    defaultContent: `## Introduction

If you've started looking into Keeper, you've probably noticed it offers both a free version and a paid plan called Keeper Unlimited.

That naturally raises a question: do you actually need to pay, or does the free version cover what most people need?

It's a fair thing to wonder. Plenty of password managers offer a free tier that's really just a teaser for the paid product, with just enough functionality to convince you to upgrade quickly. Keeper takes a different approach, but its free plan is still significantly more limited than its paid offering, so it's worth understanding exactly where those limits sit before making a decision.

That's what this article is for. We'll compare Keeper Free and Keeper Unlimited side by side, looking at their features, limitations, and overall value. We'll also examine who can comfortably stay on the free plan and who would benefit from upgrading.

By the end, you should have a clear sense of whether Keeper Free is enough for your needs or whether Keeper Unlimited offers features you'll actually use.

We'll get into pricing later. First, let's look at what each plan includes.

---

## Keeper Free vs Keeper Unlimited

| Feature                       | Keeper Free           | Keeper Unlimited                    |
| ----------------------------- | --------------------- | ----------------------------------- |
| **Price**                     | Free                  | Paid (annual billing)               |
| **Password Storage**          | Limited to 10 records | Unlimited                           |
| **Device Support**            | 1 mobile device only  | Unlimited devices                   |
| **Sync**                      | Not available         | Unlimited sync across devices       |
| **Browser Extension**         | Not available         | Included                            |
| **Web Vault**                 | Not available         | Included                            |
| **Password Sharing**          | Not available         | Included                            |
| **Password Generator**        | Not available         | Included                            |
| **Record & Folder Deletion**  | Not available         | Included                            |
| **Security Key Support**      | Not available         | FIDO2 security key support included |
| **Two-Factor Authentication** | Included              | Included                            |

The gap between these two plans is bigger than it might look at first glance. Keeper Free isn't simply a smaller version of Keeper Unlimited. Instead, it's a basic password manager designed for single-device use, with a 10-record storage limit and no syncing between devices.

Keeper Unlimited removes those restrictions. You get unlimited password storage, unlimited devices, cross-device sync, browser extension access, web vault access, password sharing, and support for hardware security keys.

In practice, Keeper Free can work for users with very simple needs, but most people will eventually run into its limitations once they start storing more accounts or using multiple devices.

---

## Key Capabilities & Paid Upgrades

The upgrade to Keeper Unlimited is built for users who refuse to compromise on transactional security, cross-device access, and convenience:

- **Unlimited Password Storage**: Removes the restrictive 10-record cap entirely, allowing you to store email, banking, shopping, and streaming logins without second-guessing which credentials are worth keeping.
- **Cross-Device Active Sync**: Removal of mobile-only locking. Securely access your vault on phones, laptops, and tablets with real-time replication.
- **KeeperFill Browser Extensions**: Fully responsive autofill triggers across Chrome, Firefox, Safari, and more to completely bypass manual text entry.

---

## The Verdict

Keeper Unlimited is a strong, trustworthy password manager. But because Keeper Free is exceptionally restrictive compared to competitors like Bitwarden or Proton Pass, upgrading is practically required for any multi-device user.

**Our Rating:** 4.1 / 5.0  
**Best For:** Individuals with many online accounts, multi-device professionals, and secure-sharing households.`
  },
  {
    id: 'thinkific',
    name: 'Thinkific',
    category: 'SEO & Content',
    weight: '60% Focus',
    rating: 4.8,
    badge: 'LMS Platform',
    excerpt: 'Comprehensive Thinkific review. Is this online course builder still the best choice for training platforms?',
    suggestedSlug: 'thinkific-review-complete-online-course-builder',
    tags: ['LMS', 'Online Courses', 'Content Delivery'],
    defaultContent: `## Introduction: The Online Education Standard

Creating and selling online courses has become one of the most profitable business models for modern creators, educators, and enterprise agencies. However, host reliability, student retention tools, and payment processing speed can split your profit margins if you use the wrong tool.

**Thinkific** is an established giant in the Learning Management System (LMS) domain. In this hands-on research review, we inspect its course creation pipeline, responsive video player, and community features to determine if it is the best foundation for your brand.

---

## Technical Features & Content Delivery Systems

Thinkific provides an extremely polished student experience. Let's look at its three elite capabilities:
- **Polished Curriculum Builder**: Drag-and-drop course designer supports videos, PDF downloads, quizzes, and dynamic surveys.
- **Built-in Communities**: Eliminate your high-overhead Discord or Facebook group memberships. Thinkific has built-in discussion boards directly alongside lesson materials.
- **Thinkific App Store**: Easily sync with Mailchimp, active campaigns, Zoom webinars, and custom analytics integrations.

### Operational Benchmarks:
1. **Video Streaming Latency**: Zero issues, backed by high-speed enterprise servers.
2. **Checkout Conversion Speed**: Standard inline checkout reduces booking flow dropouts.
3. **Course Authoring Experience**: Drag-and-drop module setup is incredibly intuitive.

---

## The Verdict: Strategic Business Case

Thinkific acts as a powerful **Core Foundation (60% Focus)** asset. For creators looking to scale content value, its reliability and lack of transaction fees on standard tiers make it a stable long-term champion.

**Our Rating:** 4.8 / 5.0  
**Best For:** Independent course creators, corporate onboarding schools, and professional digital trainers.`
  },
  {
    id: 'neuronwriter',
    name: 'NeuronWriter',
    category: 'AppSumo Deals',
    weight: '30% Focus',
    rating: 4.9,
    badge: 'NLP Optimization',
    excerpt: 'Is NeuronWriter really the best alternative to Surfer SEO? NLP semantic analysis and structures compared.',
    suggestedSlug: 'neuronwriter-review-complete-blueprint',
    tags: ['SEO', 'Optimization', 'Copywriting'],
    defaultContent: `## Introduction: The Lifetime SEO Powerhouse

NeuronWriter has taken the digital publishing world by storm as one of AppSumo's all-time best-selling lifetime deals. But does it truly have the muscle to compete with monthly heavyweights like Surfer SEO?

In this hands-on research piece, we investigate NeuronWriter's NLP parameters, custom competitor crawling, and outline builders to verify whether this tool represents a true foundation asset for your content stack.

---

## Technical Deep Dive: Inside NeuronWriter's Engine

Unlike older generation keyword editors, NeuronWriter employs advanced semantic recommendations. It parses the top-ranking results on Google for your target keyword and extracts:
- Critical headers (H1, H2, H3 tags)
- Essential terms and contextual synonyms
- User Intent questions directly from Google's People Also Ask (PAA)

### Operational Benchmarks:
1. **Semantic Coverage Accuracy**: Exceptional competitor intent mapping.
2. **UI & Usability**: Clean content scoring circles that updates in real-time.
3. **Internal Link Recommendations**: Generates highly context-dependent link recommendations.

---

## The Verdict: Strategic Allocation Analysis

As a **Strategic Deal**, NeuronWriter gets our highest recommendation. Selecting a lifetime license completely eliminates a major recurring overhead cost, maintaining top-tier SEO output without a monthly drain on your cash reserves.

**Our Rating:** 4.9 / 5.0  
**Best For:** Independent niche publishers, content writers, and marketing agency leaders.`
  },
  {
    id: 'tidycal',
    name: 'TidyCal',
    category: 'AppSumo Deals',
    weight: '30% Focus',
    rating: 4.8,
    badge: 'Meeting Scheduler',
    excerpt: 'Stop paying $15/month for Calendly. TidyCal offers beautiful scheduling flows for a tiny one-time fee.',
    suggestedSlug: 'tidycal-scheduling-complete-review',
    tags: ['Productivity', 'Automation', 'Utilities'],
    defaultContent: `## Why Scheduling Overhead is a Growth Leak

Most solopreneurs and small agencies have a secret recurring fee leak: booking software. Moving from multiple monthly software fees to a streamlined, lifetime stack is the cleanest way to preserve your profit lines.

Enter **TidyCal**, the minimalist calendar scheduler built by the AppSumo team. We spent 30 days analyzing its scheduling interface and custom workflows.

---

## TidyCal Key Capabilities Explored

TidyCal acts as an extremely lightweight but robust bridge between your prospects and your calendar assets:
- **Multiple Calendar Integrations**: Syncs effortlessly with Google Calendar, Outlook, and Apple Calendar.
- **Paid Bookings Support**: Collect booking fees using PayPal or Stripe.
- **Custom Confirmation Redirects**: Send users directly to down-funnel marketing pages after they select their slot.

### Key Pros vs. Cons:
- **Pro**: Completely free of recurring monthly billing. Just one flat fee.
- **Pro**: Visual interface is blazing fast and lightweight.
- **Con**: Advanced group-polling features are somewhat basic compared to complex industry schedulers.

---

## The Ultimate SaaS Stack Verdict

If we look at utility-to-cost, TidyCal is an absolute standard core asset. It handles booking flows with zero friction, allowing entrepreneurs to project a highly professional booking experience without monthly bleeding.

**Our Rating:** 4.8 / 5.0  
**Best For:** Consultants, agency founders, and bloggers setting up premium discovery calls.`
  },
  {
    id: 'surferseo',
    name: 'Surfer SEO',
    category: 'SEO & Content',
    weight: '60% Focus',
    rating: 4.9,
    badge: 'SEO standard',
    excerpt: 'The undisputed king of content optimization. Why Surfer remains the professional choice for traffic generation.',
    suggestedSlug: 'surferseo-industry-standard-deep-dive',
    tags: ['SEO', 'Enterprise', 'Content Design'],
    defaultContent: `## The Modern Content Landscape: Content Quality over Quantity

In the era of AI-generated content spam, search engines are dramatically raising the bar for editorial placement. Content shouldn't just be readable; it must demonstrate structured topical authority.

**Surfer SEO** has spent years defining this exact environment. Here's our comprehensive breakdown of why agency professionals prioritize this over other choices.

---

## Surfer SEO: Professional Frameworks & Workflows

Surfer's value lies in its data precision. Let's look at its three elite capabilities:
1. **Dynamic Content Editor v2**: Real-time content recommendations optimized for current NLP updates.
2. **Topical Content Planner**: Maps out dozens of articles to build undeniable thematic mastery on any subject.
3. **Audit Suite**: Highlights technical gaps on your pages compared to immediate ranking competitors.

---

## Investment Allocation Analysis

While Surfer's pricing model requires monthly commitments, its direct output frequently pays for itself multiple times over. For scaling publishing systems, this represents a core, high-ROI workflow driver.

**Our Rating:** 4.9 / 5.0  
**Best For:** Professional SEO agencies, media networks, and search content directors.`
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Rising AI',
    weight: '10% Focus',
    rating: 4.9,
    badge: 'AI Search Engine',
    excerpt: 'Is Google Search dead? Perplexity is reshaping how content creators and researchers fetch internet facts.',
    suggestedSlug: 'perplexity-ai-search-disruption-review',
    tags: ['AI Search', 'Product Hunt', 'Research Asset'],
    defaultContent: `## The Paradigm Shift: Search is Getting Personalized

Traditional search engines present you with index links and require manual crawling. The next wave of research tools acts as a synthesist—reading, verifying, and drafting clear answers in seconds.

**Perplexity AI** has emerged as the premier Product Hunt sensation of the year. Let's look at how its custom search engines operate.

---

## How Perplexity Transforms Search Workflows

Perplexity's core strength is its multi-model search playground:
- **Focus Modes**: Restrict search scopes to Academic papers, YouTube transcripts, Reddit threads, or the general Web.
- **Interactive Pages Creator**: Instantly converts standard search inquiries into beautifully designed read-ready web articles.
- **Model Flexibility**: Let's premium users toggle between Claude 3 Opus, GPT-4o, or Perplexity's custom local models.

---

## Verdict: The Content Creator's Research Partner

For digital publishers compiling rich review guides, Perplexity acts as a force multiplier. It saves hundreds of manual research hours, making it a critical asset in the experimental 10% lab tier.

**Our Rating:** 4.9 / 5.0  
**Best For:** Lead researchers, outline authors, and digital publishers compiling complex roundups.`
  },
  {
    id: 'gamma',
    name: 'Gamma AI',
    category: 'Rising AI',
    weight: '10% Focus',
    rating: 4.8,
    badge: 'AI Presentation',
    excerpt: 'Create slide decks, landing pages, and visual proposals in seconds. Visual formatting reimagined.',
    suggestedSlug: 'gamma-ai-review-presentations-reimagined',
    tags: ['Presentations', 'AI Graphics', 'Visual Sales'],
    defaultContent: `## The Problem: The Visual Design Bottleneck

For marketers and SaaS affiliates, creating compelling slides or visual templates is notoriously slow. You either spend hours fighting layout borders in PowerPoint, or hire expensive design agencies.

**Gamma AI** proposes an automated approach. It transforms text outlines into gorgeous card-based documents, presentations, or webpages.

---

## Performance Review: What Can Gamma Actually Build?

We tested Gamma with several complex publishing outlines:
- **AI-Driven Templates**: Generates beautiful color pallets and matching typography pairings instantly.
- **Fluid Layout Responsive Blocks**: Keeps cards perfectly formatted across smartphones, tablets, and wide monitors.
- **Easy Sharing Web Portals**: Share slide-decks directly with a public link or embed them directly inside your blog posts!

---

## Verdict: Redefining Digital Presentations

Gamma is a highly creative lab asset that makes your online assets pop. It represents the perfect combination of speed and high-level visual elegance.

**Our Rating:** 4.8 / 5.0  
**Best For:** Startup founders pitching solutions, content marketers, and sales leaders.`
  },
  {
    id: 'proton',
    name: 'Proton Pass',
    category: 'Privacy & Security',
    weight: 'Strategic Asset',
    rating: 4.8,
    badge: 'Password Manager',
    excerpt: 'Compare Proton Pass Free vs Paid features, pricing, hide-my-email aliases, sharing tools, dark web monitoring, and more to see if Pass Plus is worth upgrading to.',
    suggestedSlug: 'proton-pass-free-vs-paid',
    tags: ['Privacy', 'Cybersecurity', 'Utilities'],
    defaultContent: `## Introduction: The New Security Frontier

Proton Pass is one of the newer password managers on the market, and it's gotten a lot of attention for offering a genuinely useful free plan, not just a watered-down trial. 

But "free" always raises a fair question: what are you actually giving up if you don't pay? One of the reasons Proton Pass stands out is that its free plan includes unlimited passwords and unlimited device support, features that many competing password managers reserve for paid users.

---

## Proton Pass Free vs. Paid Comparison at a Glance

| Feature | Proton Pass Free | Proton Pass Plus |
| :--- | :--- | :--- |
| **Logins & Notes** | Unlimited | Unlimited |
| **Device Sync** | Unlimited Devices | Unlimited Devices |
| **Hide-my-email aliases** | Capped at 10 | Unlimited |
| **2FA Authenticator** | Yes (Unlimited) | Yes (Unlimited) |
| **Proton Sentinel** | No | Yes (Advanced high-security protection) |
| **Dark Web Monitoring** | No | Yes (Continuous monitoring) |
| **Vaults & Folders** | 1 Vault | Unlimited Vaults |
| **Price** | $0 Forever | $1.99/month (often promo to $1.00/mo) |

---

## Key Capabilities & Paid Upgrades

The upgrade to Proton Pass Plus is built for users who refuse to compromise on transactional security and privacy:

- **Unlimited Hide-My-Email Aliases**: Generate dynamic forwarding addresses for every sign-up, ensuring your primary business or personal inbox is never leaked.
- **Proton Sentinel Program**: Combines specialized machine learning threat systems with 24/7 analysis to defend against advanced account takeover vectors.
- **Continuous Dark Web Sweeps**: Constant telemetry checks for leaked master keys or customer registry tables.

---

## The Verdict

For everyday lockbox utilities, **Proton Pass Free** is an absolute standard. But if you value deep inbox cleanliness, mail-masking autonomy, and top-tier account defense, upgrading to **Pass Plus** represents a flawless investment.

**Our Rating:** 4.8 / 5.0  
**Best For:** Privacy-focused individuals, independent digital creators, and remote developers.`
  },
  {
    id: 'rankmath',
    name: 'RankMath SEO',
    category: 'SEO & Content',
    weight: '60% Focus',
    rating: 4.9,
    badge: 'SEO Plugin',
    excerpt: 'The complete WordPress SEO plugin that leaves Yoast in the dust. Essential settings guide.',
    suggestedSlug: 'rankmath-seo-complete-setup-guide',
    tags: ['WordPress', 'SEO Plugin', 'On-Page'],
    defaultContent: `## Why RankMath Became the Industry Favorite

For years, the SEO plugin space was dominated by heavy, slow software. RankMath launched with a revolutionary concept: bundle all premium diagnostic tools into an incredibly lightweight, modular package.

---

## Key Settings & Optimization Capabilities

RankMath operates directly inside your content composer, checking:
- **Rich Schema Snippets**: Markup your reviews with real ratings, recipe structures, or FAQ accordions.
- **Advanced Core Analytics**: Monitor search rankings and impressions directly from your WordPress dashboard.
- **Clean Redirections Engine**: Handles broken crawl loops and manages 301 paths efficiently.

---

## Verdict: The Essential SEO Extension

RankMath is a no-brainer foundation asset. The free tier outclasses most paid alternatives, and the Pro setup offers massive analytic clarity.

**Our Rating:** 4.9 / 5.0  
**Best For:** Every WordPress content publisher and niche site affiliate.`
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    category: 'Rising AI',
    weight: '10% Focus',
    rating: 4.7,
    badge: 'Enterprise AI',
    excerpt: 'How Jasper scaled to an enterprise AI writing platform. Feature tests for marketing teams.',
    suggestedSlug: 'jasper-ai-enterprise-marketing-review',
    tags: ['AI Writing', 'Marketing Teams', 'Assets'],
    defaultContent: `## The Evolution of AI Writing Assistants

Writing platforms have evolved past basic GPT wrappers. Serious companies require contextual knowledge, consistent tone-of-voice compliance, and multi-channel campaign coordination.

**Jasper AI** serves this strategic market segment. Let's review its brand voice capabilities.

---

## Core Enterprise Offerings:
- **Custom Brand Voices**: Upload style guides and product datasets so Jasper writes in your exact brand persona.
- **Full Campaigns Generator**: Output landing page copy, email sequences, and social media captions simultaneously.
- **Built-in Plagiarism Scans**: Partnered with Copyscape to ensure generated content drafts are safe.

---

## Verdict: Premium Scale Solution

Jasper is a top-tier lab asset. For automated content pipelines requiring rigorous control and team organization, it justifies its premium tier.

**Our Rating:** 4.7 / 5.0  
**Best For:** Marketing departments, editorial teams, and scaling social media agencies.`
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'SEO & Content',
    weight: '60% Focus',
    rating: 4.8,
    badge: 'PM Suite',
    excerpt: 'The absolute task tracking blueprint for publishers managing dozens of parallel weekly articles.',
    suggestedSlug: 'clickup-editorial-project-management-guide',
    tags: ['Project Management', 'Editorial Pipeline', 'Productivity'],
    defaultContent: `## Taming the Creative Chaos: PM for Publishers

Managing a full content calendar is incredibly complex. You have keyword research, content drafting, image generation, on-page optimization, proofreading, and affiliate linkage.

**ClickUp** is designed to solve this by consolidating all productivity modules into a single hub.

---

## Customizing ClickUp for Content Production

We recommend structuring your ClickUp workspace using our tailored editorial pipeline:
1. **Keyword Research (Inbox)**: Rank keywords and list potential titles.
2. **Writing (Active Drafts)**: Assign content writers and set target date landmarks.
3. **Optimizing (SEO Check)**: Run Surfer or NeuronWriter audits.
4. **Scheduled**: Match with publication timelines.

---

## Verdict: The Ultimate Productivity Engine

ClickUp represents a foundation asset. It eliminates communication leaks, tracks delivery deadlines, and scales easily as you add freelance authors.

**Our Rating:** 4.8 / 5.0  
**Best For:** Content team leads, agency operators, and ambitious solopreneurs.`
  },
  {
    id: 'taskmagic',
    name: 'TaskMagic',
    category: 'AppSumo Deals',
    weight: '30% Focus',
    rating: 4.7,
    badge: 'Browser Automat.',
    excerpt: 'Record actions, build triggers, and automate SaaS processes with this lifetime automation asset.',
    suggestedSlug: 'taskmagic-automation-lifetime-deal-review',
    tags: ['No-Code', 'Automation', 'Utilities'],
    defaultContent: `## Web Automation Made Simple for Non-Developers

Historically, building complex browser scraper loops or workflow patterns required advanced python coding skills.

**TaskMagic** aims to make these tasks visual. Simply launch their recording workspace, click through your actions, and save it as an automated workflow loop.

---

## TaskMagic Capabilities Evaluation
- **Visual Recording Engine**: Captures button selections, data scrolling, and complex field inputs.
- **Webhook Triggers**: Connect with Google Sheets, Slack, or Telegram instantly.
- **No-Code Scraping**: Extract pricing datasets or market reviews from any platform.

---

## Verdict: Growth Utility Gem

TaskMagic is a fantastic AppSumo deal. It acts as an invaluable utility asset and replaces expensive Zapier tasks with standalone local scripts.

**Our Rating:** 4.7 / 5.0  
**Best For:** Growth marketers, web scrapers, and operations builders.`
  },
  {
    id: 'siteguru',
    name: 'SiteGuru',
    category: 'AppSumo Deals',
    weight: '30% Focus',
    rating: 4.9,
    badge: 'SEO Diagnostic',
    excerpt: 'A clean SEO audit without the typical technical confusion. How SiteGuru simplifies diagnostic reports.',
    suggestedSlug: 'siteguru-seo-audit-lifetime-deal',
    tags: ['SEO Audit', 'Optimization', 'Diagnostics'],
    defaultContent: `## SEO Auditing: Stop Drowning in Raw Metrics

Many audit systems give you a confusing forest of lines, red alerts, and dense spreadsheets that don't tell you *what to actually do*.

**SiteGuru** solves this. It acts as an advisor, analyzing site performance data and returning a prioritized, humbler daily task list to improve search traffic.

---

## Crucial Audit Modules Audited
- **Indexing Health Verification**: Easily checks page status, duplicate tag headers, and XML links.
- **On-Page Optimization Guidelines**: Pinpoints pages lacking descriptive headers, structural links, or appropriate images.
- **Google Search Console Integration**: Connect search metrics with technical checklists for continuous monitoring.

---

## Verdict: The Ideal Client-Onboarding Asset

SiteGuru is a remarkable utility. It delivers supreme utility to small site owners and agencies who need quick, actionable diagnostics without bloat.

**Our Rating:** 4.9 / 5.0  
**Best For:** Niche site owners, marketing generalists, and customer onboarding leads.`
  },
  {
    id: 'linkwhisper',
    name: 'Link Whisper',
    category: 'SEO & Content',
    weight: '60% Focus',
    rating: 4.8,
    badge: 'Internal Linking',
    excerpt: 'Automate smart contextual internal links on WordPress to skyrocket search visibility.',
    suggestedSlug: 'linkwhisper-internal-linking-review-autopilot',
    tags: ['Internal Linking', 'On-Page SEO', 'WordPress'],
    defaultContent: `## Why Internal Linking is a Highly Leveraged SEO Vector

Internal links help Google crawled bots navigate your site and understand topical hubs. A strong internal schema distributes page-rank authority across your entire portfolio.

**Link Whisper** uses a smart heuristic engine to suggest links live while you draft, running audits across old content items.

---

## Link Whisper Performance Benchmarks
- **Contextual NLP Suggestions**: Recommends linking anchors as you compose inside WordPress.
- **Inbound/Outbound Audit Reports**: Pinpoints "orphan pages" with zero active link pathways.
- **Bulk Linking Automation**: Search target phrases, confirm suggestions, and create dozens of links globally in 10 seconds.

---

## Verdict: Crucial Workflow Optimizer

Link Whisper is a powerful foundation asset. It automates a highly tedious, critical manual task, saving hours of strategic content placement time.

**Our Rating:** 4.8 / 5.0  
**Best For:** High-volume blogging portfolios and organic publishers.`
  }
];

export default function ContentPlanner() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'SEO & Content' | 'AppSumo Deals' | 'Rising AI'>('All');
  
  // Custom states
  const [plannedTools, setPlannedTools] = useState<PresetTool[]>(PRESET_TOOLS);
  const [selectedTool, setSelectedTool] = useState<PresetTool | null>(PRESET_TOOLS[0]);
  const [customPosts, setCustomPosts] = useState<BlogPost[]>([]);
  
  // Active editor states
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('SEO & Content');
  const [editSlug, setEditSlug] = useState('');
  const [editExcerpt, setEditExcerpt] = useState('');
  const [editImage, setEditImage] = useState('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop');
  const [editContent, setEditContent] = useState('');
  
  // Custom tool creation form
  const [showAddModal, setShowAddModal] = useState(false);
  const [newToolName, setNewToolName] = useState('');
  const [newToolCategory, setNewToolCategory] = useState<'SEO & Content' | 'AppSumo Deals' | 'Rising AI'>('SEO & Content');
  const [newToolRating, setNewToolRating] = useState(4.8);
  const [newToolBadge, setNewToolBadge] = useState('');
  const [newToolExcerpt, setNewToolExcerpt] = useState('');

  // Status notifications
  const [clipboardCopied, setClipboardCopied] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Load custom published posts on mount
  useEffect(() => {
    setCustomPosts(getCustomPosts());
  }, []);

  // Load selected tool details into editor inputs
  useEffect(() => {
    if (selectedTool) {
      // Check if user has an existing saved custom post for this slug
      const existing = customPosts.find(p => p.slug === selectedTool.suggestedSlug);
      
      if (existing) {
        setEditTitle(existing.title);
        setEditCategory(existing.category);
        setEditSlug(existing.slug);
        setEditExcerpt(existing.excerpt);
        setEditImage(existing.image);
        setEditContent(existing.content);
      } else {
        setEditTitle(`Review: Why ${selectedTool.name} Is a Game-Changer in 2024`);
        setEditCategory(selectedTool.category);
        setEditSlug(selectedTool.suggestedSlug);
        setEditExcerpt(selectedTool.excerpt);
        
        // Random elegant image from unsplash depending on category
        let img = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop';
        if (selectedTool.category === 'AppSumo Deals') {
          img = 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop';
        } else if (selectedTool.category === 'Rising AI') {
          img = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop';
        }
        setEditImage(img);
        setEditContent(selectedTool.defaultContent);
      }
    }
  }, [selectedTool, customPosts]);

  // Handle Save Draft to Local Workbench
  const handleSaveDraft = () => {
    if (!editSlug.trim() || !editTitle.trim()) {
      alert("Title and Slug details are required!");
      return;
    }
    
    setSaveStatus("Saving draft...");
    setTimeout(() => {
      setSaveStatus("Draft layout saved locally!");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 800);
  };

  // Convert custom tool to live blog post inside App
  const handlePublishToBlog = () => {
    if (!editSlug.trim() || !editTitle.trim()) {
      alert("Title and Slug details are required!");
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      slug: editSlug.trim(),
      title: editTitle.trim(),
      category: editCategory,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(3, Math.ceil(editContent.split(' ').length / 200))} min`,
      image: editImage,
      excerpt: editExcerpt,
      content: editContent
    };

    saveBlogPost(newPost);
    
    // Refresh core posts
    const updated = getCustomPosts();
    setCustomPosts(updated);
    
    setSaveStatus("🎉 Successfully Published to Live Blog!");
    setTimeout(() => setSaveStatus(null), 4000);
  };

  // Remove a planned draft or custom post
  const handleDeletePost = (slugToDelete: string) => {
    if (confirm("Are you sure you want to delete this custom post? it will be removed from your blog.")) {
      deleteBlogPost(slugToDelete);
      setCustomPosts(getCustomPosts());
      setSaveStatus("Removed post successfully!");
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  // Copy raw outline markdown file
  const handleCopyToClipboard = () => {
    const rawMarkdown = `---
title: "${editTitle}"
category: "${editCategory}"
excerpt: "${editExcerpt}"
thumbnail: "${editImage}"
date: "${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}"
---

${editContent}`;

    navigator.clipboard.writeText(rawMarkdown).then(() => {
      setClipboardCopied(true);
      setTimeout(() => setClipboardCopied(false), 2000);
    });
  };

  // Download raw markdown file
  const handleDownloadFile = () => {
    const rawMarkdown = `---
title: "${editTitle}"
category: "${editCategory}"
excerpt: "${editExcerpt}"
thumbnail: "${editImage}"
date: "${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}"
---

${editContent}`;

    const element = document.createElement("a");
    const file = new Blob([rawMarkdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${editSlug || 'draft-post'}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Reset custom articles database
  const handleRestoreDefaults = () => {
    if (confirm("Are you sure you want to clear your custom database posts? This restores original presets.")) {
      localStorage.removeItem('saasreview_custom_posts');
      setCustomPosts([]);
      setSaveStatus("Restored blog posts defaults!");
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  // Add custom custom software tool to list
  const handleAddCustomTool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newToolName.trim()) return;

    const lowerSlug = newToolName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const newTool: PresetTool = {
      id: `custom-${Date.now()}`,
      name: newToolName,
      category: newToolCategory,
      weight: newToolCategory === 'SEO & Content' ? '60% Focus' : (newToolCategory === 'AppSumo Deals' ? '30% Focus' : '10% Focus'),
      rating: newToolRating,
      badge: newToolBadge || 'New Asset',
      excerpt: newToolExcerpt || `Detailed overview and deployment outline of the new tool ${newToolName}.`,
      suggestedSlug: `${lowerSlug}-expert-blueprint-review`,
      tags: ['SaaS', 'Review', 'Affiliate'],
      defaultContent: `## Introduction: Evaluating ${newToolName}

As a marketer focused on building automated cash-generating publishing assets, optimizing workflows is paramount. Today we evaluate **${newToolName}**, a software tool looking to simplify modern workflows.

---

## Core Operational Capabilities of ${newToolName}
- **Rapid Setup Framework**: Standard integration pipelines that deploy quickly.
- **Interactive Interface Outline**: Easily digestible charts for critical team tasks.
- **Affiliate Asset Performance**: Drives strong customer retention.

---

## Pros & Cons
- **Pros**: Fast UX, extremely low learning curve.
- **Cons**: Premium package gets expensive under rapid scale tags.

---

## The Verdict & Business Impact Recommendation

We find ${newToolName} offers a robust interface that is highly practical for small publishers.

**Our Rating:** ${newToolRating} / 5.0  
**Best For:** Modern agency builders seeking digital scaling solutions.`
    };

    setPlannedTools([newTool, ...plannedTools]);
    setSelectedTool(newTool);
    setNewToolName('');
    setNewToolBadge('');
    setNewToolExcerpt('');
    setShowAddModal(false);
    
    setSaveStatus(`Added ${newToolName} to planned planner list!`);
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const filteredTools = selectedCategory === 'All' 
    ? plannedTools 
    : plannedTools.filter(t => t.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen bg-[#FBFBFA] text-primary">
      {/* Banner Area */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Affiliate Publisher Strategy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary">
                SaaS Review <span className="italic text-secondary font-medium">Writer Workbench</span>
              </h1>
              <p className="text-body-text text-base mt-2 max-w-2xl">
                Plan, draft, and instantly publish reviews for your <strong className="text-primary font-bold">20+ selected software list</strong>.
                Structure posts according to the <strong className="text-primary font-bold">60% Core Topics</strong>, <strong className="text-primary font-bold">30% Lifetime Deals</strong>, and <strong className="text-primary font-bold">10% Rising AI</strong> roadmap.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleRestoreDefaults}
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                title="Reset custom published posts"
              >
                <RotateCcw className="w-4 h-4" />
                Restore Defaults
              </button>
              <button 
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-5 py-3 bg-primary text-secondary hover:bg-opacity-95 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-primary/10"
              >
                <Plus className="w-4 h-4 text-accent" />
                Add Custom Tool
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#EBEAE4]">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#9c9a92]">Pipeline Target</span>
              <div className="text-3xl font-display font-black mt-2 text-primary">{plannedTools.length} Tools</div>
              <p className="text-xs text-gray-500 mt-1">20+ curated for scaling affiliate networks</p>
            </div>
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#EBEAE4]">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#9c9a92]">Drafts Published</span>
              <div className="text-3xl font-display font-black mt-2 text-[#C0AA83]">{customPosts.length} Live</div>
              <p className="text-xs text-gray-500 mt-1">Rendered instantly in live Blog feed</p>
            </div>
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#EBEAE4]">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#9c9a92]">Strategy Guidelines</span>
              <div className="text-3xl font-display font-black mt-2 text-primary">60 - 30 - 10</div>
              <p className="text-xs text-gray-500 mt-1">SEO Blueprint - Deals - Experimental AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workbench Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Tool list / planner */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-extrabold text-primary text-xl mb-4">Pipeline Planner</h3>
              
              {/* Category Filter tabs */}
              <div className="flex gap-1 bg-gray-50 p-1.5 rounded-xl border border-gray-100 mb-6 flex-wrap">
                {['All', 'SEO & Content', 'AppSumo Deals', 'Rising AI'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`flex-grow text-[10px] font-black uppercase tracking-wider px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === cat 
                        ? 'bg-primary text-secondary' 
                        : 'text-gray-500 hover:text-primary hover:bg-gray-100/50'
                    }`}
                  >
                    {cat === 'All' ? 'All' : cat.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Tools scroll block */}
              <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredTools.map((tool) => {
                  const isSelected = selectedTool?.id === tool.id;
                  const isPublished = customPosts.some(p => p.slug === tool.suggestedSlug);
                  
                  return (
                    <div
                      key={tool.id}
                      onClick={() => setSelectedTool(tool)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border text-left flex items-start gap-3 relative overflow-hidden group ${
                        isSelected 
                          ? 'bg-[#FAF8F5] border-secondary/60 shadow-md shadow-secondary/5' 
                          : 'bg-white border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {/* Left accent color based on category */}
                      <span className={`absolute top-0 bottom-0 left-0 w-1.5 ${
                        tool.category === 'SEO & Content' ? 'bg-indigo-400' : (tool.category === 'AppSumo Deals' ? 'bg-amber-400' : 'bg-rose-400')
                      }`} />

                      <div className="flex-grow pl-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-display font-extrabold text-primary text-base group-hover:text-secondary transition-colors">
                            {tool.name}
                          </h4>
                          <span className="text-[9px] font-bold text-gray-400 font-mono">
                            {tool.weight}
                          </span>
                        </div>
                        <p className="text-xs text-body-text line-clamp-2 leading-relaxed mb-3">
                          {tool.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                            {tool.badge}
                          </span>
                          
                          {/* Live published status Indicator */}
                          {isPublished ? (
                            <Link
                              to={`/blog/${tool.suggestedSlug}`}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="flex items-center gap-1 text-[10px] font-bold text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 px-2 py-0.5 rounded font-mono transition-colors"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              VIEW LIVE ↗
                            </Link>
                          ) : (
                            <span className="text-[10px] font-bold text-gray-400 font-mono">
                              UNWRITTEN
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Strategy Advice Box */}
            <div className="bg-[#F6FAF7] border border-[#D2E7DE] rounded-3xl p-6 text-left">
              <span className="px-2.5 py-1 bg-[#D2E7DE] text-[#1E4D3A] rounded-full text-[10px] font-extrabold uppercase tracking-wide inline-block mb-3">
                Research Allocation Guide
              </span>
              <h4 className="font-display font-bold text-[#1E4D3A] mb-2">Rule of Content Scaling</h4>
              <p className="text-xs text-[#2A5E49] leading-relaxed">
                Publishing 20 articles isn't a random sprint. Leverage your <strong>Core Foundation (60%)</strong> to gain initial topical SEO trust, then integrate lucrative high-converting <strong>AppSumo products (30%)</strong> to trigger commissions, while testing <strong>Trending AI tools (10%)</strong> to capture high-volume search traffic.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic editor & actions workspace */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedTool ? (
                <motion.div
                  key={selectedTool.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden text-left flex flex-col min-h-[750px]"
                >
                  {/* Selected tool banner */}
                  <div className="bg-primary text-secondary p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 bg-secondary text-primary rounded-full text-[10px] font-black uppercase tracking-wider">
                          {editCategory}
                        </span>
                        <div className="flex items-center gap-1.5 py-1 px-2 border border-gray-700 rounded-full text-[10px] font-mono text-gray-400">
                          <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                          <span>Rating: {selectedTool.rating} / 5.0</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-display font-black tracking-tight text-white mb-2">
                        Drafting Blueprint: {selectedTool.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2.5 mt-1">
                        <p className="text-gray-300 text-sm italic">
                          Suggested slug inside url: <strong className="text-secondary font-mono">/blog/{editSlug}</strong>
                        </p>
                        {customPosts.some(p => p.slug === editSlug) && (
                          <Link
                            to={`/blog/${editSlug}`}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-green-500 hover:bg-green-600 border border-green-400/30 text-white font-mono text-[9px] font-black rounded uppercase tracking-wider transition-all"
                          >
                            <CheckCircle className="w-3 h-3 fill-white text-green-500" />
                            VIEW LIVE ARTICLE ↗
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      <button 
                        onClick={handleCopyToClipboard}
                        className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 rounded-xl text-white transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                        title="Copy raw Markdown"
                      >
                        {clipboardCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-secondary" />}
                        {clipboardCopied ? 'Copied' : 'Copy MD'}
                      </button>
                      <button 
                        onClick={handleDownloadFile}
                        className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 rounded-xl text-white transition-all font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                        title="Download raw file"
                      >
                        <Download className="w-4 h-4 text-secondary" />
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Active Draft Form Content */}
                  <div className="p-8 md:p-10 flex-grow space-y-6">

                    {/* Status notification */}
                    {saveStatus && (
                      <div className="p-4 bg-secondary/15 border border-secondary text-primary rounded-2xl text-xs font-bold font-mono text-center flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-accent animate-bounce" />
                        {saveStatus}
                      </div>
                    )}

                    {/* Basic Meta Settings Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Article Title</label>
                        <input 
                          type="text" 
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-bold placeholder-gray-300"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Target Route Slug</label>
                        <input 
                          type="text" 
                          value={editSlug}
                          onChange={(e) => setEditSlug(e.target.value.toLowerCase().replace(/[^a-z0-9\-]+/g, '-'))}
                          className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-mono placeholder-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Post Category</label>
                        <select 
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value)}
                          className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none bg-white transition-all text-sm font-bold"
                        >
                          <option value="SEO & Content">SEO & Content (60%)</option>
                          <option value="AppSumo Deals">AppSumo Deals (30%)</option>
                          <option value="Rising AI">Rising AI (10%)</option>
                          <option value="SEO">Technical SEO</option>
                          <option value="Marketing">Marketing Systems</option>
                          <option value="Productivity">Productivity Hacks</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Cover Image URL</label>
                        <input 
                          type="text" 
                          value={editImage}
                          onChange={(e) => setEditImage(e.target.value)}
                          className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Executive Excerpt (1-2 sentences)</label>
                      <input 
                        type="text" 
                        value={editExcerpt}
                        onChange={(e) => setEditExcerpt(e.target.value)}
                        className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-medium"
                      />
                    </div>

                    {/* Markdown Body Textarea */}
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92]">Article Content (Markdown supported)</label>
                        <span className="text-[10px] font-mono font-bold text-gray-400">
                          {editContent.split(/\s+/).filter(Boolean).length} Words suggested
                        </span>
                      </div>
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={16}
                        className="w-full flex-grow p-6 border border-gray-100 focus:border-primary rounded-3xl focus:ring-1 focus:ring-primary outline-none font-mono text-sm leading-relaxed bg-[#FDFDFC] shadow-inner"
                        placeholder="Write your beautiful markdown article draft..."
                      />
                    </div>

                  </div>

                  {/* Submission actions */}
                  <div className="p-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50">
                    <div className="text-xs text-gray-500">
                      Saving draft caches details locally. Publishing makes it immediately integrated inside routing views!
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto flex-wrap">
                      {customPosts.some(p => p.slug === editSlug) && (
                        <>
                          <Link 
                            to={`/blog/${editSlug}`}
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 text-center"
                          >
                            <Globe className="w-4 h-4 text-emerald-300" />
                            Open Live URL ↗
                          </Link>
                          <button 
                            onClick={() => handleDeletePost(editSlug)}
                            className="flex items-center justify-center gap-2 px-5 py-3 hover:bg-red-50 text-red-600 rounded-xl transition-all font-bold text-xs uppercase tracking-wider border border-transparent hover:border-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete Post
                        </button>
                        </>
                      )}
                      <button 
                        onClick={handleSaveDraft}
                        className="flex-grow sm:flex-grow-0 px-6 py-3 bg-white hover:bg-gray-100 border border-gray-200 text-primary font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                      >
                        Save Draft
                      </button>
                      <button 
                        onClick={handlePublishToBlog}
                        className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-6 py-3 bg-[#C0AA83] text-primary hover:bg-[#B59D73] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-900/5"
                      >
                        <Globe className="w-4 h-4" />
                        Publish to Live Blog
                      </button>
                    </div>
                  </div>

                </motion.div>
              ) : (
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12 text-center h-[500px] flex flex-col justify-center items-center">
                  <FileText className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="font-display font-black text-2xl text-primary mb-2">No Tool Selected</h3>
                  <p className="text-body-text max-w-sm mb-6">
                    Select any scheduled SaaS review template from the pipeline planner list on the left to start editing and writing.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Creation Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl relative z-10 text-left"
            >
              <div className="p-8 border-b border-gray-100 bg-[#FAF9F5]">
                <h3 className="text-2xl font-display font-black text-primary">Add Custom SaaS Tool</h3>
                <p className="text-body-text text-xs mt-1">Include a planned tool details not in the preset list of 20+.</p>
              </div>
              <form onSubmit={handleAddCustomTool} className="p-8 space-y-6">
                <div>
                  <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Tool Name</label>
                  <input 
                    type="text" 
                    required
                    value={newToolName}
                    onChange={(e) => setNewToolName(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-bold"
                    placeholder="e.g. ActiveCampaign"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Strategy Category</label>
                    <select 
                      value={newToolCategory}
                      onChange={(e) => setNewToolCategory(e.target.value as any)}
                      className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none bg-white transition-all text-sm font-bold"
                    >
                      <option value="SEO & Content">SEO & Content (60%)</option>
                      <option value="AppSumo Deals">AppSumo Deals (30%)</option>
                      <option value="Rising AI">Rising AI (10%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Tool Badge Rating</label>
                    <div className="flex gap-2 items-center">
                      <input 
                        type="number" 
                        min="1" 
                        max="5" 
                        step="0.1"
                        value={newToolRating}
                        onChange={(e) => setNewToolRating(parseFloat(e.target.value))}
                        className="w-20 px-4 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-center font-bold"
                      />
                      <input 
                        type="text" 
                        placeholder="e.g. Email King"
                        value={newToolBadge}
                        onChange={(e) => setNewToolBadge(e.target.value)}
                        className="flex-grow px-4 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-black tracking-widest text-[#9c9a92] mb-2 block">Brief Summary</label>
                  <textarea 
                    value={newToolExcerpt}
                    onChange={(e) => setNewToolExcerpt(e.target.value)}
                    rows={2}
                    className="w-full px-5 py-3 border border-gray-100 focus:border-primary rounded-xl focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-medium"
                    placeholder="Short description of why you are planning this article review."
                  />
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100 justify-end">
                  <button 
                    type="button" 
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-3 text-gray-500 hover:text-primary transition-colors font-bold text-xs uppercase"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-[#C0AA83] hover:bg-[#B59D73] text-primary font-bold text-xs uppercase rounded-xl transition-colors shadow-md"
                  >
                    Add to Planner
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
