/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,jsx,tsx}"],
  theme: {
    extend: {
     keyframes: {
      fadeIn: {
        '0%': { opacity: '0'},
        '100%': {opacity: '1'}
      },
      fadeOut: {
        '0%': { opacity: '1'},
        '100%': {opacity: '0'}
      },
   
     },
     animation: {
      fadeIn: 'fadeIn 300ms ease-in forwards',
      fadeOut: 'fadeOut 300ms ease-in forwards',

    }
    },
  
  },
  plugins: [],
}
