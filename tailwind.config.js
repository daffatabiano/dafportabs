import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
  extend: {
    animation: {
      typewriter: 'typewriter 2s steps(11) forwards 5s',
      caret:
        'typewriter 2s steps(11) forwards 5s, blink 1s steps(11) infinite 2s',
      slider: 'slider 40s infinite linear',
      sliderReverse: 'sliderReverse 60s infinite linear',
      rotateOne: 'rotateOne 1s infinite linear',
      rotateTwo: 'rotateTwo 1s infinite linear',
      rotateThree: 'rotateThree 1s infinite linear',
      'scale-up-spin': 'scale-up-spin 0.5s ease-in-out',
      'spin-scale-down': 'spin-scale-down 0.5s ease-in-out',
      'scale-up-center': 'scale-up-center 0.5s ease-in-out',
    },
    keyframes: {
      slider: {
        from: {
          transform: 'translateX(0)',
        },
        to: {
          transform: 'translateX(-300%)',
        },
      },
      sliderReverse: {
        from: {
          transform: 'translateX(0%)',
        },
        to: {
          transform: 'translateX(300%)',
        },
      },
      typewriter: {
        to: {
          left: '100%',
        },
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
      rotateOne: {
        from: {
          transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)',
        },
        to: {
          transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)',
        },
      },
      rotateTwo: {
        from: {
          transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)',
        },
        to: {
          transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)',
        },
      },
      rotateThree: {
        from: {
          transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)',
        },
        to: {
          transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)',
        },
      },
      'scale-up-spin': {
        '0%': { transform: 'scale(0.5) rotate(0deg)' },
        '100%': { transform: 'scale(1) rotate(360deg)' },
      },
      'spin-scale-down': {
        '0%': { transform: 'scale(1) rotate(0deg)' },
        '100%': { transform: 'scale(0.5) rotate(360deg)' },
      },
      'scale-up-center': {
        '0%': { transform: 'scale(0.5)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    colors: {
      primary: '#050816',
      secondary: '#aaa6c3',
      tertiary: '#151030',
      'black-100': '#100d25',
      'black-200': '#090325',
      'white-100': '#f3f3f3',
    },
    boxShadow: {
      card: '0px 35px 120px -15px #211e35',
    },
    screens: {
      xs: '450px',
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];
