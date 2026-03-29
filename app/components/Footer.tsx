const footerColumns = [
  {
    title: 'Služby',
    links: [
      { label: 'Tvorba webů pro živnostníky', href: '/tvorba-webu-pro-zivnostniky' },
      { label: 'Web do 48 hodin', href: '/web-do-48-hodin' },
      { label: 'Levná tvorba webu', href: '/levna-tvorba-webu' },
      { label: 'AI tvorba webů', href: '/tvorba-webu-pomoci-ai' },
      { label: 'Redesign webu', href: '/redesign-webu' },
      { label: 'Web na klíč', href: '/web-na-klic' },
      { label: 'Webové aplikace', href: '/webove-aplikace' },
    ],
  },
  {
    title: 'Pro obory',
    links: [
      { label: 'Pro řemeslníky', href: '/tvorba-webu-pro-remeslniky' },
      { label: 'Pro restaurace', href: '/tvorba-webu-pro-restaurace' },
      { label: 'Pro kosmetické salony', href: '/tvorba-webu-pro-kosmeticky-salon' },
      { label: 'Pro autoservisy', href: '/tvorba-webu-pro-autoservis' },
      { label: 'Pro lékaře', href: '/tvorba-webu-pro-lekare' },
      { label: 'Pro fotografy', href: '/tvorba-webu-pro-fotografy' },
      { label: 'Pro trenéry', href: '/tvorba-webu-pro-trenery' },
    ],
  },
  {
    title: 'Města',
    links: [
      { label: 'Tvorba webu Praha', href: '/tvorba-webu-praha' },
      { label: 'Tvorba webu Brno', href: '/tvorba-webu-brno' },
      { label: 'Tvorba webu Ostrava', href: '/tvorba-webu-ostrava' },
      { label: 'Tvorba webu Plzeň', href: '/tvorba-webu-plzen' },
      { label: 'Tvorba webu Liberec', href: '/tvorba-webu-liberec' },
      { label: 'Tvorba webu Olomouc', href: '/tvorba-webu-olomouc' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'Kolik stojí tvorba webu', href: '/blog/kolik-stoji-tvorba-webu' },
      { label: 'Proč živnostník potřebuje web', href: '/blog/proc-kazdy-zivnostnik-potrebuje-web' },
      { label: 'AI mění tvorbu webů', href: '/blog/jak-ai-meni-tvorbu-webu' },
      { label: 'Web nebo Facebook?', href: '/blog/web-nebo-facebook-co-je-lepsi' },
      { label: 'Trendy 2026', href: '/blog/trendy-v-tvorbe-webu-2026' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="font-heading text-xl font-bold text-white">
              QuickSite.cz
            </a>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Moderní weby pro živnostníky a malé firmy. S pomocí AI rychleji, levněji a bez starostí.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:info@quicksite.cz" className="block hover:text-white transition-colors">
                info@quicksite.cz
              </a>
              <a href="tel:+420737060454" className="block hover:text-white transition-colors">
                +420 737 060 454
              </a>
              <p className="text-gray-500">IČO: 88602745</p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} QuickSite.cz. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <a href="/obchodni-podminky" className="hover:text-white transition-colors">Obchodní podmínky</a>
            <a href="/ochrana-osobnich-udaju" className="hover:text-white transition-colors">Ochrana osobních údajů</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
