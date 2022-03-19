const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind component
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      teal: colors.teal,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}