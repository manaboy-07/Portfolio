/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3730a3",

          secondary: "#e5e7eb",

          accent: "#818cf8",

          neutral: "#FFFFFF",

          "base-100": "#FFFF",

          info: "#3ABFF8",

          success: "#3A8F4D",

          warning: "#FBBD23",

          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
