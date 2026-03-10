import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategories, getProductsByCategory, getAllCategorySlugs } from '@/lib/products';
import { CATEGORY_META, CONTACT } from '@/lib/constants';
import { decodeHtmlEntities } from '@/lib/utils';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

interface Props {
  params: Promise<{ kategorie: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((kategorie) => ({ kategorie }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie } = await params;
  const meta = CATEGORY_META[kategorie];
  if (!meta) return {};

  return {
    title: meta.name,
    description: meta.seoDescription,
    alternates: {
      canonical: `${CONTACT.website}/fahrzeuge/${kategorie}/`,
    },
  };
}

export default async function KategorieSeite({ params }: Props) {
  const { kategorie } = await params;
  const meta = CATEGORY_META[kategorie];
  const categories = getCategories();
  const catInfo = categories.find(c => c.slug === kategorie);

  if (!meta || !catInfo) {
    notFound();
  }

  const products = getProductsByCategory(kategorie);

  const breadcrumbItems = [
    { label: 'Fahrzeuge', href: '/fahrzeuge' },
    { label: meta.name },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Category Header */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-navy mb-4">
              {meta.name}
            </h1>
            <p className="text-lg text-steel mb-6">
              {meta.beschreibung}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-steel">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {products.length} Referenzprojekte
              </span>
              {catInfo.subcategories.filter(s => s.anzahl > 0).length > 0 && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {catInfo.subcategories.filter(s => s.anzahl > 0).length} Unterkategorien
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subcategory Filters */}
      {catInfo.subcategories.filter(s => s.anzahl > 0).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-navy text-white text-sm font-medium rounded">
              Alle ({products.length})
            </span>
            {catInfo.subcategories.filter(s => s.anzahl > 0).map((sub) => (
              <span key={sub.slug} className="px-3 py-1.5 bg-slate-100 text-steel text-sm rounded hover:bg-slate-200 transition-colors cursor-default">
                {sub.name} ({sub.anzahl})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/fahrzeuge/${kategorie}/${product.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden border border-slate-100"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  {product.bilder[0] && (
                    <Image
                      src={product.bilder[0].src}
                      alt={product.bilder[0].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                  {product.baujahr && (
                    <div className="absolute top-2 right-2 bg-navy/80 text-white text-xs px-2 py-0.5 rounded">
                      {product.baujahr}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-navy group-hover:text-blue transition-colors mb-1 line-clamp-1">
                    {decodeHtmlEntities(product.name)}
                  </h2>
                  {product.artikelnummer && (
                    <p className="text-xs text-steel-light mb-2">{product.artikelnummer}</p>
                  )}
                  {product.kurzbeschreibung && (
                    <p className="text-xs text-steel line-clamp-2">
                      {decodeHtmlEntities(product.kurzbeschreibung).replace(/\(Produkt-Nr\.\s*\S+\)\s*/, '')}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            Ihr individuelles Fahrzeug anfragen
          </h2>
          <p className="text-slate-300 mb-6">
            Alle Fahrzeuge werden nach Kundenwunsch gefertigt. Erzaehlen Sie uns von Ihrem Projekt!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded transition-colors"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
