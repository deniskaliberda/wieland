// === Product Types ===

export interface ProductImage {
  src: string;
  originalSrc: string;
  alt: string;
  breite: number;
  hoehe: number;
}

export interface TechnischeDaten {
  laenge?: string;
  breite?: string;
  hoehe?: string;
  gewichtLeer?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  artikelnummer: string;
  kategorie: string;
  unterkategorie: string | null;
  baujahr: number | null;
  kurzbeschreibung: string;
  beschreibung: string;
  beschreibungSeo: string;
  technischeDaten: TechnischeDaten | null;
  bilder: ProductImage[];
  permalink: string;
  preis: {
    regular: string;
    sale: string;
    currency: string;
  } | null;
  verwandteProdukte: string[];
}

// === Category Types ===

export interface Subcategory {
  slug: string;
  name: string;
  anzahl: number;
}

export interface Category {
  slug: string;
  name: string;
  anzahl: number;
  subcategories: Subcategory[];
  beschreibung?: string;
  bild?: string;
}

// === Content Types ===

export interface TeamMember {
  name: string;
  position: string;
  bild: string;
  beschreibung?: string;
}

export interface Referenz {
  slug: string;
  titel: string;
  kunde: string;
  kategorie: string;
  jahr: number;
  beschreibung: string;
  bilder: string[];
  ergebnis?: string;
}

export interface BlogPost {
  slug: string;
  titel: string;
  datum: string;
  autor: string;
  kategorie: string;
  excerpt: string;
  bild: string;
  bildAlt: string;
  tags: string[];
  lesezeit: number;
}

// === Navigation ===

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// === SEO ===

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}
