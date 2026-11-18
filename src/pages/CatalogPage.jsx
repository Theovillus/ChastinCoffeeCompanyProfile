import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/companyData';

export default function CatalogPage({ onNavigate, onOpenOrder }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Single Origin', 'House Blend', 'Signature Drink'];

  const filteredProducts =
    selectedCategory === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 bg-cream-100 animate-page-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-rimba-700 mb-8">
          <button onClick={() => onNavigate('beranda')} className="hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-rimba-900 font-bold">Katalog Produk</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-rimba-700">Koleksi Terkurasi</span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-rimba-800">
              Biji Kopi & Seduhan Pilihan
            </h1>
            <p className="text-sm sm:text-base text-rimba-800/75 max-w-xl">
              Pilih profil sangrai untuk seduhan manual (<em>filter</em>) maupun mesin espresso di rumah dan kedai Anda.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rimba-800 text-cream-100'
                    : 'bg-cream-200 text-rimba-800 hover:bg-cream-300'
                }`}
              >
                {cat === 'all' ? 'Semua' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-cream-50 rounded-3xl overflow-hidden border border-rimba-800/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-rimba-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-rimba-800/90 backdrop-blur-sm text-cream-100 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-cream-100/95 text-rimba-800 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {product.weight}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-rimba-600 font-medium">
                    <span>{product.process}</span>
                    <span>{product.altitude}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-rimba-800">{product.name}</h3>
                  <p className="text-xs text-rimba-800/75 leading-relaxed">
                    <strong className="text-rimba-800">Tasting Notes:</strong> {product.notes}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-rimba-800/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-rimba-600">Harga</p>
                  <p className="font-bold text-lg text-rimba-800">{product.price}</p>
                </div>
                <button
                  onClick={() => onOpenOrder(product.name, `${product.price} / ${product.weight}`)}
                  className="bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Pesan Sekarang
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 bg-cream-200/80 p-6 rounded-3xl border border-rimba-800/10">
          <button onClick={() => onNavigate('proses')} className="inline-flex items-center gap-2 text-sm font-bold text-rimba-800 cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya: Proses Pengolahan</span>
          </button>
          <button
            onClick={() => onNavigate('b2b')}
            className="inline-flex items-center gap-2 bg-rimba-800 hover:bg-rimba-700 text-cream-100 text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <span>Lanjut: Kemitraan B2B</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}