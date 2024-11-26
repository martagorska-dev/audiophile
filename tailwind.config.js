/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbaf85",
          100: "#D87D4A",
        },
        background: {
          50: "#fafafa",
          100: "#f1f1f1",
          200: "#191919",
          300: "#101010",
        },
        gray: {
          50: "#c4c4c4",
          100: "#878787",
          200: "#7d7d7d",
        },
        error: {
          50: "#cd2c2c",
        },
      },
    },
  },
  plugins: [],
};
