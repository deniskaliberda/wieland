import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProductSlugs, getProductBySlug, getRelatedProducts } from '@/lib/products';
import { CATEGORY_META, CONTACT, COMPANY } from '@/lib/constants';
import { decodeHtmlEntities } from '@/lib/utils';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ProductSchema from '@/components/schema/ProductSchema';

interface Props {
  params: Promise<{ kategorie: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map(({ kategorie, slug }) => ({ kategorie, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, kategorie } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const catMeta = CATEGORY_META[kategorie];
  const title = `${product.name} — ${catMeta?.name || kategorie}`;
  const description = product.kurzbeschreibung
    ? decodeHtmlEntities(product.kurzbeschreibung).slice(0, 155)
    : `${product.name} — individuell gefertigt von Marko Pfaff & Co. Spezialfahrzeugbau. Jetzt anfragen!`;

  return {
    title,
    description,
    openGraph: {
      images: product.bilder[0] ? [`${CONTACT.website}${product.bilder[0].src}`] : [],
    },
    alternates: {
      canonical: `${CONTACT.website}/fahrzeuge/${kategorie}/${slug}/`,
    },
  };
}

export default async function ProduktSeite({ params }: Props) {
  const { kategorie, slug } = await params;
  const product = getProductBySlug(slug);
  const catMeta = CATEGORY_META[kategorie];

  if (!product || !catMeta) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  const breadcrumbItems = [
    { label: 'Fahrzeuge', href: '/fahrzeuge' },
    { label: catMeta.name, href: `/fahrzeuge/${kategorie}` },
    { label: decodeHtmlEntities(product.name) },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              {product.bilder[0] && (
                <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden relative mb-3">
                  <Image
                    src={product.bilder[0].src}
                    alt={product.bilder[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}

              {/* Thumbnail Grid */}
              {product.bilder.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.bilder.slice(1).map((bild, i) => (
                    <div key={i} className="aspect-square bg-slate-100 rounded overflow-hidden relative">
                      <Image
                        src={bild.src}
                        alt={bild.alt}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                {product.artikelnummer && (
                  <p className="text-sm text-steel-light mb-1">Artikelnr. {product.artikelnummer}</p>
                )}
                <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-3">
                  {decodeHtmlEntities(product.name)}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-blue/10 text-blue text-xs font-medium rounded">
                    {catMeta.name}
                  </span>
                  {product.baujahr && (
                    <span className="px-2.5 py-1 bg-slate-100 text-steel text-xs rounded">
                      Baujahr {product.baujahr}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {(product.beschreibungSeo || product.kurzbeschreibung || product.beschreibung) && (
                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-steel leading-relaxed">
                    {decodeHtmlEntities(product.beschreibungSeo || product.kurzbeschreibung || product.beschreibung)}
                  </p>
                </div>
              )}

              {/* Technical Data */}
              {product.technischeDaten && Object.keys(product.technischeDaten).length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-navy mb-3">Technische Daten</h2>
                  <dl className="divide-y divide-slate-100">
                    {Object.entries(product.technischeDaten).map(([key, value]) => {
                      if (!value) return null;
                      const labels: Record<string, string> = {
                        laenge: 'Laenge',
                        breite: 'Breite',
                        hoehe: 'Hoehe',
                        gewichtLeer: 'Gewicht (leer)',
                        length: 'Laenge',
                        weight: 'Gewicht',
                      };
                      return (
                        <div key={key} className="flex justify-between py-2 text-sm">
                          <dt className="text-steel">{labels[key] || key}</dt>
                          <dd className="font-medium text-navy">{value}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              )}

              {/* CTA */}
              <div className="bg-warm-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-navy mb-2">
                  Interesse an diesem Fahrzeug?
                </h2>
                <p className="text-sm text-steel mb-4">
                  Alle Fahrzeuge werden auf Kundenwunsch gefertigt und an Ihre Vorstellungen angepasst.
                  Kontaktieren Sie uns fuer ein unverbindliches Angebot.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/kontakt"
                    className="px-5 py-2.5 bg-amber hover:bg-amber-light text-navy font-semibold text-sm rounded transition-colors"
                  >
                    Jetzt anfragen
                  </Link>
                  <a
                    href={`tel:${CONTACT.telefon}`}
                    className="px-5 py-2.5 bg-navy hover:bg-navy-light text-white font-medium text-sm rounded transition-colors"
                  >
                    {CONTACT.telefonDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 pt-16 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-navy mb-8">Aehnliche Fahrzeuge</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/fahrzeuge/${rel.kategorie}/${rel.slug}`}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden border border-slate-100"
                  >
                    <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                      {rel.bilder[0] && (
                        <Image
                          src={rel.bilder[0].src}
                          alt={rel.bilder[0].alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-navy group-hover:text-blue transition-colors line-clamp-1">
                        {decodeHtmlEntities(rel.name)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
