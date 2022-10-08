/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
            "base-100": "#211720"
          }
        }
      ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}