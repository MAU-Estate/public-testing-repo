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
    spacing: {
      ...createSpacingUnits(25),
      a: 'var(--unit-a)',
      a2: 'var(--unit-a2)',
      a3: 'var(--unit-a3)',
      b: 'var(--unit-b)',
      c: 'var(--unit-c)',
      d: 'var(--unit-d)',
      d2: 'var(--unit-d2)',
      d3: 'var(--unit-d3)',
      e: 'var(--unit-e)',
      f: 'var(--unit-f)',
      g: 'var(--unit-g)',
      h: 'var(--unit-h)',
      i: 'var(--unit-i)',
      j: 'var(--unit-j)',
      k: 'var(--unit-k)',
      l: 'var(--unit-l)',
      m: 'var(--unit-m)',
      n: 'var(--unit-n)',
      o: 'var(--unit-o)',
      p: 'var(--unit-p)',
      q: 'var(--unit-q)',
      r: 'var(--unit-r)',
      s: 'var(--unit-s)',
      t: 'var(--unit-t)',
      u: 'var(--unit-u)',
      v: 'var(--unit-v)',
    },
    colors: {
      black: '#121212',
      'black-b': '#1F1F1F',
      'grey-a': '#878787',
      'grey-b': '#979797',
      'grey-c': '#B0B0B0',
      'grey-d': '#CDCDCD',
      'grey-e': '#DDDDDD',
      'bio-a': '#10262B',
      'bio-b': '#EDEDED',
      'bio-c': '#234988',
      white: '#FFFFFF',
    },
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
