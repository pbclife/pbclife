const defaultTheme = require('tailwindcss/defaultTheme');
const svgToDataUri = require('mini-svg-data-uri');
// const colors = require('tailwindcss/colors');
const withOpacity =
  (variable) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}),${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          inverted: withOpacity('--color-accent-inverted'),
        },
        primary: {
          DEFAULT: withOpacity('--color-bg'),
          inverted: withOpacity('--color-bg-inverted'),
        },
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity('--color-bg'),
          inverted: withOpacity('--color-bg-inverted'),
          shine: withOpacity('--color-bg-shine'),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity('--color-border'),
        },
      },
      stroke: {
        skin: {
          base: withOpacity('--color-stroke'),
        },
      },
      screens: {
        xs: '375px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono],
      },
      height: {
        'screen-16': '16vh',
        'screen-33': '33vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
      minHeight: {
        16: '4rem',
        64: '16rem',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem,1fr))',
        'fill-64': 'repeat(auto-fill, minmax(16rem,1fr))',
        'fill-72': 'repeat(auto-fill, minmax(18rem,1fr))',
        'fill-76': 'repeat(auto-fill, minmax(19rem,1fr))',
        'fill-80': 'repeat(auto-fill, minmax(20rem,1fr))',
        'fill-96': 'repeat(auto-fill, minmax(24rem,1fr))',
      },
      keyframes: {
        pokeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'poke-left': 'pokeLeft 1s ease-in-out infinite alternate',
        'bg-shift': 'gradient 15s ease infinite alternate',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            hr: {
              marginTop: '3em',
              marginBottom: '3em',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: 0,
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              paddingBottom: '0.25rem',
              color: 'inherit',
            },
            'h1 a': {
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.4xl'),
            },
            'h2 a': {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.3xl'),
            },
            'h3 a': {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.xl'),
            },
            'h4 a': {
              fontWeight: theme('fontWeight.semibold'),
              fontSize: theme('fontSize.lg'),
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },

            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            blockquote: {
              padding: '0rem 1.25rem',
              borderRadius: theme('borderRadius.xl'),
              marginBottom: '1rem',
              borderWidth: '1px',
            },
            'li > blockquote': {
              marginLeft: '-1.75rem',
            },
            code: {
              fontVariantLigatures: 'none',
              fontWeight: theme('fontWeight.medium'),
              borderRadius: theme('borderRadius.md'),
              borderWidth: '1px',
              padding: '0.25rem 0.5rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              margin: '0px',
            },
            p: {
              fontSize: theme('fontSize.base'),
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre > code': {
              flex: 'none',
              minWidth: '100%',
              padding: '0rem 1rem',
              backgroundColor: 'transparent',
              fontSize: theme('fontSize.base'),
              fontWeight: theme('fontWeight.medium'),
              color: 'inherit',
            },
            strong: {
              fontWeight: theme('fontWeight.semibold'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
      matchUtilities(
        {
          'bg-square': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
      matchUtilities(
        {
          'bg-mouse': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
        <polygon
          fill="${value}"
          fill-rule="evenodd"
          points="8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4"
        />
      </svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
      matchUtilities(
        {
          'bg-dot': (value) => ({
            backgroundImage: `radial-gradient(${value} 2px, transparent 2px), radial-gradient(${value} 2px, transparent 2px)`,
            backgroundSize: `44px 44px`,
            backgroundPosition: `0 0, 22px 22px`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};
