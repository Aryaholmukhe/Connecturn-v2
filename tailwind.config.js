/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'orange-accent': '#DC6452',
      'pink-accent': '#DC52CA',
      'c-aqua': '#52DCA9',
      'c-purple': '#615EFD',
      'c-pink': '#DC4E7E',
      'c-white': '#EAEBEA',
      'c-black': '#030406'
    },
    extend: {
      fontFamily: {
        'primary': ['Ubuntu']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
