/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Times Roman'],
      },
    },
  },
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: -2 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slideIn 2s ease-out backwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-4': {
          backdropFilter: 'blur(6px)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}

