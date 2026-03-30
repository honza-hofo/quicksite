import { SEOPage } from './types';

// Tier 2 města - menší města ČR
const tier2Cities = [
  { name: 'Mladá Boleslav', slug: 'mlada-boleslav', region: 'Středočeský kraj', pop: '44 000', detail: 'Mladá Boleslav je průmyslové centrum Středočeského kraje s dominantní automobilkou Škoda Auto. Tisíce firem v okolí — od dodavatelů po služby — potřebují kvalitní webovou prezentaci.' },
  { name: 'Tábor', slug: 'tabor', region: 'Jihočeský kraj', pop: '34 000', detail: 'Tábor je historické město v jižních Čechách s rostoucí podnikatelskou scénou. Lokální firmy zde soupeří o pozornost turistů i místních zákazníků.' },
  { name: 'Kolín', slug: 'kolin', region: 'Středočeský kraj', pop: '32 000', detail: 'Kolín a okolí je průmyslová oblast s řadou výrobních i servisních firem. Web je základní nástroj pro získání nových zakázek v regionu.' },
  { name: 'Příbram', slug: 'pribram', region: 'Středočeský kraj', pop: '33 000', detail: 'Příbram je město s bohatou historií a aktivním podnikatelským prostředím. Lokální firmy zde potřebují web, aby oslovily zákazníky v širokém okolí.' },
  { name: 'Trutnov', slug: 'trutnov', region: 'Královéhradecký kraj', pop: '30 000', detail: 'Trutnov je brána do Krkonoš a centrum turistického ruchu. Hotely, penziony, restaurace i sportovní služby zde potřebují atraktivní web.' },
  { name: 'Chrudim', slug: 'chrudim', region: 'Pardubický kraj', pop: '23 000', detail: 'Chrudim je město s tradicí průmyslu a řemesel. Web pomáhá místním firmám oslovit zákazníky v celém Pardubickém kraji.' },
  { name: 'Náchod', slug: 'nachod', region: 'Královéhradecký kraj', pop: '20 000', detail: 'Náchod leží na česko-polské hranici a je centrem regionu s řadou malých a středních podniků.' },
  { name: 'Teplice', slug: 'teplice', region: 'Ústecký kraj', pop: '49 000', detail: 'Teplice jsou lázeňské město s rostoucí ekonomikou. Wellness, zdravotní služby i lokální podnikatelé potřebují moderní web.' },
  { name: 'Chomutov', slug: 'chomutov', region: 'Ústecký kraj', pop: '48 000', detail: 'Chomutov je dynamické město v severních Čechách s pestrou podnikatelskou scénou od průmyslu po služby.' },
  { name: 'Děčín', slug: 'decin', region: 'Ústecký kraj', pop: '48 000', detail: 'Děčín leží na Labi a je důležitým dopravním i turistickým uzlem. Firmy zde potřebují web pro oslovení turistů i lokálních zákazníků.' },
  { name: 'Prostějov', slug: 'prostejov', region: 'Olomoucký kraj', pop: '43 000', detail: 'Prostějov je město s tradicí textilního průmyslu a řadou moderních firem, které potřebují kvalitní online prezentaci.' },
  { name: 'Přerov', slug: 'prerov', region: 'Olomoucký kraj', pop: '42 000', detail: 'Přerov je dopravní křižovatka Moravy s aktivním podnikatelským prostředím.' },
  { name: 'Jablonec nad Nisou', slug: 'jablonec-nad-nisou', region: 'Liberecký kraj', pop: '45 000', detail: 'Jablonec je město skla a bižuterie s řadou kreativních firem a řemeslníků, kteří potřebují prezentovat svou práci online.' },
  { name: 'Frýdek-Místek', slug: 'frydek-mistek', region: 'Moravskoslezský kraj', pop: '55 000', detail: 'Frýdek-Místek je průmyslové město s blízkostí Beskyd. Kombinace průmyslu, služeb a turistiky vytváří poptávku po kvalitních webech.' },
  { name: 'Opava', slug: 'opava', region: 'Moravskoslezský kraj', pop: '56 000', detail: 'Opava je historické město se silnou podnikatelskou tradicí. Lokální firmy zde soupeří o pozornost v celém Slezsku.' },
  { name: 'Znojmo', slug: 'znojmo', region: 'Jihomoravský kraj', pop: '33 000', detail: 'Znojmo je vinařské město s bohatou turistickou nabídkou. Vinaři, penziony a restaurace potřebují atraktivní web.' },
  { name: 'Třebíč', slug: 'trebic', region: 'Kraj Vysočina', pop: '35 000', detail: 'Třebíč je město s památkou UNESCO a rostoucím turismem. Web je klíčový pro služby cílící na turisty i místní.' },
  { name: 'Havířov', slug: 'havirov', region: 'Moravskoslezský kraj', pop: '70 000', detail: 'Havířov je nejmladší město v Česku s dynamickou ekonomikou a řadou podnikatelů hledajících online prezentaci.' },
  { name: 'Kroměříž', slug: 'kromeriz', region: 'Zlínský kraj', pop: '28 000', detail: 'Kroměříž je město zahrad a zámků s aktivním turistickým ruchem. Web pomáhá místním podnikům oslovit návštěvníky regionu.' },
  { name: 'Písek', slug: 'pisek', region: 'Jihočeský kraj', pop: '30 000', detail: 'Písek je jedno z nejstarších měst v Čechách s rostoucí ekonomikou a potřebou digitální prezentace lokálních firem.' },
  { name: 'Beroun', slug: 'beroun', region: 'Středočeský kraj', pop: '20 000', detail: 'Beroun je město v blízkosti Prahy s řadou podnikatelů, kteří obsluhují jak místní, tak pražské zákazníky.' },
  { name: 'Benešov', slug: 'benesov', region: 'Středočeský kraj', pop: '17 000', detail: 'Benešov a okolí (Konopiště) přitahuje turisty i podnikatele. Web je nutnost pro restaurace, ubytování i služby.' },
  { name: 'Kutná Hora', slug: 'kutna-hora', region: 'Středočeský kraj', pop: '21 000', detail: 'Kutná Hora je město UNESCO s vysokou návštěvností turistů. Hotely, restaurace a průvodci potřebují profesionální web.' },
  { name: 'Český Krumlov', slug: 'cesky-krumlov', region: 'Jihočeský kraj', pop: '13 000', detail: 'Český Krumlov je jedna z nejnavštěvovanějších destinací v ČR. Web v angličtině i češtině je pro místní podnikatele klíčový.' },
  { name: 'Šumperk', slug: 'sumperk', region: 'Olomoucký kraj', pop: '26 000', detail: 'Šumperk je brána Jeseníků s rostoucím turismem. Ubytování, sport a služby potřebují moderní web.' },
  { name: 'Jindřichův Hradec', slug: 'jindrichuv-hradec', region: 'Jihočeský kraj', pop: '21 000', detail: 'Jindřichův Hradec je historické město s aktivní podnikatelskou scénou v jižních Čechách.' },
  { name: 'Břeclav', slug: 'breclav', region: 'Jihomoravský kraj', pop: '24 000', detail: 'Břeclav je hraniční město a centrum Lednicko-valtického areálu. Vinaři a turistické služby zde potřebují silný web.' },
  { name: 'Rakovník', slug: 'rakovnik', region: 'Středočeský kraj', pop: '16 000', detail: 'Rakovník je město s pivovarskou tradicí a rostoucí podnikatelskou scénou ve středních Čechách.' },
  { name: 'Sokolov', slug: 'sokolov', region: 'Karlovarský kraj', pop: '23 000', detail: 'Sokolov a okolí procházejí ekonomickou transformací. Nové firmy potřebují web pro oslovení zákazníků v regionu.' },
  { name: 'Nymburk', slug: 'nymburk', region: 'Středočeský kraj', pop: '15 000', detail: 'Nymburk je město na Labi s aktivním podnikáním v zemědělství, službách i řemeslech.' },
];

