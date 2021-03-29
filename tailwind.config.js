const { theme: defaultTheme } = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [].concat(defaultTheme.fontFamily.sans),
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
