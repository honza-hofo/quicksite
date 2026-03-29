import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPages, getPageBySlug } from '../../data';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import InternalLinks from '../../components/InternalLinks';
import PricingCards from '../../components/PricingCards';
import JsonLd from '../../components/JsonLd';

export function generateStaticParams() {
  return getAllPages().map((page) => ({
    slug: page.slug.split('/'),
  }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const slugStr = params.slug.join('/');
  const page = getPageBySlug(slugStr);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://quicksite.cz/${slugStr}`,
      siteName: 'QuickSite.cz',
      locale: 'cs_CZ',
      type: page.category === 'blog' ? 'article' : 'website',
    },
    alternates: {
      canonical: `https://quicksite.cz/${slugStr}`,
    },
  };
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    service: 'Služby',
    city: 'Města',
    industry: 'Pro obory',
    blog: 'Blog',
    comparison: 'Srovnání',
    problem: 'Řešení',
    webtype: 'Typy webů',
    price: 'Ceník',
    tool: 'Nástroje',
    static: 'QuickSite',
    ai: 'AI tvorba webů',
    quick: 'Rychlá tvorba',
  };
  return labels[category] || 'QuickSite';
}

export default function SEOPage({ params }: { params: { slug: string[] } }) {
  const slugStr = params.slug.join('/');
  const page = getPageBySlug(slugStr);

  if (!page) notFound();

  const allPages = getAllPages();
  const relatedLinks = page.relatedSlugs
    .map((s) => allPages.find((p) => p.slug === s))
    .filter(Boolean)
    .map((p) => ({
      title: p!.h1,
      href: `/${p!.slug}`,
      description: p!.heroSubtitle,
    }));

  const breadcrumbItems = [
    { name: getCategoryLabel(page.category), href: '#' },
    { name: page.h1, href: `/${page.slug}` },
  ];

  const articleSchema = page.category === 'blog' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.metaDescription,
    author: { '@type': 'Organization', name: 'QuickSite.cz' },
    publisher: { '@type': 'Organization', name: 'QuickSite.cz' },
    url: `https://quicksite.cz/${page.slug}`,
  } : null;

  return (
    <>
      {articleSchema && <JsonLd data={articleSchema} />}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {page.h1}
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            {page.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/konfigurator"
              className="bg-primary text-white font-semibold px-8 py-4 rounded-btn text-lg shadow-xl shadow-primary/25 hover:bg-primary-dark transition-all"
            >
              🤖 Nakonfigurovat web zdarma
            </a>
            <a
              href="/cena-tvorby-webu"
              className="border-2 border-gray-200 bg-white text-gray-700 font-semibold px-8 py-4 rounded-btn text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Zjistit cenu
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '48h', label: 'Dodání' },
              { value: '9 900 Kč', label: 'Od' },
              { value: '100+', label: 'Spokojených klientů' },
              { value: '5.0', label: 'Hodnocení' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing on relevant pages */}
      {['service', 'price', 'ai', 'quick', 'city', 'industry'].includes(page.category) && (
        <PricingCards />
      )}

      {/* FAQ */}
      {page.faq.length > 0 && <FAQSection items={page.faq} />}

      {/* CTA */}
      <CTASection
        title={page.ctaTitle || 'Připraveni na nový web?'}
        subtitle={page.ctaSubtitle || 'Nakonfigurujte si web za 5 minut. Hotovo do 48 hodin, od 9 900 Kč.'}
      />

      {/* Internal links */}
      <InternalLinks links={relatedLinks} />
    </>
  );
}
