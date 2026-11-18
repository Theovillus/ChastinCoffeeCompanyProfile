import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export default function ProcessPage({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef({});

  const handleSelectStep = (stepNumber) => {
    setActiveStep(stepNumber);
    const el = stepRefs.current[stepNumber];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-rimba-900 text-cream-100 relative overflow-hidden animate-page-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex items-center gap-2 text-xs font-semibold text-cream-200/70 mb-8">
          <button onClick={() => onNavigate('beranda')} className="hover:text-cream-100 hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-gold font-bold">Proses Pengolahan Kopi</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rimba-800 border border-cream-100/15 text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Dari Kebun ke Cangkir
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight">
            Perjalanan & Proses Pengolahan Kopi
          </h1>
          <p className="text-sm sm:text-base text-cream-200/80 leading-relaxed">
            Klik tahapan di bawah untuk menyoroti setiap proses dari pemetikan ceri merah hingga penyangraian berstandar specialty.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {PROCESS_STEPS.map((item) => (
              <button
                key={item.step}
                onClick={() => handleSelectStep(item.step)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeStep === item.step
                    ? 'bg-gold text-rimba-900'
                    : 'bg-rimba-800 text-cream-200 hover:bg-rimba-700 border border-cream-100/10'
                }`}
              >
                {item.pillTitle}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-5 md:left-1/2 top-4 bottom-4 w-0.5 bg-cream-100/15 md:-translate-x-1/2 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-gold via-terracotta to-gold transition-all duration-500"
              style={{ height: `${activeStep * 20}%` }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((item, idx) => {
              const isEven = idx % 2 === 1;
              const isPassed = item.step <= activeStep;

              return (
                <div
                  key={item.step}
                  ref={(el) => (stepRefs.current[item.step] = el)}
                  onMouseEnter={() => setActiveStep(item.step)}
                  className="relative pl-14 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center group"
                >
                  <div
                    className={`absolute left-0 md:left-1/2 top-2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center shadow-lg ring-4 ring-rimba-900 z-10 transition-colors ${
                      isPassed ? 'bg-gold text-rimba-900' : 'bg-rimba-800 border-2 border-gold text-gold'
                    }`}
                  >
                    {item.num}
                  </div>

                  <div className={`md:col-span-6 ${isEven ? 'md:pl-8 order-1 md:order-2' : 'md:pr-8'}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-cream-100/15 shadow-xl aspect-[16/10] bg-rimba-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-wider text-gold bg-rimba-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className={`md:col-span-6 ${isEven ? 'md:pr-8 order-2 md:order-1' : 'md:pl-8'}`}>
                    <div
                      className={`bg-rimba-800/80 backdrop-blur-sm border p-6 sm:p-7 rounded-3xl transition-colors ${
                        activeStep === item.step ? 'border-gold/60' : 'border-cream-100/10'
                      } ${isEven ? 'md:text-right' : ''}`}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">{item.tag}</span>
                      <h3 className="font-editorial text-2xl font-bold text-cream-100 mt-1">{item.title}</h3>
                      <p className="text-sm text-cream-200/80 mt-3 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 bg-rimba-800/80 border border-cream-100/15 p-6 rounded-3xl">
          <button onClick={() => onNavigate('tentang')} className="inline-flex items-center gap-2 text-sm font-bold text-cream-200 hover:text-gold cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya: Tentang Kami</span>
          </button>
          <button
            onClick={() => onNavigate('koleksi')}
            className="inline-flex items-center gap-2 bg-gold hover:bg-cream-100 text-rimba-900 text-sm font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <span>Lanjut: Katalog Produk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}