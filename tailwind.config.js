module.exports = {
  purge: [
    "./pages/**/*.js",
    "./src/pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      base: "1rem",
      lg: "3rem",
      xl: "4rem",
    },
    colors: {
      blue: {
        dark: "#3f3d56",
      },
      gray: {
        light: "#dfdede",
      },
      yellow: "#fecc01",
      white: "#fff",
    },
    fontSize: {
      base: "16px",
      lg: "20px",
      xl: "2.4rem",
      "2xl": "3rem",
      "3xl": "3.6rem",
      "4xl": "4.8rem",
      "5xl": "6rem",
    },
    fontFamily: {
      josefin: ["var(--font-josefin)", "sans-serif"],
    },
    fontWeight: {
      bold: 900,
    },
    opacity: {
      "gallery-hover": "0.3",
    },
    zIndex: {
      navbar: 20,
      overlay: 30,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
