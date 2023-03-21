const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#282A37',
        'accent-color': '#5C5091',
      },
      fontFamily: {
        'sans': ['var(--font-nunito)'],
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-brand-colors"),
  ],
}
