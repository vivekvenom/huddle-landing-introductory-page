/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(var(--voilet))",
        magenta: "hsl(var(--magenta))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      maxWidth:{
        '1/2': '1440px'
      }
    },
  },
  plugins: [],
};
