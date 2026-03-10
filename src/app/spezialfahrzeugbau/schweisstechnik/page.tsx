import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Schweisstechnik — WIG, MAG, MIG | DIN EN ISO 3834',
  description: 'Professionelle Schweisstechnik bei Marko Pfaff: WIG, MAG, MIG und Autogenschweissen fuer Aluminium, Stahl und Edelstahl. DIN EN ISO 3834 zertifiziert.',
};

const breadcrumbItems = [
  { label: 'Spezialfahrzeugbau', href: '/spezialfahrzeugbau' },
  { label: 'Schweisstechnik' },
];

export default function SchweisstechnikPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Schweisstechnik
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-steel">
              Unsere Schweissabteilung ist nach DIN EN ISO 3834 zertifiziert — dem internationalen Standard
              fuer Qualitaetsanforderungen beim Schmelzschweissen metallischer Werkstoffe. Wir beherrschen
              alle gaengigen Schweissverfahren.
            </p>

            <h2>Schweissverfahren</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { name: 'WIG-Schweissen (141)', text: 'Wolfram-Inertgasschweissen fuer hoechste Nahtqualitaet — ideal fuer Aluminium und duenne Bleche.' },
                { name: 'MAG-Schweissen (135)', text: 'Metall-Aktivgasschweissen fuer Stahlkonstruktionen — produktiv und vielseitig.' },
                { name: 'MIG-Schweissen (131)', text: 'Metall-Inertgasschweissen fuer Aluminium und Kupferlegierungen.' },
                { name: 'Autogenschweissen (311)', text: 'Gas-Schmelzschweissen fuer Reparaturen und duenne Materialien.' },
              ].map((v) => (
                <div key={v.name} className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-navy mb-1">{v.name}</h3>
                  <p className="text-sm text-steel">{v.text}</p>
                </div>
              ))}
            </div>

            <h2>Materialien</h2>
            <ul>
              <li><strong>Stahl:</strong> Bau- und Konstruktionsstaehle, warmfest und hochfest</li>
              <li><strong>Aluminium:</strong> Alle gaengigen Legierungen, inkl. Aluminium-Magnesium</li>
              <li><strong>Edelstahl:</strong> V2A und V4A fuer korrosionsbestaendige Verbindungen</li>
            </ul>

            <h2>Zertifizierung</h2>
            <p>
              Unsere Schweisstechnik ist nach <strong>DIN EN ISO 3834</strong> zertifiziert. Dieser Standard
              regelt die Qualitaetsanforderungen fuer das Schmelzschweissen metallischer Werkstoffe und
              stellt sicher, dass alle Schweissnaehte den hoechsten Qualitaetsanforderungen entsprechen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
