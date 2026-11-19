export const COMPANY_INFO = {
  name: 'Chastin Coffee',
  subName: 'Membangkitkan Semangat',
  fullName: 'Chastin Coffee',
  whatsappNumber: '6281288994411',
  whatsappDisplay: '+62 812-8899-4411',
  email: 'halo@kopirimba.id',
  address: 'Jl. Rimbawan Raya No. 42, Bintaro Sektor 7, Tangerang Selatan, Banten 15224',
  shortAddress: 'Bintaro Sektor 7, Tangsel',
  hoursWeekday: 'Senin – Jumat: 07.30 – 22.00 WIB',
  hoursWeekend: 'Sabtu – Minggu: 07.00 – 23.00 WIB',
  mapsUrl: 'https://maps.google.com/?q=Bintaro+Sektor+7+Tangerang+Selatan',
  shopeeUrl: 'https://shopee.co.id/chastincoffee',     // Ganti dengan link toko Shopee Anda
  instagramHandle: '@chastin_coffee',                      // Ganti dengan username Instagram Anda
  instagramUrl: 'https://instagram.com/chastin_coffee',    // Ganti dengan link profil Instagram Anda
};

export const MENU_PAGES = [
  { id: 'beranda', num: '01', label: 'Beranda' },
  { id: 'tentang', num: '02', label: 'Tentang Kami' },
  { id: 'proses', num: '03', label: 'Proses Pengolahan', badge: '5 Tahap' },
  { id: 'koleksi', num: '04', label: 'Katalog Produk' },
  { id: 'b2b', num: '05', label: 'Kemitraan B2B' },
  { id: 'lokasi', num: '06', label: 'Lokasi & Kontak' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Robusta',
    category: 'Single Origin',
    process: 'Natural Anaerobic',
    altitude: '1.650 mdpl',
    notes: 'Wild Berry, Dark Cacao, Brown Sugar',
    price: 'Rp 115.000',
    weight: '200 gr',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'House Blend',
    category: 'Single Origin',
    process: 'Full Washed',
    altitude: '1.700 mdpl',
    notes: 'Mandarin Orange, Jasmine, Caramel',
    price: 'Rp 108.000',
    weight: '200 gr',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Full Arabica',
    category: 'Single Origin',
    process: 'Yellow Honey',
    altitude: '1.500 mdpl',
    notes: 'Roasted Hazelnut, Milk Chocolate, Vanilla',
    price: 'Rp 105.000',
    weight: '200 gr',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=700&q=80',
  },
  
];

export const PROCESS_STEPS = [
  {
    step: 1,
    num: '01',
    pillTitle: '01. Panen Ceri Merah',
    tag: 'Tahap Pertama • Selective Harvesting',
    title: 'Panen Petik Merah',
    badge: 'Ketinggian 1.400 – 1.750 mdpl',
    description:
      'Petani mitra kami hanya memetik buah kopi (cherry) yang telah matang sempurna berwarna merah tua dengan kadar gula (Brix) optimal. Pemetikan selektif ini memastikan rasa manis alami dan bebas dari rasa sepat buah mentah.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 2,
    num: '02',
    pillTitle: '02. Fermentasi & Pasca-Panen',
    tag: 'Tahap Kedua • Post-Harvest Processing',
    title: 'Fermentasi & Pengolahan Pasca-Panen',
    badge: 'Washed • Honey • Anaerobic Natural',
    description:
      'Ceri kopi disortir melalui perambangan air, lalu diolah menggunakan metode Full Washed, Honey, maupun Natural Anaerobic dalam tangki tertutup selama 36–72 jam untuk membentuk kompleksitas aroma buah dan floral yang khas.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 3,
    num: '03',
    pillTitle: '03. Penjemuran Raised Bed',
    tag: 'Tahap Ketiga • Sun Drying',
    title: 'Penjemuran di Para-Para (Raised Bed)',
    badge: 'Kadar Air Ideal 11% – 12%',
    description:
      'Biji kopi dijemur di atas meja jaring berventilasi (African raised bed) selama 14–21 hari dan dibalik setiap dua jam. Sirkulasi udara merata mencegah jamur dan mengunci kadar air ideal di angka 11,5% sebelum tahap hulling dan sortasi tangan.',
    image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 4,
    num: '04',
    pillTitle: '04. Sangrai Presisi',
    tag: 'Tahap Keempat • Artisan Roasting',
    title: 'Penyangraian Presisi Digital',
    badge: 'Small-Batch Profiling',
    description:
      'Biji hijau (green beans) disangrai dalam small batch menggunakan mesin sangrai modern yang terhubung perangkat lunak pelacak kurva suhu. Setiap profil sangrai dirancang khusus untuk menonjolkan karamelisasi gula alami tanpa rasa gosong.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 5,
    num: '05',
    pillTitle: '05. Seduh & Cupping',
    tag: 'Tahap Kelima • Brewing & Cupping',
    title: 'Uji Cita Rasa & Penyeduhan',
    badge: 'Quality Control & Cupping 85+',
    description:
      'Setiap hasil sangrai melewati sesi cupping ketat oleh tim Q-Grader sebelum dikemas dalam kantong katup satu arah (one-way valve). Biji kopi siap diseduh dengan optimal di meja seduh Anda maupun di kedai kami.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
];