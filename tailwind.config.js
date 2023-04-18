/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'table': 'repeat(3, 307px) 49px 70px',
      },
      colors: {
        inputBorderDefaultColor: '#E2E8F0',
        inputBorderActiveColor: '#BAE6FD',
        grey1: '#94A3B8',
        iconBackground: '#F1F5F9',
      },
    },
    spacing: {
      '0.5': '4px',
      '1': '8px',
      '1.5': '10px',
      '2': '12px',
      '3': '16px',
      '3.5': '20px',
      '4': '24px',
      '5': '32px',
      '5.5': '40px',
      '6': '48px',
    },
    borderSpacing: {
      '1': '12px',
      '2': '24px',
    },
  },
  plugins: [],
};
