/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px"
    },
    extend: {
      colors: {
        "linkedIn": "#0077B5",
        "linkedIn-white": "#F5F5F5",
        "linkedIn-dark": "#004182",
        "linkedIn-secondary": "#0a66c2",
        "accent": "#8f5849"
      },
      screens: {
        md: "991px"
      },
      keyframes: {
        fadeIn: {
          'from': {transform: 'scale(0)'},
          'to': {transform: 'scale(1)'}
        },
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out',
      }
    },
  },
  plugins: [],
}

