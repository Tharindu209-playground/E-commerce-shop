/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '1rem',
      DEFAULT: '10px',
      'md': '0.375rem',
      'lg': '2rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
}

