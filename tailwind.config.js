const { theme: defaultTheme } = require('tailwindcss/defaultConfig')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'].concat(defaultTheme.fontFamily.sans),
        serif: [].concat(defaultTheme.fontFamily.serif),
        mono: [].concat(defaultTheme.fontFamily.mono),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
