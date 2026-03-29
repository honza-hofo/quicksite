const plans = [
  {
    name: 'Starter',
    price: '9 900',
    description: 'Jednostránkový web',
    features: ['Kontaktní formulář', 'Mobilní verze', 'SSL certifikát', 'Základní SEO'],
    popular: false,
  },
  {
    name: 'Business',
    price: '18 900',
    description: 'Vícestránkový web (až 10 stran)',
    features: ['SEO optimalizace', 'CMS pro správu obsahu', 'Napojení na sociální sítě', 'Google Analytics', 'Kontaktní formulář', 'Mobilní verze'],
    popular: true,
  },
  {
    name: 'Aplikace',
    price: 'od 39 900',
    description: 'Webová aplikace na míru',
    features: ['Uživatelské účty a admin panel', 'Napojení na API a databáze', 'Pokročilé SEO', 'Podpora 3 měsíce zdarma', 'Rychlostní optimalizace', 'Responzivní design'],
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="cenik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Transparentní ceník
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Žádné skryté poplatky. Cena zahrnuje vše — návrh, vývoj, nasazení i základní SEO.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                plan.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Nejoblíbenější
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-1">Kč</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/konfigurator"
                className={`block text-center font-semibold px-6 py-3 rounded-btn transition-colors ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                }`}
              >
                Nakonfigurovat web
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          Expres do 24 hodin: +5 000 Kč • Všechny ceny jsou konečné
        </p>
      </div>
    </section>
  );
}
