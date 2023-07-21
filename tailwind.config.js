/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(31, 42, 64)",
        secondary: "rgb(111, 135, 251)",
        surface: "rgb(20, 27, 45)",
        primary: "rgb(76, 206, 172)",
        "font-primary": "rgb(224, 224, 224)",
        "hover-shadow": "rgb(49, 59, 79)",
        "font-secondary": "rgb(224, 224, 214)",
        "font-tertiary": "rgb(143, 149, 160)",
      },
      fontFamily: {
        main: ["Source Sans 3", "sans-serif"],
      }
    },
  },
  plugins: [
  ],
}

