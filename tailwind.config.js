module.exports = {
  theme: {
    screens: {
      sm: '30em',
    },
    extend: {
      colors: {
        inherit: 'inherit',
        gray: {
          100: '#f4f4f4',
          400: '#ccc',
        },
        green: {
          600: '#2b8a3e',
        },
      },
      outline: {
        current: '1px solid currentColor',
      },
    },
  },
  variants: {
    opacity: ['hover', 'focus'],
  },
};
