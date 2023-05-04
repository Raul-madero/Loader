/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.html.js"],
  theme: {
    extend: {
      animation: {
        loader: 'loader 2s linear forwards',
        scaling: 'scaling 2s ease infinite',
        scaling1: 'scaling1 2s ease infinite',
        scaling2: 'scaling2 2s ease infinite',
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
        }
      }
    },
  },
  plugins: [],
}

