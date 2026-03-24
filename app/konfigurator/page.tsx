"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* =============================================================
   Typy a konstanty
   ============================================================= */
const PAGES_OPTIONS = [
  { id: "homepage", label: "Hlavní stránka", icon: "🏠" },
  { id: "about", label: "O nás / O firmě", icon: "👤" },
  { id: "services", label: "Služby / Nabídka", icon: "⚙️" },
  { id: "pricing", label: "Ceník", icon: "💰" },
  { id: "portfolio", label: "Portfolio / Ukázky", icon: "📸" },
  { id: "contact", label: "Kontakt", icon: "📧" },
  { id: "blog", label: "Blog / Novinky", icon: "📝" },
  { id: "gallery", label: "Galerie", icon: "🖼️" },
  { id: "faq", label: "Často kladené otázky", icon: "❓" },
  { id: "testimonials", label: "Reference / Recenze", icon: "⭐" },
  { id: "booking", label: "Rezervace / Objednávka", icon: "📅" },
  { id: "team", label: "Náš tým", icon: "👥" },
];

const COLOR_SCHEMES = [
  { id: "blue", label: "Modrá / profesionální", colors: ["#0066FF", "#E8F0FE"] },
  { id: "green", label: "Zelená / přírodní", colors: ["#00A86B", "#E8F5E9"] },
  { id: "red", label: "Červená / energická", colors: ["#E53E3E", "#FEE2E2"] },
  { id: "purple", label: "Fialová / kreativní", colors: ["#7C3AED", "#EDE9FE"] },
  { id: "dark", label: "Tmavá / elegantní", colors: ["#1A1A2E", "#2D2D44"] },
  { id: "warm", label: "Teplá / přívětivá", colors: ["#F59E0B", "#FEF3C7"] },
  { id: "custom", label: "Vlastní barvy", colors: ["#999", "#EEE"] },
];

const STYLES = [
  { id: "modern", label: "Moderní & čistý", desc: "Minimalistický, hodně bílého prostoru" },
  { id: "bold", label: "Výrazný & odvážný", desc: "Velké nadpisy, silné barvy" },
  { id: "elegant", label: "Elegantní & luxusní", desc: "Jemné detaily, prémiový pocit" },
  { id: "friendly", label: "Přátelský & hravý", desc: "Zaoblené tvary, veselé barvy" },
  { id: "corporate", label: "Korporátní & důvěryhodný", desc: "Seriózní, profesionální" },
];

const TOTAL_STEPS = 5;

/* =============================================================
   Konfigurátor
   ============================================================= */
