/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        beba: ['Bebas Neue', 'sans-serif'],
        belanosima: ['Belanosima', 'sans-serif'],
        geologica: ['Geologica', 'sans-serif'],
        hamone: ['Hammersmith One', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        rem: ['REM', 'sans-serif'],
        lexend:['Lexend','sans-serif']
      }
    },
  },
  plugins: [],
}

