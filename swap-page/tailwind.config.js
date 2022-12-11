/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#DE31FA',
      'midnight': '#140416',
      'zinc': '#313032',
      'pale': '#F8D6FE',
      'yellow': '#EAD201',
      'gray': '#A59FA6',
      'ash': '#CEC6CF',
      'fairy': '#4A1053',
      'fuchsia': '#9747FF',
      'bubble': '#E976FC',
      'bunnie': '#FDFCFE',
    },
    extend: {
      backgroundImage: {
        uniswap_bg:
          "radial-gradient(50% 50% at 50% 50%, #fc077d10 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
