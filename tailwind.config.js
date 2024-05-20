/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05a0fa",
        secondary: "#f06414",
      },
      fontFamily: {
        futurano: ['"Futurano"', "sans-serif"],
        bidNoodleToo: ['"Big Noodle Too"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

