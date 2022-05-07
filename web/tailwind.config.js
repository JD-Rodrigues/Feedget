module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500:'#8257E5'
        },
        lightText: {
          500:'#FFFFFF'
        },
        darkTextPrimary: {
          500: '#F4F4F5'
        },
        darkSurfacePrimary:{
          500: '#18181B'
        },
        darkSurfaceSecondary: {
          500:'#27272A'
        },
        darkTextSecondary: {
          500: '#A1A1AA'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
