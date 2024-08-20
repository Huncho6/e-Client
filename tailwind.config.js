// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your project's structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fffff", // or replace with your primary color
        },
        secondary: {
          DEFAULT: "Black", // or replace with your secondary color
        },
        tertiary: {
          DEFAULT: "#fffff", // or replace with your tertiary color
        },
      },
    },
  },
  plugins: [],
};
