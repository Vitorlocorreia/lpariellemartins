/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f4',
          100: '#e5ebe3',
          200: '#cad7c6',
          300: '#a7bda1',
          400: '#84a07d',
          500: '#6b7f62',
          600: '#5b7355',
          700: '#465642',
          800: '#394636',
          900: '#303b2e',
        },
        cream: {
          50: '#fcfbf8',
          100: '#fbf8f3',
          200: '#f7f2e8',
          300: '#efe6d5',
          400: '#e3d4bb',
        },
        brandText: '#2e3a2c',
        brandSubtext: '#5c665a',
      },
      fontFamily: {
        serif: ['Lora', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
