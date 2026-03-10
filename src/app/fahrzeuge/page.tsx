import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories, getProductsByCategory } from '@/lib/products';
import { CATEGORY_META } from '@/lib/constants';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Fahrzeuge & Referenzprojekte',
  description:
    'Alle Spezialfahrzeuge von Marko Pfaff: Weihnachtsmarkthuetten, Wohnwagen, Schaustellerfahrzeuge, Medienwagen, Nutzfahrzeuge. 157+ Referenzprojekte.',
};

const breadcrumbItems = [{ label: 'Fahrzeuge' }];

export default function FahrzeugeHubPage() {
  const categories = getCategories();

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
              Unsere Fahrzeuge &amp; Referenzprojekte
            </h1>
            <p className="text-lg text-steel leading-relaxed">
              Ueber 157 individuell gefertigte Spezialfahrzeuge — von der Weihnachtsmarkthuette bis zum
              Uebertragungswagen. Jedes Fahrzeug ein Einzelstueck, gefertigt nach Ihren Wuenschen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter(cat => cat.anzahl > 0)
              .sort((a, b) => b.anzahl - a.anzahl)
              .map((cat) => {
                const meta = CATEGORY_META[cat.slug];
                const catProducts = getProductsByCategory(cat.slug);
                const thumbImage = catProducts.find(p => p.bilder.length > 0)?.bilder[0];
                return (
                  <Link
                    key={cat.slug}
                    href={`/fahrzeuge/${cat.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
                  >
                    <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                      {thumbImage ? (
                        <Image
                          src={thumbImage.src}
                          alt={meta?.name || cat.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-steel-light">
                          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-white text-xs font-semibold bg-amber px-2.5 py-1 rounded-md">
                          {cat.anzahl} Projekte
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors mb-1.5">
                        {meta?.name || cat.name}
                      </h2>
                      <p className="text-sm text-steel line-clamp-2 leading-relaxed">
                        {meta?.beschreibung || `${cat.anzahl} Referenzprojekte in dieser Kategorie.`}
                      </p>
                      {cat.subcategories.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {cat.subcategories.filter(s => s.anzahl > 0).map((sub) => (
                            <span key={sub.slug} className="text-xs text-steel-light bg-slate-50 px-2 py-0.5 rounded">
                              {sub.name} ({sub.anzahl})
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
