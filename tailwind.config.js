/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#f7f8e2",
        "milk-pink": "#ffa0c1",
        "milk-dark-pink": "#b56d86",
        gray: "#484848",
      },
      fontFamily: {
        magnolia: ["Magnolia"],
      },
    },
  },
  plugins: [],
};

