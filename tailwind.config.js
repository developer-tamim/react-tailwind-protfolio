/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      // Desktop first
      xl:{max: "1440px"},
      lg:{max: "976px"},
      md:{max: "768px"},
      sm:{max: "480px"},
    },
  },
  plugins: [],
}

