import { COMPANY, CONTACT, SOCIAL, TRUST } from '@/lib/constants';

export default function ManufacturingBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingBusiness',
    name: COMPANY.name,
    alternateName: COMPANY.nameShort,
    url: CONTACT.website,
    logo: `${CONTACT.website}/images/logo.png`,
    image: `${CONTACT.website}/images/werkstatt.jpg`,
    description: `Spezialfahrzeugbau seit ${COMPANY.gruendung}: Individuelle Weihnachtsmarkthuetten, Wohnwagen, Medienwagen, Verkaufsfahrzeuge und Nutzfahrzeuge. DIN EN 1090 zertifiziert, DEKRA-Abnahme vor Ort.`,
    foundingDate: String(COMPANY.gruendung),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: COMPANY.mitarbeiter,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.strasse,
      addressLocality: 'Bad Lausick',
      addressRegion: CONTACT.bundesland,
      postalCode: CONTACT.plz,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1456,
      longitude: 12.6508,
    },
    telephone: CONTACT.telefon,
    faxNumber: CONTACT.fax,
    email: CONTACT.email,
    sameAs: [SOCIAL.facebook],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: TRUST.googleRating,
      reviewCount: TRUST.googleReviews,
      bestRating: 5,
      worstRating: 1,
    },
    hasCredential: TRUST.zertifizierungen.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert.name,
      description: cert.beschreibung,
    })),
    knowsAbout: [
      'Spezialfahrzeugbau',
      'Weihnachtsmarkthuetten',
      'Wohnwagenbau',
      'Uebertragungswagen',
      'Verkaufsfahrzeuge',
      'Schweisstechnik',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
