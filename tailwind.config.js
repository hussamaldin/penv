module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'anim-p': 'spin 10s linear infinite',
      },

      keyframes: {
               spin: {
                   '0%': { transform: 'translateX(0px)' },
                   '100%': { transform: 'translateX(-2000px)' },
                 }
                }
    },
  },
  plugins: [],
}
