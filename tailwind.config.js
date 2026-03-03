/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#f5f5f7',
          surface: '#ffffff',
          text: '#1d1d1f',
          secondary: '#6e6e73',
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          border: '#d2d2d7',
          'border-light': '#f5f5f7',
          green: '#34c759',
          red: '#ff3b30',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.14)',
        'panel': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
