import type { Metadata } from 'next';
import { COMPANY, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutzerklaerung',
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1>Datenschutzerklaerung</h1>

        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.
        </p>

        <h2>2. Verantwortliche Stelle</h2>
        <p>
          {COMPANY.name}<br />
          {CONTACT.strasse}<br />
          {CONTACT.plz} {CONTACT.ort}<br />
          Telefon: {CONTACT.telefonDisplay}<br />
          E-Mail: {CONTACT.email}
        </p>

        <h2>3. Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns uebermittelt.
        </p>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und fuer den Fall von Anschlussfragen bei uns gespeichert.
        </p>

        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft ueber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfaenger und den Zweck der Datenverarbeitung
          sowie ein Recht auf Berichtigung oder Loeschung dieser Daten.
        </p>

        <p className="text-sm text-steel-light mt-8">
          Stand: Maerz 2026. Diese Datenschutzerklaerung wird bei Bedarf aktualisiert.
        </p>
      </div>
    </section>
  );
}
