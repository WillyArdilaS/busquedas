/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'lightBlue': '#185d80',
        'darkBlue': '#062C3F',
        'white': '#f9f9f9',
        'black': '#161616'
      },
      fontFamily: {
        'title': ['Martel Sans','sans-serif'],
        'paragraph': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

