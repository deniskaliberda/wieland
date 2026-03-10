import type { Metadata } from 'next';
import { COMPANY, TRUST } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Ueber uns — Geschichte seit 1985',
  description: `${TRUST.erfahrungJahre} Jahre Spezialfahrzeugbau: Von der Schmiede zum Unternehmen mit ${COMPANY.mitarbeiter} Mitarbeitern. Die Geschichte von Marko Pfaff & Co. in Bad Lausick.`,
};

const breadcrumbItems = [
  { label: 'Ueber uns', href: '/ueber-uns/geschichte' },
  { label: 'Geschichte' },
];

const timeline = [
  {
    jahr: 1985,
    titel: 'Gruendung als Einzelunternehmen',
    text: 'Marko Pfaff gruendet den Schmiede- und Fahrzeugbaubetrieb als Einzelunternehmen in Bad Lausick, Sachsen.',
  },
  {
    jahr: 1990,
    titel: 'Erweiterung nach der Wiedervereinigung',
    text: 'Mit der deutschen Wiedervereinigung eroeffnen sich neue Maerkte. Der Betrieb waechst und spezialisiert sich auf Sonderfahrzeugbau.',
  },
  {
    jahr: 1997,
    titel: 'Umfirmierung zur GmbH',
    text: 'Aus dem Einzelunternehmen wird die Marko Pfaff & Co. Spezialfahrzeugbau GmbH. Strukturiertes Wachstum mit Fokus auf Qualitaet.',
  },
  {
    jahr: 2005,
    titel: 'Eigene Dreherei und Lackiererei',
    text: 'Investition in eigene Fertigungskapazitaeten: Dreherei, Schweisserei und Lackiererei unter einem Dach — komplette Eigenfertigung.',
  },
  {
    jahr: 2010,
    titel: 'DIN-Zertifizierungen',
    text: 'Erfolgreiche Zertifizierung nach DIN EN 1090 (Stahltragwerke) und DIN EN ISO 3834 (Schweisstechnik). Qualitaet auf hoechstem Niveau.',
  },
  {
    jahr: 2015,
    titel: '30 Jahre — Zweite Generation',
    text: 'Claudius Pfaff und Wieland Oswald uebernehmen die Geschaeftsfuehrung. Das Familienunternehmen geht in die naechste Generation.',
  },
  {
    jahr: 2020,
    titel: 'Zweigstelle fuer Innenausbau',
    text: 'Eroeffnung der Zweigstelle An den Angerwiesen mit eigener Schreinerei fuer hochwertigen Fahrzeug-Innenausbau.',
  },
  {
    jahr: new Date().getFullYear(),
    titel: `${TRUST.erfahrungJahre} Jahre und ${COMPANY.mitarbeiter} Mitarbeiter`,
    text: `Heute beschaeftigt das Unternehmen rund ${COMPANY.mitarbeiter} Mitarbeiter und hat ueber 157 Referenzprojekte in ganz Deutschland realisiert.`,
  },
];

export default function GeschichtePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
            Unsere Geschichte
          </h1>
          <p className="text-lg text-steel mb-12">
            Seit {COMPANY.gruendung} bauen wir Spezialfahrzeuge — als Familienunternehmen mit
            Leidenschaft fuer Qualitaet und individuelle Loesungen.
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.jahr} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-blue rounded-full border-4 border-warm-white -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <span className="inline-block px-3 py-1 bg-navy text-white text-sm font-bold rounded mb-2">
                      {item.jahr}
                    </span>
                    <h2 className="text-xl font-semibold text-navy mb-2">{item.titel}</h2>
                    <p className="text-steel">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
