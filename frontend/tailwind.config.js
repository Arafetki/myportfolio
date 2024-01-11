/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",],
  theme: {
    extend: {
      fontFamily: {
        rubik:["Rubik","sans-serif"],
        roboto:["Roboto","sans-serif"],
        ubuntu:["Ubuntu","sans-serif"],
      },
    },
  },
  plugins: [],
}

