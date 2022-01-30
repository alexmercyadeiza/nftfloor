module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Ubuntu'],
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],

  daisyui: {
    themes: false,
  }
}
