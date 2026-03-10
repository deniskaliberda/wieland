import fs from 'fs';
import path from 'path';
import type { Product, Category } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'produkte');

let _categories: Category[] | null = null;
let _allProducts: Product[] | null = null;

export function getCategories(): Category[] {
  if (_categories) return _categories;

  const data = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, '_categories.json'), 'utf-8')
  );

  _categories = data;
  return data;
}

export function getAllProducts(): Product[] {
  if (_allProducts) return _allProducts;

  const categories = getCategories();
  const products: Product[] = [];

  for (const cat of categories) {
    const catDir = path.join(CONTENT_DIR, cat.slug);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const product = JSON.parse(
        fs.readFileSync(path.join(catDir, file), 'utf-8')
      ) as Product;
      products.push(product);
    }
  }

  _allProducts = products;
  return products;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return getAllProducts().filter(p => p.kategorie === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find(c => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const all = getAllProducts();

  // First try explicit related products
  if (product.verwandteProdukte.length > 0) {
    const related = product.verwandteProdukte
      .map(id => all.find(p => String(p.id) === id))
      .filter((p): p is Product => p !== undefined)
      .slice(0, limit);

    if (related.length >= limit) return related;
  }

  // Fall back to same category
  return all
    .filter(p => p.kategorie === product.kategorie && p.slug !== product.slug)
    .slice(0, limit);
}

export function getAllCategorySlugs(): string[] {
  return getCategories().map(c => c.slug);
}

export function getAllProductSlugs(): { kategorie: string; slug: string }[] {
  return getAllProducts().map(p => ({
    kategorie: p.kategorie,
    slug: p.slug,
  }));
}
