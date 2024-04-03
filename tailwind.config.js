/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/img/pattern.svg')",
      },
      backgroundSize: {
        'pattern-size': '100%',
      },
    },
  },
  plugins: [],
};
