export interface SEOPage {
  slug: string;
  category: 'service' | 'city' | 'industry' | 'blog' | 'comparison' | 'problem' | 'webtype' | 'price' | 'tool' | 'static' | 'ai' | 'quick';
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  content: string;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}
