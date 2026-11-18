import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO, MENU_PAGES } from '../data/companyData';

export default function Navbar({ activePage, onNavigate, onOpenOrder }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectPage = (pageId) => {
    setDrawerOpen(false);
    onNavigate(pageId);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto bg-cream-100/90 backdrop-blur-md border border-rimba-800/15 px-4 sm:px-6 py-2.5 rounded-2xl shadow-sm flex items-center justify-between gap-4">
          
          {/* Kiri: Brand Logo */}
          <button
            onClick={() => handleSelectPage('beranda')}
            className="inline-flex items-center gap-3 group cursor-pointer text-left shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-rimba-800 text-cream-100 flex items-center justify-center group-hover:bg-rimba-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C7.5 2 4 6 4 11.5C4 17 7.5 22 12 22C16.5 22 20 17 20 11.5C20 6 16.5 2 12 2Z" />
                <path d="M12 2C10 7 14 15 12 22" />
              </svg>
            </div>
            <div>
              <span className="font-editorial font-bold text-lg tracking-tight text-rimba-800 block leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-rimba-600 font-semibold">
                {COMPANY_INFO.subName}
              </span>
            </div>
          </button>

          {/* Tengah: Menu Navigasi Langsung (Tampil saat Full Screen / Desktop) */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
            {MENU_PAGES.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectPage(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-rimba-800 text-cream-100 shadow-sm'
                      : 'text-rimba-800/80 hover:text-rimba-900 hover:bg-cream-200/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Kanan: Tombol Pesan Cepat & Hamburger Menu Mobile */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenOrder('Kopi Rimba - Pemesanan Cepat', 'Mulai Rp 85.000')}
              className="hidden sm:inline-flex items-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-gold" />
              <span>Pesan Kopi</span>
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Buka Menu Navigasi"
              className="lg:hidden inline-flex items-center gap-2.5 bg-cream-200 hover:bg-cream-300 text-rimba-800 px-3 py-2 rounded-xl transition-all cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
              <div className="w-5 h-5 flex flex-col items-center justify-center gap-1">
                <span className="w-4 h-0.5 bg-rimba-800 rounded-full"></span>
                <span className="w-4 h-0.5 bg-terracotta rounded-full"></span>
                <span className="w-4 h-0.5 bg-rimba-800 rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Menu (Khusus Mobile & Tablet) */}
      <div
        className={`fixed inset-0 z-50 bg-rimba-900/65 backdrop-blur-sm transition-all duration-300 ${
          drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div onClick={() => setDrawerOpen(false)} className="absolute inset-0" />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-rimba-800 text-cream-100 shadow-2xl border-l border-cream-100/15 transition-transform duration-300 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-cream-100/15">
              <div>
                <p className="font-editorial font-bold text-lg text-cream-100 leading-none">{COMPANY_INFO.name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mt-1">Halaman Situs</p>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Tutup Menu"
                className="w-10 h-10 rounded-xl bg-rimba-700/70 hover:bg-rimba-700 text-cream-100 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 space-y-1.5">
              {MENU_PAGES.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPage(item.id)}
                    className={`w-full group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all cursor-pointer text-left ${
                      isActive ? 'bg-rimba-700 ring-1 ring-gold/40' : 'hover:bg-rimba-700/40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono text-gold">{item.num}</span>
                      <span className="font-editorial text-xl font-semibold text-cream-100">
                        {item.label}
                      </span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold"></span>}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-cream-100/15 space-y-4 mt-8">
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenOrder('Kopi Rimba - Pemesanan Cepat', 'Mulai Rp 85.000');
              }}
              className="w-full bg-cream-100 hover:bg-cream-200 text-rimba-800 font-bold py-3.5 px-5 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Pesan Kopi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}