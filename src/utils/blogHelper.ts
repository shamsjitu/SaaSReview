import { SITE_DATA } from '../data/siteData';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

const CUSTOM_POSTS_KEY = 'saasreview_custom_posts';

function sanitizePostImage(post: BlogPost): BlogPost {
  if (post.image && post.image.endsWith('.svg')) {
    return {
      ...post,
      image: post.image.replace(/\.svg$/, '.jpg')
    };
  }
  return post;
}

export function getBlogPosts(): BlogPost[] {
  if (typeof window === 'undefined') return SITE_DATA.blogPosts;
  
  const saved = localStorage.getItem(CUSTOM_POSTS_KEY);
  if (!saved) return SITE_DATA.blogPosts;
  
  try {
    const custom = (JSON.parse(saved) as BlogPost[]).map(sanitizePostImage);
    // Place custom posts first, then the preset ones
    return [...custom, ...SITE_DATA.blogPosts];
  } catch (e) {
    console.error('Failed to parse custom posts', e);
    return SITE_DATA.blogPosts;
  }
}

export function saveBlogPost(post: BlogPost): void {
  if (typeof window === 'undefined') return;
  
  const current = getCustomPosts();
  const index = current.findIndex(p => p.slug === post.slug);
  
  if (index >= 0) {
    current[index] = post; // Update existing
  } else {
    current.unshift(post); // Insert new at start
  }
  
  localStorage.setItem(CUSTOM_POSTS_KEY, JSON.stringify(current));
}

export function deleteBlogPost(slug: string): void {
  if (typeof window === 'undefined') return;
  
  const current = getCustomPosts();
  const updated = current.filter(p => p.slug !== slug);
  localStorage.setItem(CUSTOM_POSTS_KEY, JSON.stringify(updated));
}

export function getCustomPosts(): BlogPost[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem(CUSTOM_POSTS_KEY);
  if (!saved) return [];
  try {
    return (JSON.parse(saved) as BlogPost[]).map(sanitizePostImage);
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const all = getBlogPosts();
  return all.find(p => p.slug === slug);
}

export function resetCustomPosts(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CUSTOM_POSTS_KEY);
}
