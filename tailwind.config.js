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
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
       lineHeight: {
        '4-5': '1.3125rem', /* 21px */
        '5-5': '1.350rem',  /* 21.45px */
       },
       spacing: {
        // screenS: '28.125rem',
        // screenM: '650px',
        // screenL: '740px',
       }
       
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}