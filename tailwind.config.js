// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        mountbatten_pink: {
          DEFAULT: '#957186',
          100: '#1e161b',
          200: '#3c2c35',
          300: '#5a4250',
          400: '#78586b',
          500: '#957186',
          600: '#aa8c9e',
          700: '#bfa9b6',
          800: '#d5c6ce',
          900: '#eae2e7',
        },
        uranian_blue: {
          DEFAULT: '#bedcfe',
          100: '#012a57',
          200: '#0353af',
          300: '#0f7dfb',
          400: '#66acfd',
          500: '#bedcfe',
          600: '#cbe3fe',
          700: '#d8eafe',
          800: '#e5f1ff',
          900: '#f2f8ff',
        },
        cerulean: '#3c7a89',
        charcoal: '#2e4756',
        rich_black: '#071e22',
      },
    },
  },
  plugins: [],
};
