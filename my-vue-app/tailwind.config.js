/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",   // scan semua file Vue & JS
  ],
  theme: {
    extend: {}, // di sini nanti bisa custom warna, font, dsb
  },
  plugins: [],
}
