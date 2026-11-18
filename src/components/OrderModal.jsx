import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function OrderModal({ orderData, onClose, onShowToast }) {
  const [grind, setGrind] = useState('Biji Utuh (Whole Bean)');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
    setGrind('Biji Utuh (Whole Bean)');
  }, [orderData]);

  if (!orderData) return null;

  const handleConfirm = () => {
    const message = `Halo Kopi Rimba Roastery, saya ingin memesan:\n- Produk: ${orderData.name}\n- Gilingan: ${grind}\n- Jumlah: ${qty} kemasan\nMohon info ongkos kirimnya. Terima kasih!`;
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    onClose();
    onShowToast('Mengarahkan ke WhatsApp...', 'Pesanan Anda telah disiapkan untuk dikirim ke tim Kopi Rimba.');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-rimba-900/70 backdrop-blur-sm p-4">
      <div className="bg-cream-100 text-rimba-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-rimba-800/15 relative animate-page-in">
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream-200 hover:bg-cream-300 flex items-center justify-center text-rimba-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-widest font-bold text-rimba-700">Pemesanan Cepat</span>
        <h3 className="font-editorial text-2xl font-bold text-rimba-800 mt-1">{orderData.name}</h3>
        <p className="text-sm font-semibold text-terracotta mt-0.5">{orderData.priceLabel}</p>

        <div className="space-y-4 mt-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
              Pilih Bentuk Gilingan
            </label>
            <select
              value={grind}
              onChange={(e) => setGrind(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-rimba-800/20 text-sm focus:outline-none"
            >
              <option value="Biji Utuh (Whole Bean)">Biji Utuh (Whole Bean)</option>
              <option value="Giling Kasar (French Press / Cold Brew)">Giling Kasar (French Press / Cold Brew)</option>
              <option value="Giling Medium (V60 / Pour Over)">Giling Medium (V60 / Pour Over)</option>
              <option value="Giling Halus (Espresso / Tubruk)">Giling Halus (Espresso / Tubruk)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-rimba-800 mb-1.5">
              Jumlah Kemasan
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-xl bg-cream-200 hover:bg-cream-300 font-bold text-lg cursor-pointer"
              >
                -
              </button>
              <span className="font-bold text-base w-8 text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 rounded-xl bg-cream-200 hover:bg-cream-300 font-bold text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full bg-rimba-800 hover:bg-rimba-700 text-cream-100 font-semibold py-3.5 rounded-xl shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Lanjut Pesan via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ToastNotification({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex max-w-sm bg-rimba-900 text-cream-100 border border-gold/40 px-5 py-4 rounded-2xl shadow-2xl items-start gap-3 animate-page-in">
      <div className="w-6 h-6 rounded-full bg-gold text-rimba-900 flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 stroke-[3]" />
      </div>
      <div>
        <p className="font-bold text-sm text-cream-100">{toast.title}</p>
        <p className="text-xs text-cream-200/80 mt-0.5">{toast.desc}</p>
      </div>
    </div>
  );
}