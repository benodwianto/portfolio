const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/**.{html,js}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite', 
        'upDown': 'upDown 5s ease-in-out infinite',
        'upDown2': 'upDown2 7s ease-in-out infinite',
      },
      borderWidth: {
        20: '20px',
      },
      keyframes : {
        wiggle : {
          '0%, 80%' : {transform: 'rotate(-3deg)'},
          '50%' : {transform: 'rotate(3deg)'}
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' }, // Starting and ending at original position
          '50%': { transform: 'translateY(-20px)' },  // Move up by 20px at 50%
        },
        upDown2: {
          '0%, 100%': { transform: 'translateY(0)' }, // Posisi awal dan akhir tetap
          '50%': { transform: 'translateY(20px)' },   // Gerak ke bawah dulu (10px)
        },        
      }
    },
  },
  plugins: [Myclass],
} 

