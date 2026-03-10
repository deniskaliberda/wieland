import type { NavItem } from './types';

// === Firmendaten ===

export const COMPANY = {
  name: 'Marko Pfaff & Co. Spezialfahrzeugbau GmbH',
  nameShort: 'Pfaff Spezialfahrzeugbau',
  gruendung: 1985,
  mitarbeiter: 40,
  geschaeftsfuehrer: ['Claudius Pfaff', 'Wieland Oswald'],
  handelsregister: 'HRB 13047, Amtsgericht Leipzig',
} as const;

export const CONTACT = {
  strasse: 'Alte Strasse 21',
  plz: '04651',
  ort: 'Bad Lausick OT Buchheim',
  bundesland: 'Sachsen',
  land: 'Deutschland',
  telefon: '+49 34345 55330',
  telefonDisplay: '034345 / 5533-0',
  fax: '+49 34345 5533138',
  faxDisplay: '034345 / 5533-138',
  email: 'info@fahrzeugbau-pfaff.de',
  website: 'https://www.fahrzeugbau-pfaff.de',
  zweigstelle: {
    name: 'Innenausbau',
    strasse: 'An den Angerwiesen 4-6',
    plz: '04651',
    ort: 'Bad Lausick',
  },
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/p/Marko-Pfaff-Co-Spezialfahrzeugbau-GmbH-100063859248898/',
} as const;

export const TRUST = {
  googleRating: 4.0,
  googleReviews: 28,
  zertifizierungen: [
    { name: 'DIN EN 1090', beschreibung: 'Stahltragwerke und Aluminiumtragwerke' },
    { name: 'DIN EN ISO 3834', beschreibung: 'Schmelzschweissen metallischer Werkstoffe' },
  ],
  dekra: true,
  erfahrungJahre: new Date().getFullYear() - 1985,
} as const;

// === Design ===

export const COLORS = {
  navy: '#1a365d',
  blue: '#2b6cb0',
  amber: '#d97706',
  warmWhite: '#fafaf9',
  steel: '#475569',
} as const;

// === Navigation ===

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Spezialfahrzeugbau',
    href: '/spezialfahrzeugbau',
    children: [
      { label: 'Fertigung', href: '/spezialfahrzeugbau/fertigung' },
      { label: 'Schweisstechnik', href: '/spezialfahrzeugbau/schweisstechnik' },
    ],
  },
  {
    label: 'Fahrzeuge',
    href: '/fahrzeuge',
    children: [
      { label: 'Weihnachtsmarkt-Huetten', href: '/fahrzeuge/weihnachtsmarkt' },
      { label: 'Wohnwagen', href: '/fahrzeuge/wohnwagen' },
      { label: 'Schaustellerfahrzeuge', href: '/fahrzeuge/schaustellerfahrzeuge' },
      { label: 'Medienwagen', href: '/fahrzeuge/medienwagen' },
      { label: 'Nutzfahrzeuge', href: '/fahrzeuge/nutzfahrzeuge' },
      { label: 'Sonder- & Messebau', href: '/fahrzeuge/sonderbau' },
    ],
  },
  { label: 'Referenzen', href: '/referenzen' },
  {
    label: 'Ueber uns',
    href: '/ueber-uns',
    children: [
      { label: 'Geschichte', href: '/ueber-uns/geschichte' },
      { label: 'Team', href: '/ueber-uns/team' },
    ],
  },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];

// === Kategorie-Metadaten ===

