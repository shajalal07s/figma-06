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
        'primary': '1160px',
        'secendary': '55%'
      },
      textColor: {
        'primary': '#5E6282'
      },
      fontSize : {
        'text-7.5xl': '84px',
        'text-4.5xl': '50px'
      },
      lineHeight : {
        
      },
      letterSpacing : {
        
      }
    },
  },
  plugins: [],
}