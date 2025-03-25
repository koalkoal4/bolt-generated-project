module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8'
        },
        slate: {
          50: '#f8fafc',
          800: '#1e293b'
        }
      }
    }
  },
  plugins: []
};
