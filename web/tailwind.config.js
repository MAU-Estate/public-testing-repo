// const defaultTheme = require('tailwindcss/defaultTheme')
// loop for creating spacing units
const createSpacingUnits = val => {
  const result = {}
  for (let i = 0; i <= val; i++) {
    result[`${i}`] = `calc(var(--unit) * ${i})`
  }
  return result
}

module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {},
      maxWidth: {
        'prose-50': '50ch',
      },
      height: {
        'screen-80': '80vh',
        'screen-50': '50vh',
      },
    },
    screens: {
      'xs-only': { max: '550px' },
      sm: '551px',
      'sm-only': { max: '767px' },
      md: '768px',
      'md-max': { max: '999px' },
      'md-only': { min: '768', max: '999px' },
      lg: '1000px',
    },
    spacing: createSpacingUnits(25),
    colors: {},
    fontSize: {},
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    fontWeight: false,
    container: false,
  },
}
