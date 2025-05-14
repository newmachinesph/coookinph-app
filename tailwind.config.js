/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'cream-can': {
          50: '#fef9ec',
          100: '#fcedc9',
          200: '#f9db8e',
          300: '#f6c358',
          400: '#f3aa2c',
          500: '#ed8913',
          600: '#d1650e',
          700: '#ae460f',
          800: '#8d3613',
          900: '#742d13',
          950: '#431605',
        },
        'roof-terracotta': {
          50: '#fff2f1',
          100: '#ffe2e1',
          200: '#ffcac8',
          300: '#ffa5a1',
          400: '#fe716b',
          500: '#f7443c',
          600: '#e4261e',
          700: '#c01c15',
          800: '#ac1d17',
          900: '#831d19',
          950: '#480a07',
        },
      },
    },
  },
  plugins: [],
};
