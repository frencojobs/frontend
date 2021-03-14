const colors = require('tailwindcss/colors')
const {
  theme: { fontFamily },
} = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Prodigy Sans'].concat(fontFamily.sans),
        serif: ['Newsreader'].concat(fontFamily.serif),
        mono: ['Source Code Pro'].concat(fontFamily.mono),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
