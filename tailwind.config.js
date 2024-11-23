/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3490dc',
          light: '#3da5f5',
          dark: '#2779bd',
        },
        secondary: {
          DEFAULT: '#ffed4a',
          light: '#fff382',
          dark: '#f3da1e',
        },
        neutral: {
          DEFAULT: '#6c757d',
          light: '#adb5bd',
          dark: '#495057',
        },
      },
    },
  },
  plugins: [],
};