module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8'
        },
        slate: {
          50: '#f8fafc',
          800: '#1e293b',
          900: '#0f172a'
         },
        'trainedtails-orange': '#FE9D00', // Updated orange color
        'trainedtails-blue-light': '#A4C5E4', // Updated light blue for the pet care section
        'trainedtails-blue-dark': '#1A365D', // Dark blue for the video section
        'trainedtails-dark-footer': '#E2E2E2', // Updated color for the footer
        'trainedtails-blue-form': '#C3ECFF', // New bluish color for the form box
        'trainedtails-blue-links': '#4A90E2' // New color for footer links and copyright text
      }
    }
  },
  plugins: []
};
