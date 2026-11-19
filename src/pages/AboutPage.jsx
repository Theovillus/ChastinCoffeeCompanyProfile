import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-cream-100 bg-grain animate-page-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-rimba-700 mb-8">
          <button onClick={() => onNavigate('beranda')} className="hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-rimba-900 font-bold">Tentang Kami</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-rimba-800/10 aspect-[4/3] bg-rimba-800">
              <img
                src="/krema.png"
                alt="Mesin Sangrai Chastin Coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-rimba-800/10 aspect-square bg-rimba-800">
                <img
                  src="/roast.png"
                  alt="Biji Kopi Pilihan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl bg-rimba-800 text-cream-100 p-5 flex flex-col justify-between">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">Jejak Origin</span>
                <div>
                  <p className="font-editorial text-lg font-semibold leading-snug">Aceh Gayo • Toraja • Flores Bajawa</p>
                  <p className="text-xs text-cream-200/75 mt-2">Ketinggian 1.300 – 1.750 mdpl</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-rimba-700">Kisah & Filosofi Kami</span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-rimba-800 leading-tight">
              Dari Hutan Pegunungan ke Cangkir Anda, Tanpa Jalan Pintas.
            </h1>
            <p className="text-rimba-800/80 text-base leading-relaxed">
              Berdiri sejak 2024, <strong>Chastin Coffee</strong> lahir dari keyakinan bahwa kopi nikmat berawal dari kesejahteraan petani dan kelestarian hutan lindung. Kami bekerja berdampingan dengan kelompok tani di{' '}
              <strong>Aceh Gayo, Tana Toraja, dan Flores Bajawa</strong> untuk menerapkan panen petik merah dan pengolahan pascapanen yang terukur.
            </p>
            <p className="text-rimba-800/80 text-base leading-relaxed">
              Di ruang sangrai kami, setiap <em>batch</em> dipantau kurva suhunya secara digital untuk mengeluarkan karakter rasa alami—mulai dari aroma floral yang lembut hingga manis cokelat yang pekat.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-rimba-800/15">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-rimba-800 mb-8">
            Tiga Pilar Keberlanjutan Chastin Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Perdagangan Adil (Direct Trade)',
                desc: 'Membeli hasil panen 20–35% di atas harga pasar komoditas untuk mendorong kualitas petik merah yang berkelanjutan.',
              },
              {
                num: '02',
                title: 'Agroforestri Naungan Hutan',
                desc: 'Mendukung budidaya kopi di bawah tegakan pohon pelindung demi menjaga kesuburan tanah dan ekosistem burung pegunungan.',
              },
              {
                num: '03',
                title: 'Presisi & Transparansi Data',
                desc: 'Setiap kemasan mencantumkan nama kelompok tani, ketinggian tanam, varietas, proses pascapanen, dan tanggal sangrai.',
              },
            ].map((pillar) => (
              <div key={pillar.num} className="bg-cream-50 p-7 rounded-3xl border border-rimba-800/10">
                <div className="w-11 h-11 rounded-2xl bg-rimba-800 text-gold flex items-center justify-center font-editorial font-bold text-lg mb-4">
                  {pillar.num}
                </div>
                <h3 className="font-editorial text-xl font-bold text-rimba-800">{pillar.title}</h3>
                <p className="text-sm text-rimba-800/75 mt-2 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 bg-cream-200/80 p-6 rounded-3xl border border-rimba-800/10">
            <button onClick={() => onNavigate('beranda')} className="inline-flex items-center gap-2 text-sm font-bold text-rimba-800 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>
            <button
              onClick={() => onNavigate('proses')}
              className="inline-flex items-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              <span>Lanjut: Proses Pengolahan Kopi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}