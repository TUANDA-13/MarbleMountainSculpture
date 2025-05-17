/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        base: '1rem',
        lg: '3rem',
        xl: '4rem',
      },
      colors: {
        bg: '#F1F1F1',
        blue: {
          dark: '#3f3d56',
        },
        primary: '#833731',
        brand: '#ff3366',
        gray: {
          light: '#dfdede',
          100: '#ECECEC',
          200: '#D7D7D7',
        },
        yellow: '#fecc01',
        white: '#fff',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          mid: '900px', // Added breakpoint between md and lg
          lg: '1024px',
          xl: '1228px',
          '2xl': '1228px',
        },
      },
      fontFamily: {
        josefin: ['var(--font-josefin)', 'sans-serif'],
      },
      // fontWeight: {
      //   thin: 100,
      //   'extra-light': 200,
      //   light: 300,
      //   normal: 400,
      //   medium: 500,
      //   semibold: 600,
      //   bold: 700,
      //   extrabold: 800,
      //   black: 900,
      // },
      opacity: {
        'gallery-hover': '0.3',
      },
      zIndex: {
        navbar: 20,
        overlay: 30,
      },
    },
  },
  plugins: [],
};
