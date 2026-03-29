import { MetadataRoute } from 'next';
import { getAllPages } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const baseUrl = 'https://quicksite.cz';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/konfigurator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const seoRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.category === 'blog' ? 'monthly' as const : 'weekly' as const,
    priority: page.category === 'service' || page.category === 'ai' ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...seoRoutes];
}
