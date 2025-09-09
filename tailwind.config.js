/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors - Pure black with white accents
        'custom-bg': '#000000',
        'custom-accent': '#FFFFFF',
        'custom-accent-dark': '#E5E5E5',
        'custom-accent-light': '#F5F5F5',
        
        // Light theme colors - High contrast minimalistic
        'light-bg': '#FFFFFF',
        'light-accent': '#1a365d',
        'light-accent-dark': '#2c5282',
        'light-accent-light': '#3182ce',
        'light-text': '#1a202c',
        'light-text-secondary': '#4a5568',
      },
    },
  },
  plugins: [],
};