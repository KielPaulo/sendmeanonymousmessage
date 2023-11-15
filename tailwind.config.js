/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        blue: '#005bab' // Replace with your hex color value
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula']
  }
};
