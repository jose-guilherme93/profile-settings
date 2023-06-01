/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
            _100: '#38343D',
            _200: '#686071',
            _300: '#797085',
            _400: '#F4EFFA',
            _500: '#FDFCFE',
            
        },
        gradient: {
            _100: '#935FD3',
            _200: '#9245F1',
        },
        custom_red: '#AA2222',
        
    },
    fontFamily: {
      heebo: ["heebo", "sans-serif"]
      }
    },
  },
}