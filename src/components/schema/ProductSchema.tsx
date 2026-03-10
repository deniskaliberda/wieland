import { COMPANY, CONTACT } from '@/lib/constants';
import type { Product } from '@/lib/types';

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.beschreibungSeo || product.beschreibung || product.kurzbeschreibung,
    sku: product.artikelnummer,
    image: product.bilder.map((b) => `${CONTACT.website}${b.src}`),
    brand: {
      '@type': 'Brand',
      name: COMPANY.nameShort,
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: CONTACT.website,
    },
    category: product.kategorie,
    ...(product.baujahr && { productionDate: String(product.baujahr) }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      price: '0',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      url: `${CONTACT.website}/fahrzeuge/${product.kategorie}/${product.slug}/`,
      seller: {
        '@type': 'Organization',
        name: COMPANY.name,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
