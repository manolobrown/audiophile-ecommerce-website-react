/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    container: {
      padding: "1.5rem",
      center: true,
    },
  },
  plugins: [],
};
