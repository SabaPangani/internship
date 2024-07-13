/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "light-purple": "#EFEBFF",
        dark: "#333333",
        gray: "#737373",
        "light-gray": "#D9D9D9",
        "dark-white": "#FAFAFA",
        red: "#FF3939",
      },
    },
    screens: {
      xs: {max: "350px"},
      sm: { max: "640px" },

      custom: { max: "860px" },

      md: { max: "768px" },

      lg: { max: "1024px" },

      xl: { max: "1280px" },

      "2xl": { max: "1536px" },
    },
  },
  plugins: [],
};