export const CATEGORY_META: Record<string, {
  name: string;
  beschreibung: string;
  seoTitle: string;
  seoDescription: string;
  bild: string;
}> = {
  weihnachtsmarkt: {
    name: 'Weihnachtsmarkt-Huetten',
    beschreibung: 'Rustikale Weihnachtsmarkthuetten, Gluehweinstaende und Weihnachtspyramiden — individuell gefertigt nach Ihren Wuenschen. Ueber 70 Referenzprojekte auf Deutschlands schoensten Weihnachtsmaerkten.',
    seoTitle: 'Weihnachtsmarkthuetten vom Hersteller | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Individuelle Weihnachtsmarkthuetten und Gluehweinstaende vom Hersteller. 70+ Referenzprojekte, DIN-zertifiziert, DEKRA-Abnahme. Jetzt fuer 2026/2027 planen!',
    bild: '/images/kategorien/weihnachtsmarkt.jpg',
  },
  wohnwagen: {
    name: 'Wohnwagen & Caravans',
    beschreibung: 'Individuelle Wohnwagen und Caravans — vom kompakten Pfaff Junior unter 3,5t bis zum luxurioesen Wohnwagen ueber 10 Tonnen. Massanfertigung mit eigenem Innenausbau.',
    seoTitle: 'Individuelle Wohnwagen vom Hersteller | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Wohnwagen nach Mass: Pfaff Junior (<3,5t) bis Luxus-Caravans (>10t). 40 Jahre Erfahrung, eigener Innenausbau, DEKRA-Abnahme. Jetzt anfragen!',
    bild: '/images/kategorien/wohnwagen.jpg',
  },
  schaustellerfahrzeuge: {
    name: 'Schaustellerfahrzeuge',
    beschreibung: 'Verkaufsfahrzeuge, Mannschaftswagen und Spielwagen fuer Schausteller — robust, funktional und individuell gefertigt fuer den harten Alltag auf Volksfesten und Maerkten.',
    seoTitle: 'Schaustellerfahrzeuge & Verkaufsfahrzeuge | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Schaustellerfahrzeuge nach Mass: Verkaufsfahrzeuge, Mannschaftswagen, Spielwagen. Robuste Qualitaet fuer Volksfeste & Maerkte. DIN-zertifiziert.',
    bild: '/images/kategorien/schaustellerfahrzeuge.jpg',
  },
  medienwagen: {
    name: 'Medienwagen & Uebertragungswagen',
    beschreibung: 'Professionelle Uebertragungswagen, OB Vans und Sendewagen fuer TV- und Radio-Produktion. Massgeschneiderte Broadcast-Loesungen mit modernster Technik.',
    seoTitle: 'Uebertragungswagen & OB Vans | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Professionelle Uebertragungswagen und OB Vans vom Hersteller. Massgeschneiderte Broadcast-Fahrzeuge fuer TV & Radio. 40 Jahre Erfahrung.',
    bild: '/images/kategorien/medienwagen.jpg',
  },
  nutzfahrzeuge: {
    name: 'Nutzfahrzeuge',
    beschreibung: 'Spezialanhaenger, Containerfahrgestelle und Packwagen — massgeschneiderte Nutzfahrzeuge fuer individuelle Anforderungen in Logistik und Transport.',
    seoTitle: 'Nutzfahrzeuge & Spezialanhaenger | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Individuelle Nutzfahrzeuge, Spezialanhaenger und Containerfahrgestelle vom Hersteller. DIN EN 1090 zertifiziert. Anfrage stellen!',
    bild: '/images/kategorien/nutzfahrzeuge.jpg',
  },
  sonderbau: {
    name: 'Sonder- & Messebau',
    beschreibung: 'Sonderfahrzeuge und mobile Messebauten fuer besondere Anforderungen — von der Idee bis zur fertigen Loesung aus einer Hand.',
    seoTitle: 'Sonderfahrzeugbau & Messebau | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Sonderfahrzeuge und mobiler Messebau nach Mass. Individuelle Loesungen vom Spezialfahrzeugbauer mit 40 Jahren Erfahrung.',
    bild: '/images/kategorien/sonderbau.jpg',
  },
  kassenwagen: {
    name: 'Kassenwagen & Kassencontainer',
    beschreibung: 'Mobile Kassenwagen und Kassencontainer fuer Veranstaltungen, Freizeitparks und Maerkte — sicher, funktional und wetterfest.',
    seoTitle: 'Kassenwagen & Kassencontainer | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Mobile Kassenwagen und Kassencontainer vom Hersteller. Sicher, funktional, wetterfest. Individuelle Fertigung.',
    bild: '/images/kategorien/kassenwagen.jpg',
  },
  wohncontainer: {
    name: 'Wohncontainer',
    beschreibung: 'Mobile Wohncontainer fuer temporaeren Bedarf — komfortabel ausgestattet, flexibel einsetzbar und individuell konfigurierbar.',
    seoTitle: 'Wohncontainer | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Mobile Wohncontainer nach Mass. Komfortabel, flexibel, individuell konfigurierbar. Vom Spezialfahrzeugbauer aus Sachsen.',
    bild: '/images/kategorien/wohncontainer.jpg',
  },
  bootsanhaenger: {
    name: 'Bootsanhaenger',
    beschreibung: 'Massgeschneiderte Bootsanhaenger fuer den sicheren Transport Ihres Bootes — individuell auf Groesse und Gewicht angepasst.',
    seoTitle: 'Bootsanhaenger nach Mass | Marko Pfaff Spezialfahrzeugbau',
    seoDescription: 'Individuelle Bootsanhaenger vom Hersteller. Massgeschneidert fuer Ihr Boot, DIN-zertifizierte Qualitaet.',
    bild: '/images/kategorien/bootsanhaenger.jpg',
  },
};
