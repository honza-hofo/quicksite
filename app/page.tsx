"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* =============================================================
   Animační varianty (Framer Motion)
   ============================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =============================================================
   NAVIGACE — sticky s blur backdrop
   ============================================================= */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold text-gray-900">
          <img src="/logo.png" alt="QuickSite" className="h-8" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#jak-to-funguje" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Jak to funguje
          </a>
          <a href="#ukazky" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Ukázky
          </a>
          <a href="#cenik" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Ceník
          </a>
          <motion.a
            href="/konfigurator"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-btn hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            🤖 Nakonfigurovat web
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-gray-100 px-4 pb-4"
        >
          <a href="#jak-to-funguje" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-600 hover:text-primary">
            Jak to funguje
          </a>
          <a href="#ukazky" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-600 hover:text-primary">
            Ukázky
          </a>
          <a href="#cenik" onClick={() => setMenuOpen(false)} className="block py-3 text-gray-600 hover:text-primary">
            Ceník
          </a>
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-primary text-white text-center font-semibold px-5 py-2.5 rounded-btn"
          >
            🤖 Nakonfigurovat web
          </a>
        </motion.div>
      )}
    </nav>
  );
}

/* =============================================================
   HERO SEKCE
   ============================================================= */
function Hero() {
  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradientové pozadí */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      {/* Dekorativní kruhy */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centrovaný hero text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Tvoříme weby s pomocí AI
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
          >
            Váš nový web.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hotový za 48&nbsp;hodin.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Moderní weby a aplikace na míru pro živnostníky a malé firmy.
            S&nbsp;pomocí AI rychleji, levněji a bez zbytečných komplikací.
          </motion.p>

          {/* CTA tlačítka */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href="/konfigurator"
              className="bg-primary text-white font-semibold px-8 py-4 rounded-btn text-lg shadow-xl shadow-primary/25 hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              🤖 Nakonfigurovat web zdarma
            </motion.a>
            <motion.a
              href="#ukazky"
              className="border-2 border-gray-200 bg-white text-gray-700 font-semibold px-8 py-4 rounded-btn text-lg hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Podívat se na ukázky
            </motion.a>
          </motion.div>

          {/* Důvěryhodnostní signály */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            {[
              { icon: "⚡", text: "Hotovo do 48 hodin" },
              { icon: "💰", text: "Bez skrytých poplatků" },
              { icon: "📱", text: "Mobilní verze v ceně" },
              { icon: "🔒", text: "SSL certifikát zdarma" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating browser mockupy */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          {/* Hlavní mockup */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/40 border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                  stehovaniformanek.cz
                </div>
              </div>
              <div className="h-80 overflow-hidden">
                <img src="/screenshots/stehovani.png" alt="Ukázka webu" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Plovoucí menší mockupy po stranách */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -left-4 lg:left-0 top-12 w-48 lg:w-56 hidden md:block"
          >
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="h-32 overflow-hidden">
                <img src="/screenshots/befitelis.png" alt="Befit Elis" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -right-4 lg:right-0 top-8 w-48 lg:w-56 hidden md:block"
          >
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="h-32 overflow-hidden">
                <img src="/screenshots/hofo.png" alt="HOFO" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   JAK TO FUNGUJE — 3 kroky
   ============================================================= */
const steps = [
  {
    num: "01",
    icon: "🗣️",
    title: "Řeknete nám o firmě",
    desc: "Vyplníte krátký formulář o vašem podnikání a cílech. Zabere to 5 minut.",
  },
  {
    num: "02",
    icon: "🤖",
    title: "AI připraví návrh",
    desc: "Do 24 hodin dostanete návrh webu na schválení. Upravíme podle vašich připomínek.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Spustíme web",
    desc: "Po vašem ok web spustíme a předáme k používání. Jednoduše.",
  },
];

function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Jak to celé funguje?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Tři jednoduché kroky a váš web je na světě.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Velké číslo v pozadí */}
              <span className="absolute top-4 right-6 text-7xl font-heading font-bold text-gray-100 select-none">
                {step.num}
              </span>
              <div className="relative">
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   UKÁZKY / PORTFOLIO
   ============================================================= */
const projects = [
  {
    name: "Stěhování Formánek",
    category: "Stěhovací služby",
    screenshot: "/screenshots/stehovani.png",
    url: "https://stehovaniformanek.cz",
  },
  {
    name: "Makej s MANMATem",
    category: "Psí sporty & komunita",
    screenshot: "/screenshots/manmat.png",
    url: "https://www.makejsmanmatem.cz",
  },
  {
    name: "Befit Elis",
    category: "Fitness & jumping",
    screenshot: "/screenshots/befitelis.png",
    url: "https://befitelis.cz",
  },
  {
    name: "RizzCoach",
    category: "Webová aplikace",
    screenshot: "/screenshots/rizzcoach.png",
    url: "https://rizzcoachweb.vercel.app",
  },
  {
    name: "HOFO Production",
    category: "Produkční firma",
    screenshot: "/screenshots/hofo.png",
    url: "https://hofo.cz",
  },
  {
    name: "Podcast Room",
    category: "Podcastové studio",
    screenshot: "/screenshots/podcastroom.png",
    url: "https://podcastroom.cz",
  },
  {
    name: "České srdce Evropy",
    category: "Redakční web",
    screenshot: "/screenshots/ceskosrdceevropy.png",
    url: "https://ceskosrdceevropy-preview.onrender.com",
  },
  {
    name: "ContentHub",
    category: "Webová aplikace",
    screenshot: "/screenshots/contenthub.png",
    url: "https://contenthub-1x7h.onrender.com",
  },
  {
    name: "HOFO Socky",
    category: "Webová aplikace",
    screenshot: "/screenshots/socky.png",
    url: "https://social-scheduler-e506.onrender.com",
  },
];

function Portfolio() {
  return (
    <section id="ukazky" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Weby a aplikace, které jsme vytvořili
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Tvoříme weby i webové aplikace na míru. Podívejte se na ukázky.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer block"
            >
              {/* Screenshot */}
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <img
                  src={project.screenshot}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Hotovo za 48h
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="font-heading text-lg font-bold text-gray-900 mt-1">
                  {project.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   CENÍK
   ============================================================= */
const plans = [
  {
    name: "Starter",
    price: "9 900",
    popular: false,
    features: [
      "Jednostránkový web",
      "Kontaktní formulář",
      "Mobilní verze",
      "SSL certifikát",
      "Základní SEO",
    ],
  },
  {
    name: "Business",
    price: "18 900",
    popular: true,
    features: [
      "Vícestránkový web (až 10 stran)",
      "SEO optimalizace",
      "CMS pro správu obsahu",
      "Napojení na sociální sítě",
      "Google Analytics",
      "Kontaktní formulář",
      "Mobilní verze",
    ],
  },
  {
    name: "Aplikace",
    price: "od 39 900",
    popular: false,
    features: [
      "Webová aplikace na míru",
      "Uživatelské účty a admin panel",
      "Napojení na API a databáze",
      "Pokročilé SEO",
      "Podpora 3 měsíce zdarma",
      "Rychlostní optimalizace",
      "Responzivní design",
    ],
  },
];

/* Příplatek za expresní dodání */
const expressAddon = {
  label: "⚡ Expres do 24 hodin",
  price: "+ 5 000 Kč",
  desc: "Potřebujete web ještě rychleji? Doručíme do 24 hodin od schválení návrhu.",
};

function Pricing() {
  return (
    <section id="cenik" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Přehledné ceny, žádná překvapení
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Vyberte si balíček, který sedí vašemu podnikání.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-lg p-8 flex flex-col ${
                plan.popular
                  ? "bg-primary text-white shadow-xl shadow-primary/20 ring-2 ring-primary md:scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  ⭐ Nejoblíbenější
                </span>
              )}

              <h3 className={`font-heading text-xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              <div className="mt-4 mb-6">
                <span className={`text-4xl font-heading font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-sm ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>
                  Kč
                </span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.popular ? "text-blue-100" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/konfigurator"
                className={`mt-8 block text-center font-semibold py-3 rounded-btn transition-colors ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-blue-50"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                🤖 Nakonfigurovat
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Expres příplatek */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-white border-2 border-amber-200 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
            <span className="text-3xl">⚡</span>
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-gray-900">{expressAddon.label}</h4>
              <p className="text-sm text-gray-500 mt-1">{expressAddon.desc}</p>
            </div>
            <span className="font-heading font-bold text-amber-600 text-lg whitespace-nowrap">{expressAddon.price}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   KONTAKTNÍ FORMULÁŘ
   ============================================================= */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Formulář odeslán:", data);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Napište nám — odpovíme do 2&nbsp;hodin
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Nechte nám na sebe kontakt a my se vám ozveme s nabídkou na míru.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-5 gap-12"
        >
          {/* Formulář */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            {submitted ? (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <span className="text-4xl block mb-4">✅</span>
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  Děkujeme za poptávku!
                </h3>
                <p className="text-gray-500 mt-2">
                  Ozveme se vám co nejdříve, většinou do 2 hodin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-800"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-800"
                      placeholder="jan@firma.cz"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon <span className="text-gray-400">(nepovinný)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-800"
                    placeholder="+420 737 060 454"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Popis projektu *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-gray-800"
                    placeholder="Popište svou firmu a jaký web byste si představovali..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-3.5 rounded-btn shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Odeslat poptávku
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Kontaktní info */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="bg-surface rounded-lg p-8">
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                Proč nás oslovit?
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-xl">⚡</span>
                  <span>
                    <strong className="text-gray-800">Rychlost</strong> — Web máte hotový za 48 hodin,
                    ne za 3 měsíce.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💰</span>
                  <span>
                    <strong className="text-gray-800">Férové ceny</strong> — Žádné skryté poplatky,
                    platíte jen to, co vidíte.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎯</span>
                  <span>
                    <strong className="text-gray-800">Na míru</strong> — Každý web je originál,
                    ne šablona z internetu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🤝</span>
                  <span>
                    <strong className="text-gray-800">Podpora</strong> — Nezmizíme po spuštění.
                    Jsme tu pro vás i potom.
                  </span>
                </li>
              </ul>

              <hr className="my-6 border-gray-200" />

              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span>📧</span> honza@hofo.cz
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> +420 737 060 454
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   FOOTER
   ============================================================= */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/logo-dark.png" alt="QuickSite" className="h-8" />
            <p className="mt-3 text-sm leading-relaxed">
              Moderní weby pro živnostníky a malé firmy. Rychle, kvalitně a za
              rozumnou cenu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#jak-to-funguje" className="hover:text-white transition-colors">Jak to funguje</a></li>
              <li><a href="#ukazky" className="hover:text-white transition-colors">Ukázky</a></li>
              <li><a href="#cenik" className="hover:text-white transition-colors">Ceník</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>honza@hofo.cz</li>
              <li>+420 737 060 454</li>
              <li>IČO: 88602745</li>
              <li>Praha, Česká republika</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2025 QuickSite.cz. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}

/* =============================================================
   HLAVNÍ STRÁNKA
   ============================================================= */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
