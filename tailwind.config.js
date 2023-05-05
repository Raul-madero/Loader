/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.html.js"],
  theme: {
    colors: {
      legoyellow: '#ffd602',
      legored: '#d5040a',
      legoblue: '#036cb6',
      white: '#fff',
      black: '#000',
      stone: '#d6d3d1'
    },
    fontFamily: {
      display: 'Lato, Arial, sans-serif'
    },
    extend: {
      animation: {
        loader: 'loader 2s linear forwards',
        scaling: 'scaling 2s ease infinite',
        scaling1: 'scaling1 2s ease infinite',
        scaling2: 'scaling2 2s ease infinite',
        navbar: 'navbar 2s 0.5s ease-in-out',
        maincontent: 'maincontent 2s 0.5s ease-in-out',
        super: 'super 0.5s 2s ease-in-out forwards',
        superman: 'superman 1.5s 1.5s ease-in-out forwards',
        footer: 'footer 1.5s 1.5 ease-in-out forwards',
      },
      keyframes: {
        loader: {
          '0%, 95%' : {
            opacity: 1,
            visibility: 'visible'
          },
          '100%' : {
            opacity: 0,
            visibility: 'hidden'
          }
        },
        scaling: {
          '0%, 100%': {
            transform: 'scale(0.2)'
          },
          '40%, 50%': {
            transform: 'scale(1)'
          }
        },
          scaling1: {
            '20%, 100%': {
              transform: 'scale(0.2)'
            },
            '50%, 60%': {
              transform: 'scale(1)'
            }
          },
        scaling2: {
          '40%, 100%': {
            transform: 'scale(0.2)'
          },
          '60%, 70%': {
            transform: 'scale(1)'
          }
        },
        navbar: {
          '0%': {
            transform: 'translateY(-200px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        maincontent: {
          '0%': {
            transform: 'translateY(-1000px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        super: {
          '0%' : {
            opacity: 0
          },
          '100%' :{
            opacity: 1
          }
        },
        superman: {
          '0%' : {
            transform: 'translateX(-1000px)'
          },
          '50%': {
            transform: 'translateX(150px)'
          },
          '100%': {
            transform: 'translateX(-50px)'
          }
        },
      }
    },
  },
  plugins: [],
}

