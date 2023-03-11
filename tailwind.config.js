/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ACDEAA',
        secondary: '#D6F8B8',
        three: '#8FBBAF',
        four: '#20C030',
        darkgrey: '#575957',
        lightgrey: '#6B7B8E',
        greys: '#EDEDED',
      },
    },
  },
  plugins: [],
}