/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open sans', 'sans-serif'],
      },
      colors: {
        neutral: '#f9fafb',
      },
      height: {
        '10/12': '83%',
        '88%': '88%',
      },
      maxHeight: {
        100: '28rem',
        '70vh': '70vh',
        '65vh': '65vh',
      },
    },
  },
  plugins: [],
};
