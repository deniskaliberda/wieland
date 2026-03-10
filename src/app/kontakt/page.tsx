import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, CONTACT, TRUST } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt',
  description: `Kontaktieren Sie Marko Pfaff Spezialfahrzeugbau in Bad Lausick. Tel: ${CONTACT.telefonDisplay}, E-Mail: ${CONTACT.email}. Individuelle Beratung fuer Ihr Fahrzeugprojekt.`,
};

const breadcrumbItems = [{ label: 'Kontakt' }];

export default function KontaktPage() {
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
              Kontakt &amp; Anfahrt
            </h1>
            <p className="text-lg text-steel">
              Haben Sie ein Fahrzeugprojekt im Kopf? Wir beraten Sie gerne unverbindlich —
              per Telefon, E-Mail oder persoenlich bei uns im Werk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-navy mb-4">{COMPANY.name}</h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-steel-light font-medium mb-1">Hauptsitz</dt>
                    <dd className="text-navy">
                      {CONTACT.strasse}<br />
                      {CONTACT.plz} {CONTACT.ort}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-steel-light font-medium mb-1">Zweigstelle ({CONTACT.zweigstelle.name})</dt>
                    <dd className="text-navy">
                      {CONTACT.zweigstelle.strasse}<br />
                      {CONTACT.zweigstelle.plz} {CONTACT.zweigstelle.ort}
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <dt className="text-steel-light font-medium mb-1">Telefon</dt>
                    <dd>
                      <a href={`tel:${CONTACT.telefon}`} className="text-blue hover:text-navy font-medium transition-colors">
                        {CONTACT.telefonDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-steel-light font-medium mb-1">Fax</dt>
                    <dd className="text-navy">{CONTACT.faxDisplay}</dd>
                  </div>
                  <div>
                    <dt className="text-steel-light font-medium mb-1">E-Mail</dt>
                    <dd>
                      <a href={`mailto:${CONTACT.email}`} className="text-blue hover:text-navy font-medium transition-colors">
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-navy mb-4">Geschaeftsfuehrung</h2>
                <div className="space-y-2 text-sm text-steel">
                  {COMPANY.geschaeftsfuehrer.map((gf) => (
                    <p key={gf} className="font-medium text-navy">{gf}</p>
                  ))}
                </div>
                <p className="mt-3 text-xs text-steel-light">{COMPANY.handelsregister}</p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-navy mb-4">Nachricht senden</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="firma" className="block text-sm font-medium text-navy mb-1">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="firma"
                      name="firma"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-navy mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-navy mb-1">
                    Betreff
                  </label>
                  <select
                    id="betreff"
                    name="betreff"
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                  >
                    <option value="">Bitte waehlen...</option>
                    <option value="weihnachtsmarkt">Weihnachtsmarkthuette</option>
                    <option value="wohnwagen">Wohnwagen / Caravan</option>
                    <option value="verkaufsfahrzeug">Verkaufsfahrzeug</option>
                    <option value="medienwagen">Medienwagen / OB Van</option>
                    <option value="nutzfahrzeug">Nutzfahrzeug</option>
                    <option value="sonderbau">Sonderbau / Messebau</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-navy mb-1">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue resize-y"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber hover:bg-amber-light text-navy font-semibold rounded transition-colors"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-steel-light">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <Link href="/datenschutz" className="underline hover:text-navy">Datenschutzerklaerung</Link> zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
