module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#FAFAFA",
        "custom-button": "#E6E6E6",
      },
    },
  },
  plugins: [require("daisyui")],
};
