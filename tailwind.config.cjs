module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "384px",
      },
      height: {
        "200":"50rem"
      },
      maxWidth: {
        "8xl": "1440px",
      },
      maxHeight: {
        "200": "50rem",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
      colors: {
        primary: "#F993CD",
        primary_light: "#FCEDF4",
        second: "#28384B",
      },
      padding: {
        3.5: "0.875rem",
      },
      spacing: {
        18: "4.5rem",
        42: "10.5rem",
        70: "17.5rem",
        100: "25rem",
        113: "28.25rem",
        120: "30rem",
        160: "40rem",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Roboto"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
  ],
};
