import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanhub-example.com';

  // Static routes
  const staticRoutes = ['', '/category/loans', '/category/mortgage', '/category/guides', '/about', '/contact', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes (articles)
  const posts = getAllPosts(['slug', 'date']);
  const dynamicRoutes = posts.map((post) => ({
    url: `${baseUrl}/article/${post.slug}`,
    lastModified: new Date(post.date || new Date()).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
