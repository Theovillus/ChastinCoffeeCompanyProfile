/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rimba: {
          900: '#132318',
          800: '#1B3022', // Forest Green Utama
          700: '#2C4A36', // Forest Green Aksen
          600: '#3D634A',
          100: '#E3EAE5',
        },
        cream: {
          50: '#FCFBF7',
          100: '#DDCD9B',//Cream Utama
          200: '#EFE9D8', // Warm Cream Sekunder
          300: '#E2D8BE',
        },
        terracotta: '#C86D44',
        gold: '#D4A359',
      },
      fontFamily: {
        // UBAH NAMA FONT DI SINI (sesuaikan dengan link di index.html)
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};