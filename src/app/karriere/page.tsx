import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, CONTACT } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Karriere & Ausbildung im Fahrzeugbau',
  description: `Karriere bei Marko Pfaff Spezialfahrzeugbau in Bad Lausick: Ausbildung zum Karosserie- und Fahrzeugbaumechaniker, Schweisser, Lackierer. ${COMPANY.mitarbeiter} Mitarbeiter, Familienunternehmen seit 1985.`,
};

const breadcrumbItems = [{ label: 'Karriere' }];

const stellen = [
  {
    titel: 'Ausbildung: Karosserie- und Fahrzeugbaumechaniker/in',
    typ: 'Ausbildung',
    beschreibung: 'Du lernst alle Facetten des Spezialfahrzeugbaus — vom Stahlrahmen bis zum fertigen Fahrzeug.',
  },
  {
    titel: 'Schweisser/in (WIG/MAG)',
    typ: 'Festanstellung',
    beschreibung: 'Erfahrene Schweisser fuer Aluminium, Stahl und Edelstahl gesucht. DIN EN ISO 3834 Umgebung.',
  },
  {
    titel: 'Fahrzeuglackierer/in',
    typ: 'Festanstellung',
    beschreibung: 'Professionelle Fahrzeuglackierung in unserer eigenen Lackierkabine.',
  },
  {
    titel: 'Tischler/in / Schreiner/in (Innenausbau)',
    typ: 'Festanstellung',
    beschreibung: 'Hochwertiger Innenausbau fuer Wohnwagen, Verkaufsfahrzeuge und Medienwagen.',
  },
];

export default function KarrierePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
            Karriere &amp; Ausbildung
          </h1>
          <p className="text-lg text-steel mb-12">
            Werde Teil unseres {COMPANY.mitarbeiter}-koepfigen Teams! Wir suchen Talente, die mit
            Leidenschaft und Handwerk individuelle Spezialfahrzeuge bauen wollen.
          </p>

          <div className="space-y-6 mb-16">
            {stellen.map((stelle) => (
              <div key={stelle.titel} className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-navy">{stelle.titel}</h2>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    stelle.typ === 'Ausbildung' ? 'bg-amber/10 text-amber' : 'bg-blue/10 text-blue'
                  }`}>
                    {stelle.typ}
                  </span>
                </div>
                <p className="text-sm text-steel mb-4">{stelle.beschreibung}</p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:text-navy transition-colors"
                >
                  Jetzt bewerben
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-navy text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Initiativbewerbung</h2>
            <p className="text-slate-300 mb-6">
              Keine passende Stelle dabei? Schick uns trotzdem deine Bewerbung — wir sind immer auf der
              Suche nach motivierten Handwerkern und Fachkraeften.
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Initiativbewerbung`}
              className="inline-flex px-6 py-3 bg-amber hover:bg-amber-light text-navy font-semibold rounded transition-colors"
            >
              Bewerbung senden
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
