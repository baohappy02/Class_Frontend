module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ultralight': ['SF-UI-Display-Ultralight'],
        'thin': ['SF-UI-Display-Thin'],
        'light': ['SF-UI-Display-Light'],
        'medium': ['SF-UI-Display-Medium'],
        'semibold': ['SF-UI-Display-Semibold'],
        'bold': ['SF-UI-Display-Bold'],
        'heavy': ['SF-UI-Display-Heavy'],
        'black': ['SF-UI-Display-Black']
      },
      colors: {
        "custom-text" : {
          black : "#363A45"
        },
        general : {
          primary : {
            d : "#FF7074"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}