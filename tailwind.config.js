/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'white': '#f9f9f9',
        'black': '#161616'
      },
      fontFamily: {
        'title': ['Martel Sans','sans-serif'],
        'paragraph': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

