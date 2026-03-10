import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Referenzen & Projekte',
  description: 'Ueber 157 Referenzprojekte von Marko Pfaff Spezialfahrzeugbau: Weihnachtsmarkthuetten, Uebertragungswagen, Wohnwagen und mehr. Kunden wie MDR, NDR, TVN.',
};

const breadcrumbItems = [{ label: 'Referenzen' }];

const referenzen = [
  {
    titel: 'Uebertragungswagen fuer MDR',
    kategorie: 'Medienwagen',
    jahr: 2018,
    beschreibung: 'Massgeschneiderter Uebertragungswagen fuer den Mitteldeutschen Rundfunk — modernste Broadcast-Technik auf kleinstem Raum.',
    link: '/fahrzeuge/medienwagen',
  },
  {
    titel: 'PlatzHirsch — Dresdner Striezelmarkt',
    kategorie: 'Weihnachtsmarkt',
    jahr: 2019,
    beschreibung: 'Rustikale Weihnachtsmarkthuette mit hydraulischem Tresen, Erker und LED-Beleuchtung fuer Dresdens aeltesten Weihnachtsmarkt.',
    link: '/fahrzeuge/weihnachtsmarkt',
  },
  {
    titel: 'Wohnwagen Potsdam',
    kategorie: 'Wohnwagen',
    jahr: 2020,
    beschreibung: 'Luxus-Wohnwagen ueber 10 Tonnen mit komplettem Innenausbau aus eigener Schreinerei.',
    link: '/fahrzeuge/wohnwagen',
  },
  {
    titel: 'Berliner Weihnachtspyramide',
    kategorie: 'Weihnachtsmarkt',
    jahr: 2010,
    beschreibung: 'Uebergrosse Weihnachtspyramide fuer den Berliner Weihnachtsmarkt — ein Wahrzeichen der Adventszeit.',
    link: '/fahrzeuge/weihnachtsmarkt',
  },
  {
    titel: 'Mannschaftswagen fuer Schausteller',
    kategorie: 'Schaustellerfahrzeuge',
    jahr: 2017,
    beschreibung: 'Komfortable Mannschaftswagen fuer den harten Schausteller-Alltag — robust, funktional und mit allen Annehmlichkeiten.',
    link: '/fahrzeuge/schaustellerfahrzeuge',
  },
];

export default function ReferenzenPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
              Referenzen &amp; Projekte
            </h1>
            <p className="text-lg text-steel">
              Ueber 157 individuell gefertigte Spezialfahrzeuge fuer Kunden in ganz Deutschland.
              Hier eine Auswahl unserer Projekte.
            </p>
          </div>

          <div className="space-y-6">
            {referenzen.map((ref) => (
              <div key={ref.titel} className="bg-white rounded-lg border border-slate-200 p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-medium text-blue bg-blue/10 px-2 py-1 rounded mr-2">
                      {ref.kategorie}
                    </span>
                    <span className="text-xs text-steel-light">{ref.jahr}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-navy mb-2">{ref.titel}</h2>
                <p className="text-steel mb-4">{ref.beschreibung}</p>
                <Link
                  href={ref.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:text-navy transition-colors"
                >
                  Kategorie ansehen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
