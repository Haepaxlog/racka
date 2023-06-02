/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./dist/**/*.{html,js}",
    ],
    theme: {
      colors: {
        "night": "#0a100d",
        "ash-gray": "#b9baa3",
        "timberwolf": "#d6d5c9",
        "auburn": "#a22c29",
        "burnt-umber": "#902923"
      },
      extend: {
        backgroundImage: {
          "logo-icon": "url(../icons/racka_logo.png)"
        }
      },
    },
    plugins: [],
  }