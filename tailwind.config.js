module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          900: "#0d1624",
          "50_01": "#f8f9fa",
          "700_11": "#55555511",
        },
        blue_gray: {
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          900: "#262b35",
        },
        black: { 900: "#000000" },
        blue: { A700: "#0061ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { gilroy: "Gilroy" },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
