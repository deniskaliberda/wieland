import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, CONTACT, TRUST } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Ueber uns',
  description: `Marko Pfaff & Co. Spezialfahrzeugbau GmbH — Familienunternehmen seit ${COMPANY.gruendung} in Bad Lausick, Sachsen. ${COMPANY.mitarbeiter} Mitarbeiter, DIN-zertifiziert, DEKRA-Abnahme vor Ort.`,
};

const breadcrumbItems = [{ label: 'Ueber uns' }];

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
            Ueber uns
          </h1>
          <p className="text-lg text-steel mb-6 max-w-3xl leading-relaxed">
            Seit {COMPANY.gruendung} baut die {COMPANY.name} individuelle Spezialfahrzeuge
            in {CONTACT.ort}, {CONTACT.bundesland}. Als Familienunternehmen in zweiter Generation
            vereinen wir traditionelles Handwerk mit moderner Fertigungstechnik.
          </p>
          <p className="text-base text-steel mb-12 max-w-3xl leading-relaxed">
            Rund {COMPANY.mitarbeiter} Mitarbeiter arbeiten in unseren Werkstaetten mit
            eigener Dreherei, Schweisserei, Lackiererei und Schreinerei — fuer Qualitaet
            aus einer Hand, von der Planung bis zur DEKRA-Abnahme.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: `${TRUST.erfahrungJahre}+`, label: 'Jahre Erfahrung' },
              { value: `~${COMPANY.mitarbeiter}`, label: 'Mitarbeiter' },
              { value: '157+', label: 'Referenzprojekte' },
              { value: '2', label: 'Standorte' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-slate-100 p-5 text-center">
                <div className="text-2xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-steel mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Sub-pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ueber-uns/geschichte"
              className="group bg-white rounded-xl border border-slate-200 hover:border-blue hover:shadow-md transition-all p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 text-navy rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors mb-2">
                Geschichte
              </h2>
              <p className="text-steel leading-relaxed">
                Von der Gruendung {COMPANY.gruendung} bis heute — die wichtigsten Meilensteine
                unseres Familienunternehmens.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue">
                Mehr erfahren
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/ueber-uns/team"
              className="group bg-white rounded-xl border border-slate-200 hover:border-blue hover:shadow-md transition-all p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 text-navy rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors mb-2">
                Unser Team
              </h2>
              <p className="text-steel leading-relaxed">
                {COMPANY.mitarbeiter} Mitarbeiter mit Leidenschaft fuer Handwerk — gefuehrt
                von {COMPANY.geschaeftsfuehrer.join(' und ')}.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue">
                Team kennenlernen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Zertifizierungen */}
          <div className="mt-16 bg-navy/5 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-navy mb-6">Zertifizierungen & Qualitaet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TRUST.zertifizierungen.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-blue/10 text-blue rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{cert.name}</div>
                    <div className="text-sm text-steel">{cert.beschreibung}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 bg-blue/10 text-blue rounded-lg flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">DEKRA-Abnahme</div>
                  <div className="text-sm text-steel">Fahrzeugabnahme direkt vor Ort im Werk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
