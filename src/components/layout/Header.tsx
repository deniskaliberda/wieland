'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import MobileNav from './MobileNav';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-amber rounded-sm flex items-center justify-center font-bold text-navy text-lg">
              P
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">Marko Pfaff &amp; Co.</div>
              <div className="text-xs text-blue-light leading-tight">Spezialfahrzeugbau</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:text-amber transition-colors rounded"
                >
                  {item.label}
                  {item.children && (
                    <svg className="inline-block w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-b-lg shadow-xl py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-warm-white hover:text-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/kontakt"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-amber hover:bg-amber-light text-navy font-semibold text-sm rounded transition-colors"
            >
              Projekt anfragen
            </Link>

            <button
              className="lg:hidden p-2 hover:bg-navy-light rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu oeffnen"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
