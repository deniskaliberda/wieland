import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, CONTACT, TRUST } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Spezialfahrzeugbau — Leistungen & Fertigung',
  description: `Spezialfahrzeugbau bei Marko Pfaff: Komplette Eigenfertigung mit Dreherei, Schweisserei, Lackiererei und Schreinerei. DIN EN 1090 zertifiziert. ${TRUST.erfahrungJahre} Jahre Erfahrung.`,
};

const breadcrumbItems = [{ label: 'Spezialfahrzeugbau' }];

const leistungen = [
  {
    titel: 'Beratung & Planung',
    text: 'Gemeinsam entwickeln wir Ihr Fahrzeugkonzept — von der ersten Idee bis zur detaillierten Konstruktionszeichnung.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    titel: 'Stahlbau & Rahmenfertigung',
    text: 'Stahlrahmen und Aufbauten nach DIN EN 1090 — praezise gefertigt in unserer eigenen Werkstatt.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    titel: 'Schweisstechnik',
    text: 'WIG, MAG, MIG und Autogenschweissen fuer Aluminium, Stahl und Edelstahl — DIN EN ISO 3834 zertifiziert.',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  },
  {
    titel: 'Dreherei & Metallbearbeitung',
    text: 'Eigene Dreherei fuer Praezisionsteile — keine Abhaengigkeit von externen Zulieferern, kurze Durchlaufzeiten.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    titel: 'Lackiererei',
    text: 'Professionelle Fahrzeuglackierung in unserer Lackierkabine — in jeder gewuenschten Farbe und Qualitaet.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    titel: 'Innenausbau & Schreinerei',
    text: 'Hochwertige Innenausbauten aus eigener Schreinerei — massgeschneidert fuer jedes Fahrzeug.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

export default function SpezialfahrzeugbauPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
              Spezialfahrzeugbau — Alles aus einer Hand
            </h1>
            <p className="text-lg text-steel">
              Von der ersten Idee bis zum fertigen Fahrzeug: Bei Marko Pfaff &amp; Co. entstehen
              individuelle Spezialfahrzeuge in kompletter Eigenfertigung. Unsere {COMPANY.mitarbeiter} Mitarbeiter
              decken alle Gewerke ab — Stahlbau, Schweissen, Drehen, Lackieren und Innenausbau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leistungen.map((l) => (
              <div key={l.titel} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={l.icon} />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-navy mb-2">{l.titel}</h2>
                <p className="text-sm text-steel">{l.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link
              href="/spezialfahrzeugbau/fertigung"
              className="group bg-navy text-white rounded-lg p-8 hover:bg-navy-light transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">Fertigung &amp; Werkstatt</h2>
              <p className="text-slate-300 mb-4">
                1.000 m² Werkstatt mit Dreherei, Schweisserei, Lackierkabine und Schreinerei.
              </p>
              <span className="inline-flex items-center gap-1 text-gray-300 font-medium text-sm group-hover:gap-2 transition-all">
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/spezialfahrzeugbau/schweisstechnik"
              className="group bg-navy text-white rounded-lg p-8 hover:bg-navy-light transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">Schweisstechnik</h2>
              <p className="text-slate-300 mb-4">
                WIG, MAG, MIG und Autogenschweissen — DIN EN ISO 3834 zertifiziert.
              </p>
              <span className="inline-flex items-center gap-1 text-gray-300 font-medium text-sm group-hover:gap-2 transition-all">
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
