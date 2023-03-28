/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-dark-blue":"#001D45",
        "main-light-blue":"#0756C5",
        "main-light-textcolor":"#8B8BA5",
        "form-input-bg-color":"#C4C4C4"
      }
    },
  },
  plugins: [],
}
