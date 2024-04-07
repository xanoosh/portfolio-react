/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1f8adb',
        'custom-pink': '#ff4785',
      },
      backgroundImage: {
        pattern: "url('/src/img/pattern.svg')",
      },
      backgroundSize: {
        'pattern-size': '100%',
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};
