/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #8FFF9D 0%, #DBFF4B 100%)',
      'hero-pattern': "url('/thumbnail.svg')",
    },
    colors: {
      'custom-white': '#ECF6EF',
      'custom-yellow': '#DBFF4B'
    },
    container: {
      center: true,
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-gradient-green-yellow': {
          'border-image-source': 'linear-gradient(to right, #8FFF9D, #DBFF4B)',
          'border-image-slice': 1,
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

