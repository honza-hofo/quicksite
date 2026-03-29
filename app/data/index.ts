import { SEOPage } from './types';
import { services } from './services';
import { aiPages } from './ai-pages';
import { blog } from './blog';
import { cities } from './cities';
import { industries } from './industries';
import { quickCheap } from './quick-cheap';
import { comparisons } from './comparisons';
import { problems } from './problems';
import { webTypes } from './web-types';
import { prices } from './prices';
import { tools } from './tools';
import { staticPages } from './static-pages';

const allPages: SEOPage[] = [
  ...services,
  ...aiPages,
  ...blog,
  ...cities,
  ...industries,
  ...quickCheap,
  ...comparisons,
  ...problems,
  ...webTypes,
  ...prices,
  ...tools,
  ...staticPages,
];

export function getAllPages(): SEOPage[] {
  return allPages;
}

export function getPageBySlug(slug: string): SEOPage | undefined {
  return allPages.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allPages.map((p) => p.slug);
}

export function getPagesByCategory(category: string): SEOPage[] {
  return allPages.filter((p) => p.category === category);
}
