/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 3',
      },
      flex: {"2": "2 2 0%"},
      opacity: ["disabled"],
      cursor: ["disabled"],
      maxWidth: {
        "8xl": "1920px"
      },
      backgroundImage: {
        'hero': "url('../badges/index.jpg')",
      },
      variants: {},
    },
  },
  plugins: [],
}
