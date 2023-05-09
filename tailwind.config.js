/** @type {import('tailwindcss').Config} */

const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Abril:"Monoton",
      fatFace:"fatFace",
      Poppins:"Poppins",

    },
  },
  plugins: [
  ],
}

