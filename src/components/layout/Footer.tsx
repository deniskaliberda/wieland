import Link from 'next/link';
import { COMPANY, CONTACT, SOCIAL, TRUST } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber rounded-sm flex items-center justify-center font-bold text-navy text-lg">
                P
              </div>
              <div>
                <div className="text-sm font-semibold">Marko Pfaff &amp; Co.</div>
                <div className="text-xs text-blue-light">Spezialfahrzeugbau GmbH</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Seit {COMPANY.gruendung} fertigen wir individuelle Spezialfahrzeuge —
              von Weihnachtsmarkthuetten ueber Wohnwagen bis zu Uebertragungswagen.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-light rounded flex items-center justify-center hover:bg-blue transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-4">Fahrzeuge</h3>
            <ul className="space-y-2">
              {[
                ['Weihnachtsmarkt-Huetten', '/fahrzeuge/weihnachtsmarkt'],
                ['Wohnwagen', '/fahrzeuge/wohnwagen'],
                ['Schaustellerfahrzeuge', '/fahrzeuge/schaustellerfahrzeuge'],
                ['Medienwagen', '/fahrzeuge/medienwagen'],
                ['Nutzfahrzeuge', '/fahrzeuge/nutzfahrzeuge'],
                ['Sonder- & Messebau', '/fahrzeuge/sonderbau'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {[
                ['Ueber uns', '/ueber-uns'],
                ['Referenzen', '/referenzen'],
                ['Karriere', '/karriere'],
                ['Kontakt', '/kontakt'],
                ['Impressum', '/impressum'],
                ['Datenschutz', '/datenschutz'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Certifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-4">Kontakt</h3>
            <address className="not-italic text-sm text-slate-300 space-y-2 mb-6">
              <p>{CONTACT.strasse}</p>
              <p>{CONTACT.plz} {CONTACT.ort}</p>
              <p>
                <a href={`tel:${CONTACT.telefon}`} className="hover:text-white transition-colors">
                  Tel: {CONTACT.telefonDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </address>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-3">Zertifizierungen</h3>
            <div className="flex flex-wrap gap-2">
              {TRUST.zertifizierungen.map((cert) => (
                <span
                  key={cert.name}
                  className="px-2 py-1 bg-navy-light rounded text-xs text-slate-300"
                  title={cert.beschreibung}
                >
                  {cert.name}
                </span>
              ))}
              {TRUST.dekra && (
                <span className="px-2 py-1 bg-navy-light rounded text-xs text-slate-300">
                  DEKRA
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <p>{COMPANY.handelsregister}</p>
        </div>
      </div>
    </footer>
  );
}
