/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#025e73",
        "my-yellow": "#f2a516",
        "my-bg": "#D9D9D9",
        "my-white": "#F2F2F2",
        "my-text": "#011F26",
      },
    },
  },
  plugins: [],
};
