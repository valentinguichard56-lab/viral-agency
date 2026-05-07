/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)'],
        dm: ['var(--font-dm-sans)'],
      },
      colors: {
        gold: '#d4a857',
        'gold-light': '#e8c47a',
      },
    },
  },
  plugins: [],
}
