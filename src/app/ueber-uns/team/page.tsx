import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Unser Team',
  description: `Das Team von Marko Pfaff Spezialfahrzeugbau: ${COMPANY.mitarbeiter} Mitarbeiter, gefuehrt von ${COMPANY.geschaeftsfuehrer.join(' und ')}. Familienunternehmen seit ${COMPANY.gruendung}.`,
};

const breadcrumbItems = [
  { label: 'Ueber uns', href: '/ueber-uns/geschichte' },
  { label: 'Team' },
];

const team = [
  {
    name: 'Claudius Pfaff',
    position: 'Geschaeftsfuehrer',
    beschreibung: 'Leitet das Unternehmen in zweiter Generation. Verantwortlich fuer Vertrieb und Kundenprojekte.',
  },
  {
    name: 'Wieland Oswald',
    position: 'Geschaeftsfuehrer',
    beschreibung: 'Verantwortlich fuer Produktion, Technik und Qualitaetsmanagement.',
  },
  {
    name: 'Marko Pfaff',
    position: 'Gruender & Gesellschafter',
    beschreibung: 'Gruendete 1985 den Schmiede- und Fahrzeugbaubetrieb. Bringt ueber 40 Jahre Erfahrung ein.',
  },
];

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">Unser Team</h1>
          <p className="text-lg text-steel mb-12">
            {COMPANY.mitarbeiter} Mitarbeiter mit Leidenschaft fuer Handwerk und Qualitaet —
            gefuehrt als Familienunternehmen in zweiter Generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-lg border border-slate-200 p-6 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-navy">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-lg font-semibold text-navy">{person.name}</h2>
                <p className="text-sm text-blue font-medium mb-3">{person.position}</p>
                <p className="text-sm text-steel">{person.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
