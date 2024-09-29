/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './views/**/*.ejs',
    './src/**/*.{html,js, css}',
    './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'pridi': ['"Pridi"', 'serif'],
        'kanit': ['"Kanit"', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
      fontWeight: {
        'kanit-thin': '100',
        'kanit-extralight': '200',
        'kanit-light': '300',
        'kanit-regular': '400',
        'kanit-medium': '500',
        'kanit-semibold': '600',
        'kanit-bold': '700',
        'kanit-extrabold': '800',
        'kanit-black': '900',
      }
    },
  },
  plugins: [],
}