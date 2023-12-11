/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        light: "#EDF3F8",
        btn_primary: "#BA4270",
        btn_secondary: "#DA6D97",
        secondary: "#36536B",
        primary: "#1B262F",
      },
      fontFamily: {
        'dm': ['DM Serif Display', 'serif'],
        'ps': ['Public Sans', 'sans-serif']
      },
      boxShadow: {
        'custom': '10px 10px 25px -10px rgba(54, 83, 107, 0.4)',
      },
      
    },
  },
  plugins: [],
}

