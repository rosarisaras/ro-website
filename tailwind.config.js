/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{html,md,markdown,js}',
    './docs/_includes/**/*.html',
    './docs/_layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D4A574',
        'gold-light': '#E5B885',
        'charcoal': '#111111',
        'smoke': '#222222',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}