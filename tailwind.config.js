/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFBFB',
        background: '#000000',
        secondary: '#FFAA05',
      },
    },
  },
  plugins: [],
};
