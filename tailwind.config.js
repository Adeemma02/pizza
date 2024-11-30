/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all files in your src folder
  ],
  theme: {
    screens:{
      tablet: '450px',
      lap: '500px',
      laptop: '780px',
    },
    extend: {},
  },
  plugins: [],
};

