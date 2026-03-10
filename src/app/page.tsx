import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, CONTACT, TRUST, CATEGORY_META } from '@/lib/constants';
import { getCategories, getProductsByCategory, getAllProducts } from '@/lib/products';
import HeroSlider from '@/components/home/HeroSlider';

// Curated showcase products for the USP section
function getShowcaseProducts() {
  const all = getAllProducts();
  const showcase: { src: string; alt: string; name: string; kategorie: string; slug: string }[] = [];

  const showcaseCategories = ['wohnwagen', 'weihnachtsmarkt', 'medienwagen', 'schaustellerfahrzeuge', 'sonderbau', 'wohncontainer'];
  for (const cat of showcaseCategories) {
    const products = all.filter(p => p.kategorie === cat && p.bilder.length > 0);
    if (products.length > 0) {
      const p = products[Math.floor(products.length / 3)];
      showcase.push({
        src: p.bilder[0].src,
        alt: p.bilder[0].alt || p.name,
        name: p.name,
        kategorie: p.kategorie,
        slug: p.slug,
      });
    }
  }

  return showcase.slice(0, 6);
}

// Hand-picked hero images — one stunning photo per product category
const HERO_SLIDES = [
  {
    src: '/images/produkte/wohnwagen/wohnwagen-panorama-1.jpg',
    alt: 'Wohnwagen Panorama — individueller Caravan von Marko Pfaff',
    label: 'Wohnwagen & Caravans',
  },
  {
    src: '/images/produkte/weihnachtsmarkt/hu-053-2013-gluehwein-alm-1.jpg',
    alt: 'Gluehwein-Alm — Weihnachtsmarkthuette von Marko Pfaff',
    label: 'Weihnachtsmarkthuetten',
  },
  {
    src: '/images/produkte/medienwagen/uw-004-2009-uebertragungswagen-tvn-ue4hd-tvn-group-1.jpg',
    alt: 'Uebertragungswagen TVN-Ue4HD — Broadcast-Fahrzeug von Marko Pfaff',
    label: 'Medienwagen',
  },
  {
    src: '/images/produkte/schaustellerfahrzeuge/candyshop-1.jpg',
    alt: 'Candy Shop — Verkaufsfahrzeug von Marko Pfaff',
    label: 'Schaustellerfahrzeuge',
  },
  {
    src: '/images/produkte/sonderbau/haix-tower-2-0-1.jpg',
    alt: 'HAIX Tower 2.0 — Sonderbau von Marko Pfaff',
    label: 'Sonderbau',
  },
];

