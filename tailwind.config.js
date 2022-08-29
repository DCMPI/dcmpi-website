module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': {transform: 'rotate(0.0deg)'},
          '15%': {transform: 'rotate(14.0deg)'},
          '30%': {transform: 'rotate(-8.0deg)'},
          '40%': {transform: 'rotate(14.0deg)'},
          '50%': {transform: 'rotate(-4.0deg)'},
          '60%': {transform: 'rotate(10.0deg)'},
          '70%': {transform: 'rotate(0.0deg)'},
          '100%': {transform: 'rotate(0.0deg)'},
        },
        ani: {
          '75%, 100%': {
            transform: 'scale(1.5)',
          },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
        ani: 'ani 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'color-red': '#FF0000',
      'color-green': '#00b156',
      'color-text': '#595F6A',
      'color-lt-grey': '#9FA3A9',
      'color-black': '#000000',
      'color-white': '#FFFFFF',
      'color-bg': '#0067FF',
      'color-border': '#CFD5DC',
      'color-orange': '#DD6434',
      'color-blue': '#2D69F0',
    },
  },
  plugins: [],
};
