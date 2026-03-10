import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Fertigung & Werkstatt — 1.000 m² Eigenproduktion',
  description: 'Unsere 1.000 m² Werkstatt in Bad Lausick: Dreherei, Schweisserei, Lackierkabine und Schreinerei. Komplette Eigenfertigung fuer Spezialfahrzeuge.',
};

const breadcrumbItems = [
  { label: 'Spezialfahrzeugbau', href: '/spezialfahrzeugbau' },
  { label: 'Fertigung' },
];

export default function FertigungPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Fertigung &amp; Werkstatt
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-steel">
              Auf ueber 1.000 m² Werkstattflaeche in Bad Lausick fertigen unsere {COMPANY.mitarbeiter} Mitarbeiter
              individuelle Spezialfahrzeuge in kompletter Eigenfertigung. Von der Dreherei ueber die
              Schweisserei und Lackierkabine bis zur eigenen Schreinerei — alle Gewerke unter einem Dach.
            </p>

            <h2>Werkstattbereiche</h2>
            <ul>
              <li><strong>Stahlbau &amp; Rahmenfertigung:</strong> CNC-gesteuerte Bearbeitung, Profilbiegen und Zuschnitt</li>
              <li><strong>Dreherei:</strong> Eigene Drehmaschinen fuer Praezisionsteile und Sonderbauteile</li>
              <li><strong>Schweisserei:</strong> WIG, MAG, MIG und Autogenschweissen fuer Stahl, Aluminium, Edelstahl</li>
              <li><strong>Lackierkabine:</strong> Professionelle Fahrzeuglackierung in jeder Farbe</li>
              <li><strong>Schreinerei (Zweigstelle):</strong> Hochwertiger Innenausbau aus Massivholz und Furnier</li>
              <li><strong>Montage:</strong> Endmontage, Elektrik, Hydraulik und Abnahme</li>
            </ul>

            <h2>Vorteile der Eigenfertigung</h2>
            <ul>
              <li>Keine Abhaengigkeit von Zulieferern — kurze Durchlaufzeiten</li>
              <li>Direkte Qualitaetskontrolle in jedem Fertigungsschritt</li>
              <li>Flexibilitaet bei Sonderwuenschen und Aenderungen</li>
              <li>DEKRA-Abnahme direkt vor Ort im Werk</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
