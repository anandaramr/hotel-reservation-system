/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": [ "Poppins", 'sans-serif' ],
        "sora": [ "Sora", "sans-serif" ],
        "monte-carlo": ["MonteCarlo", "sans-serif"],
        "teko": ["Teko", "sans-serif"],
        "amsterdam": ["New Amsterdam", "sans-serif;"]
      },
    },
  },
  plugins: [],
}