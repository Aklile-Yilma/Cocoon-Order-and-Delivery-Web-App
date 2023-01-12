/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montez: ["'Montez', cursive"],
        Pacifico:[" 'Pacifico', cursive"]
      },
      colors: {
        transparent: "transparent",
        main: "#FA4A0C",
        bgMain: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

