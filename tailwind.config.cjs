module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sand-gold': {
          50: '#FDF9F3',
          100: '#F5EDE1',
          200: '#E8DCC8',
          300: '#D4AF37',
          400: '#C9A961',
          DEFAULT: '#D4AF37',
          600: '#B8920A'
        },
        'dark-green': {
          50: '#F0F5F3',
          100: '#D9E9E3',
          300: '#1B4D3E',
          400: '#0F3D2E',
          DEFAULT: '#1B4D3E'
        },
        'black-stone': {
          50: '#F7F6F2',
          100: '#E8E7E3',
          DEFAULT: '#1A1A1A',
          600: '#2D2D2D'
        },
        'bronze': {
          100: '#F5F1EA',
          300: '#A0826D',
          400: '#8B6F47',
          DEFAULT: '#8B6F47'
        },
        'white-marble': {
          50: '#F5F3F0',
          DEFAULT: '#F5F3F0',
          100: '#FFFFFF'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
        'display-lg': ['48px', { lineHeight: '1.3', letterSpacing: '0.3px' }],
        'display-md': ['36px', { lineHeight: '1.4', letterSpacing: '0.2px' }],
        'body-lg': ['18px', { lineHeight: '1.5' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.5px' }]
      },
      spacing: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px'
      },
      width: {
        '15': '60px'
      },
      height: {
        '15': '60px'
      },
      maxWidth: {
        'container': '1440px'
      },
      borderRadius: {
        'minimal': '2px'
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0,0,0,0.15)',
        'luxury-hover': '0 30px 70px rgba(0,0,0,0.2)',
        'card': '0 4px 20px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
}
