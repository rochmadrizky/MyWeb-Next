/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prefix : "Poppins, sans-serif",
        title : "Nunito, sans-serif",
        description : "Catamaran, sans-serif",
        opsi: "Mrs Saint Delafield"
      }
    },
  },
  plugins: [],
}

