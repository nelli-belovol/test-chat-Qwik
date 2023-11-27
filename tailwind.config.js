/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
    extend: {

      colors: {
        audioInputColor: '#4B3D6B',
        chatIncomingColor:'#BD9FFE',
        audioGraphicsColor: '#94A3B8',
        messageInputColor: '#171717',
        buttonOutlineWhite: '#FFFFFF',
        buttonOutlineTransparent: 'rgba(255, 255, 255, 0)',
        unityBackgroundBlack: '#000000',
        chatBackgroundGradientStart: '#000000',
        chatBackgroundGradientEnd: '#171717',
        inputAndSoundFieldBackground: '#404040',
      },
      borderWidth: {
        '1': '1px',
      },
      screens: {
        'sm': '480px', 
        'md': '768px', 
        'lg': '1024px', 
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      '14': '14px',
      '18': '18px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
    },
    lineHeight: {
      '130': '130%',
      '120': '120%',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
  },

  plugins: [],
};
