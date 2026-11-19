import React from 'react';
import { ArrowRight, Check, Sparkles, Flame } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  const shortcuts = [
    {
      title: 'Tentang Kami',
      desc: 'Kisah Pengolahan Kopi asli Bengkulu sejak 2024.',
      cta: 'Baca Kisah Kami',
      page: 'tentang',
    },
    {
      title: 'Proses Pengolahan',
      desc: 'Lihat 5 tahapan interaktif perjalanan biji kopi dari panen ceri merah hingga penyangraian.',
      cta: 'Lihat 5 Tahapan',
      page: 'proses',
    },
    {
      title: 'Katalog Produk',
      desc: 'Pilihan Produk Arabica, Robusta, Dan House Blend.',
      cta: 'Buka Katalog',
      page: 'koleksi',
    },
    {
      title: 'Kemitraan B2B',
      desc: 'Program pasokan biji kopi & grosir',
      cta: 'Ajukan Sampel Gratis',
      page: 'b2b',
    },
  ];

  return (
    <div className="animate-page-in">
      {/* Hero Section (Layout Vertikal: Teks di Atas, Gambar Lebar di Bawah) */}
      <section className="relative bg-cream-100 bg-grain pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center space-y-12">
            
            {/* Teks & Tombol di Atas */}
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-rimba-800/15 text-rimba-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-rimba-700 animate-pulse"></span>
                DIRECT TRADE SPECIALTY COFFEE ROASTERY
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-rimba-800 leading-[1.12] tracking-tight">
                Menyeduh Karakter <span className="italic font-normal text-rimba-700">Chastin Coffee</span> di Setiap Cangkir.
              </h1>

              <p className="text-base sm:text-lg text-rimba-800/80 max-w-2xl mx-auto leading-relaxed">
               Kami menghadirkan kopi asli Bengkulu yang disangrai dengan presisi tinggi, mengutamakan keaslian rasa, kualitas, dan karakter khas di setiap seduhan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('koleksi')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 font-semibold px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Jelajahi Biji Kopi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('b2b')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-200/80 hover:bg-cream-200 text-rimba-800 border border-rimba-800/20 font-semibold px-7 py-4 rounded-full transition-all cursor-pointer"
                >
                  <span>Kemitraan B2B</span>
                </button>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-rimba-700 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-rimba-800" />
                  <span>100% Halal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-rimba-800" />
                  <span>Kopi Asli Bengkulu </span>
                </div>
              </div>
            </div>

            {/* Gambar Lebar 16:9 di Bawah Teks */}
            <div className="w-full max-w-4xl relative text-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-cream-50 bg-rimba-800 aspect-[4/3] sm:aspect-[16/9]">
              <img
                 src="HomePageFoto.png"
                 alt="Proses Penyeduhan Kopi Specialty"
                 className="w-full h-full object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-rimba-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Batch Minggu Ini</p>
                  <p className="font-editorial text-xl sm:text-2xl font-semibold">Chastin Coffee - Robusta Bengkulu </p>
                  <p className="text-xs sm:text-sm text-cream-200/80 mt-1">Aroma Khas, Rasa Bold, dan Aftertaste yang elegan</p>
                </div>
              </div>

              <div className="animate-float absolute -top-5 -left-2 sm:-left-6 bg-cream-50/95 backdrop-blur-md border border-rimba-800/15 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rimba-800 text-cream-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-rimba-800">100% Kopi Nusantara </p>
                  <p className="text-[11px] text-rimba-600">Grade Specialty (Cupping 85+)</p>
                </div>
              </div>

              <div className="animate-float-delayed absolute -bottom-5 -right-2 sm:-right-6 bg-rimba-800 text-cream-100 border border-cream-100/20 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rimba-700 text-gold flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-cream-100">Freshly Roasted</p>
                  <p className="text-[11px] text-cream-200/80">Maks. 7 hari sebelum kirim</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistik & Direktori Pintasan */}
      <section className="py-16 lg:py-20 bg-cream-200/70 border-t border-rimba-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-14">
            {[
              { val: '100%', label: 'Locally Sourced Bengkulu', num: '01' },
              { val: 'Halal', label: 'Tersertifikasi Halal & P-IRT', num: '02' },
              { val: '4.9★', label: 'Rating Pelanggan & Mitra', num: '03' },
            ].map((stat) => (
              <div key={stat.num} className="bg-cream-50 p-6 rounded-3xl border border-rimba-800/10 flex items-center justify-between">
                <div>
                  <p className="font-editorial text-3xl sm:text-4xl font-bold text-rimba-800">{stat.val}</p>
                  <p className="text-xs sm:text-sm font-medium text-rimba-700 mt-1">{stat.label}</p>
                </div>
                <span className="w-11 h-11 rounded-2xl bg-rimba-800/10 text-rimba-800 flex items-center justify-center font-editorial font-bold">
                  {stat.num}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shortcuts.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className="group bg-cream-50 hover:bg-rimba-800 text-rimba-800 hover:text-cream-100 p-6 rounded-3xl border border-rimba-800/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
              >
                <div>
                  <h3 className="font-editorial text-xl font-bold">{item.title}</h3>
                  <p className="text-xs opacity-80 mt-2.5 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}