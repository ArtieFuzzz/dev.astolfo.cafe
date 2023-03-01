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
            '--tw-prose-links': 'white',
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
