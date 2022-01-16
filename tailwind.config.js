module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@themesberg/flowbite/plugin'),
  ],
};
