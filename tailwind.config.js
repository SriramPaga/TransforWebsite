/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '370px',
        ...defaultTheme.screens,
      },

      fontFamily: {
        transform: ['Transform'],
      },
      colors: {
        RoseWhite: '#f2edeb',
        darkTangerine: '#f2a516',
        lightBrown: '#a68358',
        CustomdarkCyan: '#486b73',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
