/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nikhil :
        {
          50: '#fdfce0',
          100: '#f5f3b9',
          200: '#eeeb90',
          300: '#e7e265',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#9a9618',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },

        navcolor:
        {
          
          50: '#e4f5ff',
          100: '#bdddf4',
          200: '#2B3148',
          300: '#6bafe2',
          400: '#4698da',
          500: '#307fc1',
          600: '#246296',
          700: '#18466c',
          800: '#1f2533',
          900: '#333545',
        }
      }
    },
  },
  plugins: [],
}

