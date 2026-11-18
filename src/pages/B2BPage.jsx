import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, Sliders, CheckCircle2, Send } from 'lucide-react';

export default function B2BPage({ onNavigate, onShowToast }) {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    volume: '5-15 kg / bulan',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(
      `Terima kasih, ${form.name}!`,
      `Permintaan sampel untuk ${form.business} telah dicatat. Tim B2B kami akan menghubungi Anda maksimal 1x24 jam.`
    );
    setForm({ name: '', business: '', phone: '', volume: '5-15 kg / bulan', notes: '' });
  };

  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-rimba-800 text-cream-100 relative overflow-hidden animate-page-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex items-center gap-2 text-xs font-semibold text-cream-200/70 mb-8">
          <button onClick={() => onNavigate('beranda')} className="hover:text-cream-100 hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-gold font-bold">Kemitraan B2B</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-rimba-700 text-gold text-xs font-semibold tracking-wider uppercase">
              Program Kemitraan B2B
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight">
              Mitra Suplai Kopi Andal untuk Bisnis Anda.
            </h1>
            <p className="text-cream-200/85 text-base leading-relaxed">
              Kami membantu kedai kopi, hotel, restoran, hingga kantor mendapatkan pasokan biji kopi yang konsisten profil rasanya, disertai dukungan kalibrasi dan pelatihan barista.
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  icon: Building2,
                  title: 'Suplai Grosir Kafe, Hotel & Kantor',
                  desc: 'Harga khusus volume besar (mulai 5 kg/bulan) dengan jadwal pengiriman rutin yang terjadwal.',
                },
                {
                  icon: Sliders,
                  title: 'Custom Blend & Jasa Maklon Roasting',
                  desc: 'Racik profil rasa eksklusif untuk merek Anda sendiri lengkap dengan opsi kemasan white-label.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Kalibrasi Espresso & Pelatihan Barista',
                  desc: 'Pendampingan teknis untuk memastikan setiap ekstraksi di kedai mitra memenuhi standar kualitas.',
                },
              ].map((srv) => {
                const Icon = srv.icon;
                return (
                  <div key={srv.title} className="flex items-start gap-4 p-4 rounded-2xl bg-rimba-900/50 border border-cream-100/10">
                    <div className="w-10 h-10 rounded-xl bg-rimba-700 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-lg font-semibold text-cream-100">{srv.title}</h3>
                      <p className="text-sm text-cream-200/75 mt-1">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-cream-100 text-rimba-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h2 className="font-editorial text-2xl font-bold text-rimba-800">Ajukan Sampel Biji Kopi Gratis</h2>
              <p className="text-sm text-rimba-700 mt-1 mb-6">
                Isi data bisnis Anda dan tim kemitraan kami akan mengirimkan sample kit serta daftar harga grosir.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Contoh: Raka Pratama"
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none focus:border-rimba-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
                      Nama Usaha / Kafe *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Contoh: Kedai Senja"
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none focus:border-rimba-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none focus:border-rimba-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
                      Estimasi Kebutuhan
                    </label>
                    <select
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none focus:border-rimba-800"
                    >
                      <option value="5-15 kg / bulan">5 – 15 kg / bulan</option>
                      <option value="15-50 kg / bulan">15 – 50 kg / bulan</option>
                      <option value="> 50 kg / bulan">&gt; 50 kg / bulan (Grosir Besar)</option>
                      <option value="Maklon Roasting">Jasa Maklon / Custom Blend</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
                    Catatan Tambahan
                  </label>
                  <textarea
                    rows="3"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Ceritakan profil rasa yang Anda cari..."
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none focus:border-rimba-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rimba-800 hover:bg-rimba-700 text-cream-100 font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Kirim Permintaan Kemitraan</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 bg-rimba-900/60 border border-cream-100/15 p-6 rounded-3xl">
          <button onClick={() => onNavigate('koleksi')} className="inline-flex items-center gap-2 text-sm font-bold text-cream-200 hover:text-gold cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya: Katalog Produk</span>
          </button>
          <button
            onClick={() => onNavigate('lokasi')}
            className="inline-flex items-center gap-2 bg-gold hover:bg-cream-100 text-rimba-900 text-sm font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <span>Lanjut: Lokasi & Kontak</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}