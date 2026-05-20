/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f2',
          100: '#e4ebe0',
          200: '#c9d7c1',
          300: '#a4bc97',
          400: '#7d9e6c',
          500: '#5f8350',
          600: '#4a683e',
          700: '#3b5333',
          800: '#32442c',
          900: '#2a3926',
        },
        warm: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f4dbbf',
          300: '#ecc295',
          400: '#e2a268',
          500: '#da8847',
          600: '#cc713c',
          700: '#aa5933',
          800: '#88482f',
          900: '#6e3c29',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
