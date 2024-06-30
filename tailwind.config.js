/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E2E8F0',
        'secondary': '#94A3B8',
        'background': '#0F172A',
      },
      fontFamily: {
        'noto': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}