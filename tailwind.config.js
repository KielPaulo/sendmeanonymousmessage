/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        blue: '#005bab',
        blue2: '#00529a' // Replace with your hex color value
      },
      colors: {
        accent: '#00529a'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'coffee', 'dracula', 'luxury']
  }
};
