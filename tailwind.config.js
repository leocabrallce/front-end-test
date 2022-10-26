/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#685DC5",
        secondary: {
          50: "#FBFBFB",
          200: "#DADADA",
          400: "#6A6A6A",
          800: "#535353",
        },
      }
    },
  },
  plugins: [],
}
