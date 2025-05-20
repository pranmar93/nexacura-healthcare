/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#007bff',
        'dark-blue': '#2c3e50',
        'light-gray': '#f8f9fa',
        'gray-blue': '#f0f4f8',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.2)',
        md: '1px 1px 3px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        },
        '.text-shadow-md': {
          textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};