export default function HomePage() {
  const categories = getCategories();
  const showcase = getShowcaseProducts();

  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-[85svh] lg:min-h-[90svh] flex items-center overflow-hidden bg-gray-950">
        <HeroSlider slides={HERO_SLIDES} />

        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/30 z-[1]" />

        <div className="relative z-[2] w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-white/30" />
            <span className="text-white/70 text-sm font-medium tracking-widest uppercase">
              Seit {COMPANY.gruendung} &middot; Bad Lausick
            </span>
            <div className="h-px w-10 bg-white/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 text-white">
            Spezialfahrzeuge,
            <br />
            die begeistern.
          </h1>

          <p className="text-lg lg:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Weihnachtsmarkthuetten, Wohnwagen, Uebertragungswagen — massgeschneidert
            in unserer Manufaktur. Von der Idee bis zur DEKRA-Abnahme.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-lg transition-all hover:bg-gray-100 text-base"
            >
              Projekt anfragen
              <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/fahrzeuge"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 font-medium rounded-lg transition-all backdrop-blur-sm border border-white/15 text-white text-base"
            >
              Alle Fahrzeuge ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* === TRUST BAR === */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {[
              { value: `${TRUST.erfahrungJahre}+`, label: 'Jahre Erfahrung' },
              { value: `~${COMPANY.mitarbeiter}`, label: 'Mitarbeiter' },
              { value: '157+', label: 'Referenzprojekte' },
              { value: `${TRUST.googleRating}`, label: `Google (${TRUST.googleReviews} Bewertungen)`, star: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {item.value}
                </span>
                {item.star && (
                  <svg className="w-5 h-5 text-yellow-500 -ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                <span className="text-sm text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CATEGORIES === */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Unsere Kompetenz</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              Fahrzeuge fuer jede<br className="hidden sm:block" /> Anforderung
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Ob Weihnachtsmarkthuette, Wohnwagen oder Uebertragungswagen — jedes Projekt
              wird massgeschneidert in unserer Manufaktur gefertigt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {categories
              .filter(cat => cat.anzahl > 0)
              .sort((a, b) => b.anzahl - a.anzahl)
              .slice(0, 2)
              .map((cat) => {
                const meta = CATEGORY_META[cat.slug];
                const catProducts = getProductsByCategory(cat.slug);
                const thumbImage = catProducts.find(p => p.bilder.length > 0)?.bilder[0];
                return (
                  <Link
                    key={cat.slug}
                    href={`/fahrzeuge/${cat.slug}`}
                    className="group relative overflow-hidden rounded-2xl bg-gray-900"
                  >
                    <div className="aspect-[16/10] relative">
                      {thumbImage && (
                        <Image
                          src={thumbImage.src}
                          alt={meta?.name || cat.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <span className="inline-block text-white/50 text-xs font-bold tracking-wider uppercase mb-2">
                          {cat.anzahl} Projekte
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                          {meta?.name || cat.name}
                        </h3>
                        <p className="text-white/50 text-sm max-w-md line-clamp-2 leading-relaxed">
                          {meta?.beschreibung}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-white/60 text-sm font-medium mt-4 group-hover:text-white group-hover:gap-3 transition-all">
                          Projekte ansehen
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.anzahl > 0)
              .sort((a, b) => b.anzahl - a.anzahl)
              .slice(2)
              .map((cat) => {
                const meta = CATEGORY_META[cat.slug];
                const catProducts = getProductsByCategory(cat.slug);
                const thumbImage = catProducts.find(p => p.bilder.length > 0)?.bilder[0];
                return (
                  <Link
                    key={cat.slug}
                    href={`/fahrzeuge/${cat.slug}`}
                    className="group relative overflow-hidden rounded-2xl bg-gray-900"
                  >
                    <div className="aspect-[16/10] relative">
                      {thumbImage && (
                        <Image
                          src={thumbImage.src}
                          alt={meta?.name || cat.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                        <span className="inline-block text-white/50 text-xs font-bold tracking-wider uppercase mb-1.5">
                          {cat.anzahl} Projekte
                        </span>
                        <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                          {meta?.name || cat.name}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-white/40 text-sm font-medium mt-2 group-hover:text-white group-hover:gap-3 transition-all">
                          Ansehen
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* === SHOWCASE + USPs === */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-12 gap-3">
              {showcase[1] && (
                <div className="col-span-7 aspect-[4/5] relative rounded-2xl overflow-hidden">
                  <Image src={showcase[1].src} alt={showcase[1].alt} fill className="object-cover" sizes="35vw" />
                </div>
              )}
              <div className="col-span-5 flex flex-col gap-3">
                {showcase[2] && (
                  <div className="flex-1 relative rounded-2xl overflow-hidden">
                    <Image src={showcase[2].src} alt={showcase[2].alt} fill className="object-cover" sizes="20vw" />
                  </div>
                )}
                {showcase[3] && (
                  <div className="flex-1 relative rounded-2xl overflow-hidden">
                    <Image src={showcase[3].src} alt={showcase[3].alt} fill className="object-cover" sizes="20vw" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Warum Pfaff</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Komplette Fertigung<br /> unter einem Dach
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Schweissen, Drehen, Lackieren, Schreinerei — bei uns entsteht alles in-house.
                Keine Kompromisse, keine langen Lieferketten.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'DIN-zertifizierte Qualitaet',
                    text: 'DIN EN 1090 und DIN EN ISO 3834 — geprueft und zertifiziert fuer hoechste Ansprueche.',
                    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  },
                  {
                    title: 'DEKRA-Abnahme vor Ort',
                    text: 'Fahrzeugabnahme direkt im Werk — spart Zeit und Transportkosten.',
                    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                  },
                  {
                    title: 'Eigener Innenausbau',
                    text: 'Von der Stahlkonstruktion bis zur Schreinerarbeit — alles aus eigener Hand.',
                    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                  },
                  {
                    title: `${TRUST.erfahrungJahre} Jahre Familienunternehmen`,
                    text: `Gegruendet ${COMPANY.gruendung}, heute mit ~${COMPANY.mitarbeiter} Mitarbeitern in Bad Lausick.`,
                    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  },
                ].map((usp) => (
                  <div key={usp.title} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={usp.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5">{usp.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{usp.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Der Weg zum Fahrzeug</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              In 4 Schritten zu Ihrem Spezialfahrzeug
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Beratung', text: 'Wir besprechen Ihre Anforderungen und entwickeln ein erstes Konzept.' },
              { step: '02', title: 'Konstruktion', text: 'Unsere Ingenieure erstellen massgeschneiderte Entwuerfe und Plaene.' },
              { step: '03', title: 'Fertigung', text: 'Schweissen, Lackieren, Innenausbau — alles in unserer Manufaktur.' },
              { step: '04', title: 'Abnahme', text: 'DEKRA-Abnahme direkt vor Ort, fertig fuer den sofortigen Einsatz.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl lg:text-7xl font-black text-gray-200 leading-none">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-20 lg:py-28 bg-gray-900 overflow-hidden">
        {showcase[4] && (
          <>
            <Image src={showcase[4].src} alt="" fill className="object-cover opacity-10" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
          </>
        )}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 text-white leading-tight">
            Ihr Projekt beginnt mit
            <br />
            einem Gespraech.
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Erzaehlen Sie uns von Ihrer Idee — wir beraten Sie unverbindlich
            und erstellen ein individuelles Angebot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="group px-10 py-4 bg-white text-gray-900 font-bold rounded-lg transition-all hover:bg-gray-100 text-base"
            >
              Jetzt Projekt anfragen
              <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${CONTACT.telefon}`}
              className="px-10 py-4 bg-white/5 hover:bg-white/10 font-medium rounded-lg transition-all border border-white/10 text-white text-base"
            >
              {CONTACT.telefonDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
