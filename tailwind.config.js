import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
  extend: {
    animation: {
      typewriter: 'typewriter 2s steps(11) forwards',
      caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      slider: 'slider 40s infinite linear',
      sliderReverse: 'sliderReverse 60s infinite linear',
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
