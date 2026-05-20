/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f9f5',
          100: '#eef2ea',
          200: '#dce5d5',
          300: '#bfd2b4',
          400: '#9ab88a',
          500: '#769e64',
          600: '#5c824d',
          700: '#49683d',
          800: '#3c5434',
          900: '#33462d',
        },
        sand: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f4ede3',
          300: '#ebe0cf',
          400: '#deccb0',
          500: '#d1b892',
        },
        earth: {
          50: '#faf8f6',
          100: '#f3efeb',
          200: '#e8e0d8',
          700: '#6b5c4f',
          800: '#4a3f36',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
