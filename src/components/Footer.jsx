import React from 'react';
import { COMPANY_INFO, MENU_PAGES } from '../data/companyData';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-rimba-900 text-cream-200/80 py-12 border-t border-cream-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <button onClick={() => onNavigate('beranda')} className="flex items-center gap-3 cursor-pointer">
            <img
              src="/Logoremove.png"
              alt="Logo Chastin Coffee"
              className="w-14 h-14 rounded-xl object-contain"
/>
            <span className="font-editorial font-bold text-lg text-cream-100">
              {COMPANY_INFO.name} 
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            {MENU_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className="hover:text-cream-100 transition-colors cursor-pointer"
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-100/10 text-center text-xs text-cream-200/50">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. Seluruh Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}