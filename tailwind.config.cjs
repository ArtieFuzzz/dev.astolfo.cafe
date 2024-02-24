/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,ts,js}'],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-headings': '#ff838d',
            '--tw-prose-links': 'white'
          }
        }
      }),
      keyframes: {
        lpoint: {
          '0%': {
            transform: 'translate(0rem, 0rem)'
          },
          '100%': {
            transform: 'translate(-1rem, 0)'
          }
        },
        rpoint: {
          '0%': {
            transform: 'translate(0rem, 0rem)'
          },
          '100%': {
            transform: 'translate(1rem, 0)'
          }
        }
      },
      animation: {
        lpoint: 'lpoint 0.65s ease-in-out both',
        rpoint: 'rpoint 0.65s ease-in-out both'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
