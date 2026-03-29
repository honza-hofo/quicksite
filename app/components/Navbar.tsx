'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'Služby', href: '/tvorba-webovych-stranek' },
  { label: 'Ceník', href: '/cena-tvorby-webu' },
  { label: 'Reference', href: '/reference' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-heading text-xl font-bold text-gray-900">
          <img src="/logo.png" alt="QuickSite" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="/konfigurator"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-btn hover:bg-primary-dark transition-colors"
          >
            🤖 Nakonfigurovat web
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-gray-600 hover:text-primary">
              {link.label}
            </a>
          ))}
          <a href="/konfigurator" onClick={() => setMenuOpen(false)} className="block mt-2 bg-primary text-white text-center font-semibold px-5 py-2.5 rounded-btn">
            🤖 Nakonfigurovat web
          </a>
        </div>
      )}
    </nav>
  );
}
