/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      default: ["ProximaNova", "arial", "Helvetica Neue", "sans-serif"],
      cuisine: ["Basis Grotesque Pro", "Arial", "sans-serif"],
      discount: ["Basis Grotesque Pro", "Arial", "sans-serif"],
      icomoon: ["icomoon", "sans-serif"],
      rating: [
        "ProximaNovaCondensedRegular",
        "arial",
        "Helvetica Neue",
        "sans-serif",
      ],
      offers: [
        "ProximaNovaCondensedBold",
        "arial",
        "Helvetica Neue",
        "sans-serif"
      ],
    },
    extend: {},
  },
  plugins: [],
};