export const cities2: SEOPage[] = tier2Cities.map((city) => ({
  slug: `tvorba-webu-${city.slug}`,
  category: 'city' as const,
  h1: `Tvorba webových stránek ${city.name}`,
  metaTitle: `Tvorba webu ${city.name} | Weby od 9 900 Kč do 48h`,
  metaDescription: `Profesionální tvorba webových stránek pro firmy v ${city.name}. AI technologie, moderní design, od 9 900 Kč. Dodání do 48 hodin. QuickSite.cz.`,
  heroSubtitle: `Webové stránky pro firmy a podnikatele v ${city.name} a okolí — rychle, moderně a za férovou cenu.`,
  content: `
## Webové stránky pro firmy v ${city.name}

${city.detail}

**QuickSite.cz** tvoří profesionální webové stránky s pomocí AI technologie. Fungujeme kompletně online a dodáváme po celé ČR — včetně ${city.name} a celého regionu ${city.region}. Cena začíná na **9 900 Kč** a web máte hotový do **48 hodin**.

## Proč firmy v ${city.name} potřebují web

V ${city.name} (${city.pop} obyvatel) a okolí podniká řada firem — od řemeslníků přes restaurace po profesionální služby. Konkurence roste a zákazníci hledají firmy primárně na internetu. Bez kvalitního webu přicházíte o zakázky.

- **Lokální řemeslníci a služby** — zákazníci vás hledají na Googlu, ne v telefonním seznamu
- **Restaurace a kavárny** — online menu, rezervace a recenze přivádí hosty
- **Profesionální služby** (účetní, právníci, lékaři) — web buduje důvěryhodnost
- **E-shopy a prodejci** — rozšiřte dosah za hranice ${city.name}

## Co od nás dostanete

S QuickSite.cz získáte web optimalizovaný pro vyhledávače, rychle se načítající a skvěle vypadající na mobilu i desktopu. Využíváme AI pro generování obsahu i návrh struktury — proto jsme rychlejší a levnější než klasická agentura.

## ${city.name} v kostce

${city.name} je součástí regionu ${city.region}. Web od QuickSite.cz pomůže vaší firmě oslovit zákazníky nejen v ${city.name}, ale v celém kraji. Objednejte si web ještě dnes.
  `.trim(),
  faq: [
    {
      question: `Jak rychle můžu mít web pro svou firmu v ${city.name}?`,
      answer: 'Díky naší AI technologii dodáváme hotové weby do 48 hodin od schválení podkladů. Nemusíte čekat týdny jako u klasické agentury.',
    },
    {
      question: `Kolik stojí tvorba webu pro firmu v ${city.name}?`,
      answer: 'Ceny začínají na 9 900 Kč za kompletní webovou prezentaci. Žádné skryté poplatky.',
    },
    {
      question: `Fungujete přímo v ${city.name}?`,
      answer: `Fungujeme kompletně online, takže vám ušetříme čas i peníze. Dodáváme po celé ČR včetně ${city.name} a okolí.`,
    },
    {
      question: `Bude můj web optimalizovaný pro ${city.name}?`,
      answer: `Ano. Každý web optimalizujeme pro lokální SEO, takže se vaše firma bude zobrazovat lidem hledajícím služby v ${city.name} a okolí.`,
    },
  ],
  relatedSlugs: tier2Cities
    .filter((c) => c.slug !== city.slug && c.region === city.region)
    .slice(0, 5)
    .map((c) => `tvorba-webu-${c.slug}`),
}));
