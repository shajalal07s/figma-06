/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'poppins',
        'Volkhov': 'volkhov'
      },
      width : {
        'primary': '1160px'
      }
    },
  },
  plugins: [],
}