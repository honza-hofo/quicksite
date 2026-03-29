import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuickSite.cz',
  url: 'https://quicksite.cz',
  logo: 'https://quicksite.cz/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+420737060454',
    contactType: 'customer service',
    availableLanguage: 'Czech',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Praha',
    addressCountry: 'CZ',
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={orgSchema} />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
