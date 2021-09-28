module.exports = {
  purge: {
    enabled: false,
    content: [
      './public/**/*.html',
      './src/**/*.css',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
        ],
      },
      colors: {
        amacred: '#E51937',
        amacblue: '#004C91',
        amacsilver: '#9A9A9A',
        amacgold: '#9D9378'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
