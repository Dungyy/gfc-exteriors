/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gfc-black': '#1a1a1a',
        'gfc-gold': '#d4af37',
        'gfc-light-gold': '#e6c767',
        'gfc-dark-gray': '#333333',
        'gfc-light-gray': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 14px 0 rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
}