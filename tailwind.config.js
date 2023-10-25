const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    colors: {
      primary: {
        50: "#faf5ff",
        100: "#e9d8fd",
        200: "#d6bcfa",
        300: "#b794f4",
        400: "#9f7aea",
        500: "#805ad5",
        600: "#6b46c1",
        700: "#553c9a",
        800: "#44337a",
        900: "#322659",
      },
      purple: {
        500: "#805ad5",
      },
    },
    extend: {},
  },
  plugins: [],
});
