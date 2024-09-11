/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // specify here your colors
        light: "#",
        green: "#",
        dark: "#",
        accent: "#"
      },
    },
  },
  plugins: [],
};