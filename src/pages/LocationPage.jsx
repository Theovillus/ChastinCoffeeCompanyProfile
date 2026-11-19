import React from 'react';
import { MapPin, Clock, Mail, ExternalLink, ArrowLeft, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function LocationPage({ onNavigate }) {
  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-cream-100 animate-page-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-rimba-700 mb-8">
          <button onClick={() => onNavigate('beranda')} className="hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-rimba-900 font-bold">Lokasi & Kontak</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-rimba-700">
              Kunjungi Ruang Seduh Kami
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-rimba-800">
              Roastery & Flagship Coffee Bar
            </h1>
            <p className="text-sm sm:text-base text-rimba-800/80 leading-relaxed">
              Nikmati sesi <em>public cupping</em> setiap Jumat sore atau cicipi langsung koleksi musiman kami yang diseduh oleh barista bersertifikat.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-rimba-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-rimba-800">Alamat Utama</p>
                  <p className="text-sm text-rimba-700 mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-rimba-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-rimba-800">Jam Operasional</p>
                  <p className="text-sm text-rimba-700 mt-0.5">{COMPANY_INFO.hoursWeekday}</p>
                  <p className="text-sm text-rimba-700">{COMPANY_INFO.hoursWeekend}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cream-200 text-rimba-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-rimba-800">Kontak & Pemesanan</p>
                  <p className="text-sm text-rimba-700 mt-0.5">
                    {COMPANY_INFO.email} • {COMPANY_INFO.whatsappDisplay}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-cream-200 border border-rimba-800/15 shadow-lg h-80 sm:h-96 flex items-center justify-center p-6">
              <svg className="absolute inset-0 w-full h-full object-cover opacity-45" viewBox="0 0 800 450" fill="none">
                <rect width="800" height="450" fill="#EFE9D8" />
                <path d="M50 60 Q 180 30, 260 120 T 420 180 T 200 340 Z" fill="#D5E0D7" />
                <path d="M520 240 Q 650 200, 740 310 T 560 410 Z" fill="#D5E0D7" />
                <path d="M120 0 L 340 450" stroke="#FCFBF7" strokeWidth="14" />
                <path d="M0 210 L 800 260" stroke="#FCFBF7" strokeWidth="18" />
              </svg>

              <div className="relative z-10 bg-cream-50/95 backdrop-blur-md border border-rimba-800/15 p-5 rounded-2xl shadow-xl max-w-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rimba-800 text-cream-100 flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-editorial font-bold text-lg text-rimba-800">
                    {COMPANY_INFO.name} Roastery
                  </p>
                  <p className="text-xs text-rimba-700 mt-0.5">{COMPANY_INFO.shortAddress}</p>
                </div>
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kartu Instagram: mt-10 = jarak 40px dari elemen di atasnya */}
        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-rimba-900/10 hover:border-rimba-800/30 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-rimba-900/5 text-rimba-800 flex items-center justify-center shrink-0 group-hover:bg-rimba-800 group-hover:text-cream-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-rimba-900/50">
              Instagram
            </p>
            <p className="font-semibold text-rimba-900 mt-0.5 group-hover:text-rimba-700">
              {COMPANY_INFO.instagramHandle}
            </p>
           
          </div>
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-cream-200/80 p-6 rounded-3xl border border-rimba-800/10">
          <button
            onClick={() => onNavigate('b2b')}
            className="inline-flex items-center gap-2 text-sm font-bold text-rimba-800 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya: Kemitraan B2B</span>
          </button>
          <button
            onClick={() => onNavigate('beranda')}
            className="inline-flex items-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <span>Kembali ke Beranda</span>
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}