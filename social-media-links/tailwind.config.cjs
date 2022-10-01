/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoMono: ["Roboto Mono", "monospace"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      colors: {
        darkPurple: "hsl(287, 61%, 29%)",
      },
      boxShadow: {
        "customBlack": "-9px 13px 19px -3px rgba(0,0,0,0.40)",
      },
    },
  },
  plugins: [],
};