export default function Configurator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState("");

  // Formulářová data
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    description: "",
    targetAudience: "",
    pages: ["homepage", "contact"] as string[],
    inspiration: "",
    inspirationNotes: "",
    texts: "",
    colorScheme: "",
    style: "",
    logoFile: null as File | null,
    photos: [] as File[],
  });

  const update = (field: string, value: any) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const togglePage = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      pages: prev.pages.includes(id)
        ? prev.pages.filter((p) => p !== id)
        : [...prev.pages, id],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.companyName && formData.industry;
      case 2: return formData.pages.length > 0;
      default: return true;
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          industry: formData.industry,
          description: formData.description,
          targetAudience: formData.targetAudience,
          pages: formData.pages.map(
            (id) => PAGES_OPTIONS.find((p) => p.id === id)?.label || id
          ),
          inspiration: formData.inspiration,
          inspirationNotes: formData.inspirationNotes,
          texts: formData.texts,
          colorScheme:
            COLOR_SCHEMES.find((c) => c.id === formData.colorScheme)?.label || "",
          style: STYLES.find((s) => s.id === formData.style)?.label || "",
        }),
      });

      const data = await res.json();
      if (data.brief) {
        setBrief(data.brief);
        setStep(6); // Výsledek
      } else {
        alert("Chyba při generování briefu");
      }
    } catch {
      alert("Nepodařilo se spojit se serverem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigace */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-gray-900">
            QuickSite<span className="text-[#00C896]">.</span>
          </Link>
          <span className="text-sm text-gray-500">Konfigurátor webu</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress bar */}
        {step <= TOTAL_STEPS && (
          <div className="mb-10">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Krok {step} z {TOTAL_STEPS}</span>
              <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#0066FF] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ===================== KROK 1: O firmě ===================== */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Řekněte nám o vaší firmě
                </h1>
                <p className="text-gray-500 mt-2">
                  Základní informace nám pomohou navrhnout web přesně pro vás.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Název firmy *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="např. Instalatérství Novák"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Obor podnikání *
                  </label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => update("industry", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="např. řemesla, gastronomie, fitness, IT..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Krátký popis firmy
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Co děláte, čím se lišíte od konkurence..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Komu prodáváte? (cílová skupina)
                  </label>
                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) => update("targetAudience", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="např. domácnosti v Praze, malé firmy, sportovci..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ===================== KROK 2: Stránky ===================== */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Jaké stránky chcete mít?
                </h1>
                <p className="text-gray-500 mt-2">
                  Vyberte stránky, které váš web bude obsahovat.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PAGES_OPTIONS.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => togglePage(page.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.pages.includes(page.id)
                        ? "border-[#0066FF] bg-blue-50 shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{page.icon}</span>
                    <span className="font-medium text-sm text-gray-800">
                      {page.label}
                    </span>
                    {formData.pages.includes(page.id) && (
                      <svg className="w-5 h-5 text-[#0066FF] absolute top-2 right-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-400">
                Vybráno: {formData.pages.length} stránek
              </p>
            </motion.div>
          )}

          {/* ===================== KROK 3: Inspirace ===================== */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Inspirace a styl
                </h1>
                <p className="text-gray-500 mt-2">
                  Ukažte nám, co se vám líbí. Pomůže nám to trefit váš vkus.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weby, které se vám líbí (URL adresy)
                  </label>
                  <textarea
                    value={formData.inspiration}
                    onChange={(e) => update("inspiration", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder={"https://priklad1.cz\nhttps://priklad2.cz"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Co se vám na nich líbí?
                  </label>
                  <textarea
                    value={formData.inspirationNotes}
                    onChange={(e) => update("inspirationNotes", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Líbí se mi čistý design, velké fotky, animace při scrollu..."
                  />
                </div>
              </div>

              {/* Výběr barev */}
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Barevné schéma</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {COLOR_SCHEMES.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => update("colorScheme", scheme.id)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        formData.colorScheme === scheme.id
                          ? "border-[#0066FF] shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex gap-1 mb-2">
                        {scheme.colors.map((c) => (
                          <div
                            key={c}
                            className="w-6 h-6 rounded-full border border-gray-200"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">{scheme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Výběr stylu */}
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Styl webu</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {STYLES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => update("style", s.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        formData.style === s.id
                          ? "border-[#0066FF] bg-blue-50 shadow-sm"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium text-sm text-gray-800 block">
                        {s.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {s.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ===================== KROK 4: Texty ===================== */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Texty a obsah
                </h1>
                <p className="text-gray-500 mt-2">
                  Máte připravené texty? Vložte je sem. Nemáte? Nevadí — napíšeme je za vás.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Texty pro web
                  </label>
                  <textarea
                    value={formData.texts}
                    onChange={(e) => update("texts", e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder={"O firmě:\nPůsobíme na trhu od roku 2010...\n\nSlužby:\n- Kompletní instalatérské práce\n- Revize plynových zařízení\n...\n\nKontakt:\nJan Novák, tel. 123 456 789"}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Tip: Můžete vložit i nehotové poznámky — AI je zpracuje do finální podoby.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ===================== KROK 5: Soubory ===================== */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <div>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Logo a fotky
                </h1>
                <p className="text-gray-500 mt-2">
                  Nahrajte logo a fotky, které chcete na webu použít.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 space-y-6">
                {/* Logo upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo firmy
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#0066FF] hover:bg-blue-50/50 transition-all">
                    {formData.logoFile ? (
                      <div className="text-center">
                        <span className="text-2xl block mb-1">✅</span>
                        <span className="text-sm text-gray-600">{formData.logoFile.name}</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-3xl block mb-2">📎</span>
                        <span className="text-sm text-gray-500">Klikněte pro nahrání loga</span>
                        <span className="text-xs text-gray-400 block mt-1">PNG, JPG, SVG</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        update("logoFile", e.target.files?.[0] || null)
                      }
                    />
                  </label>
                </div>

                {/* Photos upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fotky pro web
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#0066FF] hover:bg-blue-50/50 transition-all">
                    {formData.photos.length > 0 ? (
                      <div className="text-center">
                        <span className="text-2xl block mb-1">📸</span>
                        <span className="text-sm text-gray-600">
                          {formData.photos.length} fotek nahráno
                        </span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-3xl block mb-2">🖼️</span>
                        <span className="text-sm text-gray-500">Klikněte pro nahrání fotek</span>
                        <span className="text-xs text-gray-400 block mt-1">
                          Produkty, prostory, tým...
                        </span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) =>
                        update("photos", Array.from(e.target.files || []))
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Shrnutí */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="font-heading font-bold text-gray-900 mb-3">📋 Shrnutí vaší poptávky</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Firma:</strong> {formData.companyName} ({formData.industry})</li>
                  <li><strong>Stránky:</strong> {formData.pages.map((id) => PAGES_OPTIONS.find((p) => p.id === id)?.label).join(", ")}</li>
                  {formData.colorScheme && (
                    <li><strong>Barvy:</strong> {COLOR_SCHEMES.find((c) => c.id === formData.colorScheme)?.label}</li>
                  )}
                  {formData.style && (
                    <li><strong>Styl:</strong> {STYLES.find((s) => s.id === formData.style)?.label}</li>
                  )}
                  {formData.inspiration && <li><strong>Inspirace:</strong> uvedena</li>}
                  {formData.texts && <li><strong>Texty:</strong> dodány</li>}
                  {formData.logoFile && <li><strong>Logo:</strong> nahráno</li>}
                  {formData.photos.length > 0 && <li><strong>Fotky:</strong> {formData.photos.length}x</li>}
                </ul>
              </div>
            </motion.div>
          )}

          {/* ===================== VÝSLEDEK ===================== */}
          {step === 6 && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <span className="text-5xl block mb-4">🎉</span>
                <h1 className="font-heading text-3xl font-bold text-gray-900">
                  Váš brief je připravený!
                </h1>
                <p className="text-gray-500 mt-2">
                  AI navrhlo koncept webu pro {formData.companyName}.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{
                  __html: brief
                    .replace(/\n/g, "<br>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/^### (.*?)(<br>)/gm, "<h3>$1</h3>")
                    .replace(/^## (.*?)(<br>)/gm, "<h2>$1</h2>")
                    .replace(/^# (.*?)(<br>)/gm, "<h1>$1</h1>")
                    .replace(/^- (.*?)(<br>)/gm, "<li>$1</li>")
                }} />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="/#kontakt"
                  className="bg-[#0066FF] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Chci tento web — napište mi nabídku
                </motion.a>
                <motion.button
                  onClick={() => { setStep(1); setBrief(""); }}
                  className="border-2 border-gray-200 text-gray-600 font-semibold px-8 py-3.5 rounded-xl hover:border-gray-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Začít znovu
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigační tlačítka */}
        {step <= TOTAL_STEPS && (
          <div className="flex justify-between mt-10">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              className={`text-sm font-medium px-6 py-3 rounded-xl transition-colors ${
                step === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              disabled={step === 1}
            >
              ← Zpět
            </button>

            {step < TOTAL_STEPS ? (
              <motion.button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={`font-semibold px-8 py-3 rounded-xl transition-colors ${
                  canProceed()
                    ? "bg-[#0066FF] text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                whileHover={canProceed() ? { scale: 1.02 } : {}}
                whileTap={canProceed() ? { scale: 0.97 } : {}}
              >
                Další →
              </motion.button>
            ) : (
              <motion.button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-[#00C896] text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-green-200 hover:bg-green-600 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    AI generuje brief...
                  </>
                ) : (
                  "🤖 Vygenerovat brief"
                )}
              </motion.button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
