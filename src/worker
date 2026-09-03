// Cloudflare Worker entry point (Workers + Static Assets model).
//
// This Worker sits in front of the static site (built into `dist/`).
// For every request, it checks if the URL is a blog article route
// (/blog/:slug). If so, it fetches the normal static index.html and
// rewrites it so the raw HTML includes:
//   1. This article's own title/description/OG/Twitter meta tags
//      (for correct link previews on Google, Facebook, WhatsApp, LinkedIn)
//   2. The actual article text inside #root (for any crawler or
//      reviewer that reads raw HTML without running JavaScript)
// Every other route (homepage, assets, etc.) is passed straight through
// to the normal static asset handler, unchanged.

import { SITE_DATA } from './data/siteData';

export interface Env {
  ASSETS: Fetcher;
}

// Small markdown -> HTML converter. Only needs to produce real,
// readable text for crawlers — not a pixel-perfect render (React
// replaces this client-side for real visitors anyway).
function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const htmlParts: string[] = [];
  let listBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let paragraphBuffer: string[] = [];

  const inlineFormat = (text: string) =>
    text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  const flushParagraph = () => {
    if (paragraphBuffer.length) {
      htmlParts.push(`<p>${inlineFormat(paragraphBuffer.join(' '))}</p>`);
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length && listType) {
      htmlParts.push(`<${listType}>${listBuffer.join('')}</${listType}>`);
    }
    listBuffer = [];
    listType = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith('| ') || line.startsWith('|-')) {
      if (!/^\|[\s-:|]+\|$/.test(line)) {
        flushParagraph();
        flushList();
        const cells = line.split('|').map((c) => c.trim()).filter(Boolean);
        if (cells.length) htmlParts.push(`<p>${inlineFormat(cells.join(' — '))}</p>`);
      }
      continue;
    }
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      htmlParts.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      htmlParts.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      flushParagraph();
      flushList();
      htmlParts.push(`<h2>${inlineFormat(line.slice(2))}</h2>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      listBuffer.push(`<li>${inlineFormat(line.replace(/^[-*]\s+/, ''))}</li>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
      }
      listBuffer.push(`<li>${inlineFormat(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    flushList();
    paragraphBuffer.push(line);
  }
  flushParagraph();
  flushList();

  return htmlParts.join('\n');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/blog\/([^/]+)\/?$/);

    // Not an article route — serve the static site/assets exactly as before
    if (!match) {
      return env.ASSETS.fetch(request);
    }

    const slug = decodeURIComponent(match[1]);
    const post = SITE_DATA.blogPosts.find((p) => p.slug === slug);

    const assetResponse = await env.ASSETS.fetch(request);
    const contentType = assetResponse.headers.get('content-type') || '';

    if (!post || !contentType.includes('text/html')) {
      return assetResponse;
    }

    const siteUrl = url.origin;
    const pageUrl = request.url;
    const pageTitle = `${post.title} | ShamsStack`;
    const pageDescription = post.excerpt || '';
    const pageImage = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-default.jpg`;

    const articleHtml = `
      <article>
        <h1>${post.title}</h1>
        <p><em>${pageDescription}</em></p>
        ${post.image ? `<img src="${pageImage}" alt="${post.title}" />` : ''}
        ${markdownToHtml(post.content || '')}
      </article>
    `;

    return new HTMLRewriter()
      .on('title', {
        element(el) {
          el.setInnerContent(pageTitle);
        },
      })
      .on('meta[name="description"]', {
        element(el) {
          el.setAttribute('content', pageDescription);
        },
      })
      .on('meta[property="og:type"]', {
        element(el) {
          el.setAttribute('content', 'article');
        },
      })
      .on('meta[property="og:title"]', {
        element(el) {
          el.setAttribute('content', pageTitle);
        },
      })
      .on('meta[property="og:description"]', {
        element(el) {
          el.setAttribute('content', pageDescription);
        },
      })
      .on('meta[property="og:image"]', {
        element(el) {
          el.setAttribute('content', pageImage);
        },
      })
      .on('meta[property="og:url"]', {
        element(el) {
          el.setAttribute('content', pageUrl);
        },
      })
      .on('meta[name="twitter:card"]', {
        element(el) {
          el.setAttribute('content', 'summary_large_image');
        },
      })
      .on('meta[name="twitter:title"]', {
        element(el) {
          el.setAttribute('content', pageTitle);
        },
      })
      .on('meta[name="twitter:description"]', {
        element(el) {
          el.setAttribute('content', pageDescription);
        },
      })
      .on('meta[name="twitter:image"]', {
        element(el) {
          el.setAttribute('content', pageImage);
        },
      })
      .on('link[rel="canonical"]', {
        element(el) {
          el.setAttribute('href', pageUrl);
        },
      })
      .on('div#root', {
        element(el) {
          el.setInnerContent(articleHtml, { html: true });
        },
      })
      .transform(assetResponse);
  },
};
