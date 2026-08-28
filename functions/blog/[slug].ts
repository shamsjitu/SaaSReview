// Cloudflare Pages Function — runs at the edge before the SPA loads.
// Route: /blog/:slug  (file-based routing: functions/blog/[slug].ts -> /blog/:slug)
//
// Purpose: rewrite the static index.html's meta tags with this specific
// article's title/description/image, so Google, Facebook, WhatsApp, and
// LinkedIn link previews all show the correct info (these crawlers do not
// execute JavaScript, so the client-side update in PostDetail.tsx alone
// is not enough for them).

import { SITE_DATA } from '../../src/data/siteData';

interface Env {
  ASSETS: { fetch: typeof fetch };
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { params, env, request } = context;

  const slug =
    typeof params.slug === 'string'
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : '';

  // Fetch the normal built HTML (same file every route would get from the SPA fallback)
  const assetResponse = await env.ASSETS.fetch(request);

  const contentType = assetResponse.headers.get('content-type') || '';
  const post = SITE_DATA.blogPosts.find((p) => p.slug === slug);

  // If it's not HTML, or the slug doesn't match a real post, just pass it through untouched
  if (!post || !contentType.includes('text/html')) {
    return assetResponse;
  }

  const siteUrl = new URL(request.url).origin;
  const pageUrl = request.url;
  const pageTitle = `${post.title} | ShamsStack`;
  const pageDescription = post.excerpt || '';
  const pageImage = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-default.jpg`;

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
    .transform(assetResponse);
};
