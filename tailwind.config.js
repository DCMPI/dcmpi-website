module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
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
      'color-orange': '#FF8800',
      'color-orange-dark': '#DD6434',
      'color-blue': '#2D69F0',
      'color-dark-blue': '#031B4E',
    },
  },
  plugins: [],
};
