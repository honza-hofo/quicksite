import { SEOPage } from './types';

const topCities = [
  'Praha', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc',
  'České Budějovice', 'Hradec Králové', 'Pardubice', 'Zlín',
];

const topCitySlugs = [
  'praha', 'brno', 'ostrava', 'plzen', 'liberec', 'olomouc',
  'ceske-budejovice', 'hradec-kralove', 'pardubice', 'zlin',
];

const topIndustries = [
  { name: 'restaurace', slug: 'restaurace', desc: 'Restaurace a kavárny potřebují web s online menu, rezervacemi a fotogalerií. Zákazníci hledají hodnocení a menu ještě před návštěvou.' },
  { name: 'řemeslníky', slug: 'remeslniky', desc: 'Řemeslníci potřebují web s galerií realizací, ceníkem a kontaktním formulářem. Zákazníci hledají řemeslníky na Googlu — pokud tam nejste, zakázku dostane konkurent.' },
  { name: 'autoservisy', slug: 'autoservisy', desc: 'Autoservisy a pneuservisy potřebují přehledný web s ceníkem, otevírací dobou a online objednávkou. Řidiči hledají nejbližší servis na mobilu.' },
  { name: 'kadeřnictví', slug: 'kadernictvi', desc: 'Kadeřnické salony a barber shopy potřebují vizuálně atraktivní web s galerií, ceníkem a online rezervací. 80 % nových zákazníků přichází přes Google.' },
  { name: 'lékaře', slug: 'lekare', desc: 'Ordinace a zdravotnická zařízení potřebují důvěryhodný web s ordinačními hodinami, seznamem služeb a kontaktem. Pacienti hledají lékaře online.' },
  { name: 'trenéry', slug: 'trenery', desc: 'Osobní trenéři a fitness studia potřebují web s rozvrhem, ceníkem a možností online rezervace. Web buduje osobní značku a přivádí klienty.' },
  { name: 'účetní', slug: 'ucetni', desc: 'Účetní firmy a daňoví poradci potřebují profesionální web, který buduje důvěryhodnost. Klienti hledají spolehlivého účetního na internetu.' },
  { name: 'fotografy', slug: 'fotografy', desc: 'Fotografové potřebují portfolio web s velkou galerií, ceníkem a kontaktem. Web je vaše vizitka — musí ukázat kvalitu vaší práce.' },
];

export const cityIndustry: SEOPage[] = [];

topCities.forEach((city, ci) => {
  const citySlug = topCitySlugs[ci];

  topIndustries.forEach((ind) => {
    const slug = `tvorba-webu-pro-${ind.slug}-${citySlug}`;

    cityIndustry.push({
      slug,
      category: 'industry',
      h1: `Web pro ${ind.name} ${city}`,
      metaTitle: `Web pro ${ind.name} ${city} | Od 9 900 Kč do 48h | QuickSite`,
      metaDescription: `Tvorba webu pro ${ind.name} v ${city}. AI technologie, moderní design, od 9 900 Kč. Dodání do 48 hodin. QuickSite.cz.`,
      heroSubtitle: `Profesionální web pro ${ind.name} v ${city} a okolí — rychle, moderně a za férovou cenu.`,
      content: `
## Web pro ${ind.name} v ${city}

${ind.desc}

**QuickSite.cz** tvoří weby pro ${ind.name} v ${city} s pomocí AI. Od 9 900 Kč, hotovo do 48 hodin — bez zbytečných schůzek a čekání.

## Proč ${ind.name} v ${city} potřebují web

${city} je konkurenční trh. Zákazníci hledají ${ind.name} na Googlu — a kliknou na prvních pár výsledků. Pokud tam nejste, přicházíte o zakázky. Vlastní web vám dá:

- **Viditelnost v Google** — zobrazíte se lidem, kteří hledají ${ind.name} v ${city}
- **Důvěryhodnost** — profesionální web buduje důvěru ještě před prvním kontaktem
- **Nezávislost** — neplatíte provize portálům a agregátorům
- **Dostupnost 24/7** — web pracuje za vás i v noci a o víkendu

## Co web pro ${ind.name} musí obsahovat

- Přehled služeb s orientačním ceníkem
- Galerie / portfolio (fotky, reference)
- Kontaktní formulář a telefon
- Otevírací doba / dostupnost
- Google recenze a hodnocení
- Lokální SEO pro ${city} a okolí

## Kolik stojí web pro ${ind.name} v ${city}

U klasické agentury zaplatíte 30 000–80 000 Kč a čekáte měsíce. S QuickSite.cz dostanete profesionální web od **9 900 Kč** do **48 hodin**. Žádné měsíční poplatky, žádné skryté příplatky.
      `.trim(),
      faq: [
        {
          question: `Kolik stojí web pro ${ind.name} v ${city}?`,
          answer: 'Ceny začínají na 9 900 Kč za kompletní jednostránkový web. Balíček Business za 18 900 Kč zahrnuje vícestránkový web s galerií a CMS.',
        },
        {
          question: `Jak rychle budu mít web hotový?`,
          answer: 'Do 48 hodin od dodání podkladů. Díky AI technologii jsme mnohonásobně rychlejší než klasická agentura.',
        },
        {
          question: `Bude web optimalizovaný pro vyhledávání v ${city}?`,
          answer: `Ano. Každý web optimalizujeme pro lokální SEO, aby se zobrazoval lidem hledajícím ${ind.name} v ${city} a okolí.`,
        },
      ],
      relatedSlugs: [
        `tvorba-webu-${citySlug}`,
        `tvorba-webu-pro-${ind.slug}`,
        ...topCitySlugs
          .filter((s) => s !== citySlug)
          .slice(0, 3)
          .map((s) => `tvorba-webu-pro-${ind.slug}-${s}`),
      ],
    });
  });
});
