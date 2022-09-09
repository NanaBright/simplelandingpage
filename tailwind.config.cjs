/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#374A65'
      }
    },
   fontFamily:{
    sans: ["Poppins", 'sans-serif'],
   } 
  },
  plugins: [],
}
