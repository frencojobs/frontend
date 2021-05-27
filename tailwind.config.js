const { emerald } = require('tailwindcss/colors')
const { theme: defaultTheme } = require('tailwindcss/defaultConfig')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald,
      },
      fontFamily: {
        sans: ['InterVariable'].concat(defaultTheme.fontFamily.sans),
        serif: [].concat(defaultTheme.fontFamily.serif),
        mono: [].concat(defaultTheme.fontFamily.mono),
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
