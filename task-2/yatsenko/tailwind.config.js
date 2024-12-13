/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "nine":"900px",
      "five":"500px",
    },
    extend: {},
  },
  plugins: [],
}

