/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-20": "#caf0f8",
        "blue-50": "#ade8f4",
        "blue-100": "#90e0ef",
        "blue-500": "#6366f1",
        "primary-100": "#00b4d8",
        "primary-300": "#0096c7",
        "primary-500": "#0077b6",
        "secondary-400": "#023e8a",
        "secondary-500": "#03045e",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },

  },
  plugins: [],
};

