/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E1B1B",
          50: "#5E6600",
          100: "#9CAA00",
          200: "#EBF0E4",
        },
        secondary: {
          50: "#000000",
          100: "#4D4D4D",
          200: "#B0B0B0",
          300: "#FFFFFF",
        },
        yellow: {
          50: "#FFC94B",
        },

        white: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
