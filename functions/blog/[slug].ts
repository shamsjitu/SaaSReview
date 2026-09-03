// Cloudflare Pages Function — runs at the edge before the SPA loads.
// Route: /blog/:slug  (file-based routing: functions/blog/[slug].ts -> /blog/:slug)
//
// Purpose: (1) rewrite index.html's meta tags with this article's own
// title/description/image so social previews are correct, AND (2) inject
// the actual article text into the #root div so search engines and any
// crawler/reviewer that reads raw HTML (without running JavaScript) sees
// real content instead of an empty <div id="root"></div>. React still
// takes over and re-renders the interactive page normally once the
// client-side script loads — this injected HTML is just the "read-only"
// version shown before that happens.

import { SITE_DATA } from '../../src/data/siteData';

interface Env {
  ASSETS: { fetch: typeof fetch };
}

// Very small markdown -> HTML converter. It doesn't need to be perfect —
// it only needs to produce real, readable text for crawlers, not a pixel
// perfect render (React replaces it client-side for real visitors anyway).
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
      // Skip table separator/formatting rows, but keep table cell text as a line
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

export const onRequest: PagesFunction<Env> = async (context) => {
  const { params, env, request } = context;

  const slug =
    typeof params.slug === 'string'
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : '';

  const assetResponse = await env.ASSETS.fetch(request);
  const contentType = assetResponse.headers.get('content-type') || '';
  const post = SITE_DATA.blogPosts.find((p) => p.slug === slug);

  if (!post || !contentType.includes('text/html')) {
    return assetResponse;
  }

  const siteUrl = new URL(request.url).origin;
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
        // Insert real, readable article HTML before React mounts.
        // React's client-side render will replace this once JS loads,
        // so real visitors see the normal interactive page either way.
        el.setInnerContent(articleHtml, { html: true });
      },
    })
    .transform(assetResponse);
};
