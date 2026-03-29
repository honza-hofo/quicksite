export default function CTASection({
  title = 'Připraveni na nový web?',
  subtitle = 'Nakonfigurujte si web za 5 minut. Hotovo do 48 hodin.',
  buttonText = '🤖 Nakonfigurovat web zdarma',
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-10 md:p-16 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <a
            href="/konfigurator"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-btn text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {buttonText}
          </a>
          <p className="mt-4 text-sm text-white/60">Zdarma a nezávazně • Bez registrace</p>
        </div>
      </div>
    </section>
  );
}
