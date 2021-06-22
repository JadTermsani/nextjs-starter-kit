module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '2560px'
    },
    colors: {
      black: '#000000',
      white: '#ffffff'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
