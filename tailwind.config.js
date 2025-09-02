/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          purple: "#8A2BE2",
          graphite: "#0F1115",
          gold: "#D4AF37",
        }
      }
    },
  },
  plugins: [],
}
