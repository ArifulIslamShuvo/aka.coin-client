/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1F33D8",
          secondary: "#0E133A",
          accent: "#FFCD37",
          neutral: "#0E133A",
          para: "#5B5D6D",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
};