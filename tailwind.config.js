/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F6',
          100: '#FFEBEE',
          200: '#FDD3D9',
          300: '#FBABB7',
          400: '#F78393',
          500: '#EF5A6F',  // Main brand color
          600: '#D94560',
          700: '#B33350',
          800: '#8D2840',
          900: '#661D30',
        },
        secondary: {
          50: '#F8F9FB',
          100: '#EEF0F5',
          200: '#D5DAE5',
          300: '#9BA5C0',
          400: '#7684AA',
          500: '#536493',  // Main secondary color
          600: '#425077',
          700: '#353F61',
          800: '#282F4A',
          900: '#1B1F33',
        },
        warm: {
          50: '#FFFAF4',
          100: '#FFF1DB',  // Accent light
          200: '#FFE3B7',
          300: '#FFD593',
          400: '#FFC76F',
          500: '#FFB94B',
        },
        neutral: {
          50: '#F9F6F4',
          100: '#F0ECEA',
          200: '#E2DAD6',
          300: '#D4BDAC',  // Accent neutral
          400: '#B39C8B',
          500: '#927B6A',
        }
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['3.815rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-1': ['3.052rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['2.441rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['1.953rem', { lineHeight: '1.3' }],
        'heading-4': ['1.563rem', { lineHeight: '1.4' }],
        'body-large': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-small': ['0.875rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dotted-pattern': 'radial-gradient(circle, #00000010 1px, transparent 1px)',
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23F3F4F6' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'feature-card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
