/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'palewhite': '#FCF9FD',
      'purplewhite': '#F8D6FE',
      'strainwhite': '#F8F8FA',
      'offwhite': '#FDFCFE',
      'purple': '#DE31FA',
      'midnight': '#140416',
      'darknight': '#150417',
      'indigo': '#2C0A32',
      'zinc': '#313032',
      'pale': '#F8D6FE',
      'yellow': '#E8D63A',
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
