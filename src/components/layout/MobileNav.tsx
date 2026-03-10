'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="lg:hidden bg-white border-t border-gray-100">
      <div className="px-4 py-3 space-y-1">
        {NAV_ITEMS.map((item) => (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() => setExpandedItem(expandedItem === item.href ? null : item.href)}
                  className="p-2 hover:bg-gray-100 rounded text-gray-500"
                  aria-label={`${item.label} aufklappen`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedItem === item.href ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            {item.children && expandedItem === item.href && (
              <div className="pl-4 pb-2 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link
          href="/kontakt"
          className="block mt-3 text-center px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm rounded transition-colors"
          onClick={onClose}
        >
          Projekt anfragen
        </Link>
      </div>
    </div>
  );
}
