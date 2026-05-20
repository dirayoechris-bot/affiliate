/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#faf8f5',
        parchment: '#f3efe9',
        driftwood: '#e8e2da',
        stone: '#9c9488',
        bark: '#6b6259',
        ink: '#2c2825',
        sage: {
          DEFAULT: '#6b8f5e',
          light: '#e8f0e4',
          deep: '#4a6b3f',
        },
        terracotta: '#c4785a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      maxWidth: {
        prose: '640px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
