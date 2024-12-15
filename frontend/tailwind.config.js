// tailwind.config.js
const tailwindScrollbarHide = require("tailwind-scrollbar-hide");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbarHide,
  ],
}
