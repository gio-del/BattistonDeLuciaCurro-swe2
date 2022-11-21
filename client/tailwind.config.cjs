/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "dk-primary": "#00ABB3",
        "dk-secondary": "#3C4048",
        "tertiary": "#EAEAEA",
        "searchInput": "#B2B2B2"
      }
    },

  },
  darkMode: 'class',
  plugins: [],
}
