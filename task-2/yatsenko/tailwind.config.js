/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "tw":"1200px",
      "nine":"900px",
      "five":"500px",
    },
    extend: {},
  },
  plugins: [],
}

