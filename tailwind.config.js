/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-portfolio': "#010d1b",
        'blue-portfolio': "#002e64",
        'lightblue-portfolio':"#0075ff",
        'baby-blue':"#7cb8ff"
      },
      fontFamily: {
        'Poppins': 'Poppins, sans-serif'
      },
 
      fontSize: {
        '5.5xl':"54px",
        '3.5xl':'34px'
      },
      letterSpacing: {
        '4': "4px",
        '6': "6px"
      }
    },
  },
  plugins: [],
}