/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#B8860B', // Accent
        secondary: '#2a2a2a', // Product cards
        background: '#FDF1F2', // Page background
        nav: '#f4f1ed', // Navbar
      },
    },
  },
  plugins: [],
};