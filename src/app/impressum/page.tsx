import type { Metadata } from 'next';
import { COMPANY, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1>Impressum</h1>

        <h2>Angaben gemaess § 5 TMG</h2>
        <p>
          {COMPANY.name}<br />
          {CONTACT.strasse}<br />
          {CONTACT.plz} {CONTACT.ort}
        </p>

        <h2>Vertreten durch</h2>
        <p>Geschaeftsfuehrer: {COMPANY.geschaeftsfuehrer.join(', ')}</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {CONTACT.telefonDisplay}<br />
          Fax: {CONTACT.faxDisplay}<br />
          E-Mail: {CONTACT.email}
        </p>

        <h2>Registereintrag</h2>
        <p>{COMPANY.handelsregister}</p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemaess §27a Umsatzsteuergesetz:<br />
          [USt-IdNr. wird nachgetragen]
        </p>

        <h2>Verantwortlich fuer den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          {COMPANY.geschaeftsfuehrer[0]}<br />
          {CONTACT.strasse}<br />
          {CONTACT.plz} {CONTACT.ort}
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </section>
  );
}
