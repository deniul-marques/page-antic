/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/public/dist/assets/img/bg-cast.png')",
      'no-repeat': 'no-repeat',
    },
    backgroundSize: {
      '50': '50%',
      '70': '70%',
    },
    extend: {
      colors: {
        terracotta: '#A06056',
        varta: '#706458',
        bege: '#F3EEE8',
        marrom: '#534B42'
      },
      maxWidth: {
        '50': '50%',
        '60': '60%',
      },
      minHeight: {
        '20': '20rem',
      },
      width:{
        '50': '50%',
        '60': '60%',
      },
      inset: {
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '60%': '60%',
      },
      height: {
        'inherit': 'inherit',
        '34': '34rem'
      }
    },
  },
  plugins: [],
}
