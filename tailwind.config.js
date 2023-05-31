/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      boxShadow: {
        'cardShadow': '0 7px 29px 0px rgba(100, 100, 111, 0.2)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

