import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, CONTACT, TRUST, CATEGORY_META } from '@/lib/constants';
import { getCategories, getProductsByCategory } from '@/lib/products';

export default function HomePage() {
  const categories = getCategories();

  // Get a hero image from the largest category
  const heroProducts = getProductsByCategory('weihnachtsmarkt');
  const heroImage = heroProducts.find(p => p.bilder.length > 0)?.bilder[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <Image
            src={heroImage.src}
            alt="Spezialfahrzeugbau Pfaff — Fertigung in Bad Lausick"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {TRUST.zertifizierungen.map((cert) => (
                <span key={cert.name} className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                  {cert.name}
                </span>
              ))}
              <span className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/20">
                DEKRA-Abnahme vor Ort
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white">
              Spezialfahrzeugbau
              <br />
              <span className="text-amber">nach Mass</span>
            </h1>

            <p className="text-xl text-white/70 font-light mb-2">
              Seit {COMPANY.gruendung} &middot; {COMPANY.mitarbeiter} Mitarbeiter &middot; Bad Lausick, Sachsen
            </p>

            <p className="text-base text-white/60 mb-8 max-w-xl leading-relaxed">
              Weihnachtsmarkthuetten, Wohnwagen, Uebertragungswagen und Verkaufsfahrzeuge —
              alles aus einer Hand mit eigener Fertigung.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-amber hover:bg-amber-light text-navy font-semibold rounded-lg transition-colors shadow-lg shadow-amber/25"
              >
                Projekt anfragen
              </Link>
              <Link
                href="/fahrzeuge"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 font-medium rounded-lg transition-colors backdrop-blur-sm border border-white/20 text-white"
              >
                Fahrzeuge ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy">{TRUST.erfahrungJahre}+</div>
              <div className="text-sm text-steel mt-1">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">~{COMPANY.mitarbeiter}</div>
              <div className="text-sm text-steel mt-1">Mitarbeiter</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">157+</div>
              <div className="text-sm text-steel mt-1">Referenzprojekte</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <div className="text-3xl font-bold text-navy">{TRUST.googleRating}</div>
                <svg className="w-6 h-6 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-sm text-steel mt-1">{TRUST.googleReviews} Google Bewertungen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Unsere Fahrzeugkategorien
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Vom Gluehweinstand bis zum Uebertragungswagen — wir bauen Ihr Spezialfahrzeug
              individuell nach Ihren Vorstellungen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.anzahl > 0)
              .sort((a, b) => b.anzahl - a.anzahl)
              .map((cat) => {
                const meta = CATEGORY_META[cat.slug];
                // Get first product image as category thumbnail
                const catProducts = getProductsByCategory(cat.slug);
                const thumbImage = catProducts.find(p => p.bilder.length > 0)?.bilder[0];
                return (
                  <Link
                    key={cat.slug}
                    href={`/fahrzeuge/${cat.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
                  >
                    <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                      {thumbImage ? (
                        <Image
                          src={thumbImage.src}
                          alt={meta?.name || cat.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-steel-light">
                          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-white text-xs font-semibold bg-amber px-2.5 py-1 rounded-md">
                          {cat.anzahl} Projekte
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors mb-1.5">
                        {meta?.name || cat.name}
                      </h3>
                      <p className="text-sm text-steel line-clamp-2 leading-relaxed">
                        {meta?.beschreibung || `${cat.anzahl} Referenzprojekte in dieser Kategorie.`}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy hover:bg-navy-light text-white font-medium rounded-lg transition-colors"
            >
              Alle Fahrzeuge ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Warum Pfaff Spezialfahrzeugbau?
            </h2>
            <p className="text-lg text-steel max-w-xl mx-auto">
              Alles aus einer Hand — von der Planung bis zur DEKRA-Abnahme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                title: 'Komplette Eigenfertigung',
                text: 'Schweissen, Drehen, Lackieren, Schreinerei — alles unter einem Dach.',
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'DIN-zertifizierte Qualitaet',
                text: 'DIN EN 1090 und DIN EN ISO 3834 — geprueft und zertifiziert.',
              },
              {
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                title: 'DEKRA-Abnahme vor Ort',
                text: 'Fahrzeugabnahme direkt im Werk — spart Zeit und Transportkosten.',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: `${TRUST.erfahrungJahre} Jahre Erfahrung`,
                text: `Familienunternehmen seit ${COMPANY.gruendung} mit ${COMPANY.mitarbeiter} Mitarbeitern.`,
              },
            ].map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy/5 text-navy rounded-xl mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={usp.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{usp.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{usp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ihr Projekt beginnt mit einem Gespraech
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Erzaehlen Sie uns von Ihrer Idee — wir beraten Sie unverbindlich und erstellen
            ein individuelles Angebot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-3.5 bg-amber hover:bg-amber-light text-navy font-semibold rounded-lg transition-colors shadow-lg shadow-amber/25"
            >
              Jetzt anfragen
            </Link>
            <a
              href={`tel:${CONTACT.telefon}`}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 font-medium rounded-lg transition-colors text-white border border-white/20"
            >
              {CONTACT.telefonDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
