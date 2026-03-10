import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Start', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-steel">
      <ol className="flex flex-wrap items-center gap-1">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <svg className="w-3 h-3 text-steel-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href && i < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-blue transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
