/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {      colors: {
        // Google Drive inspired primary colors (Google Blue)
        primary: {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#aecbfa',
          300: '#8ab4f8',
          400: '#669df6',
          500: '#4285f4', // Google Blue
          600: '#1a73e8',
          700: '#1557b0',
          800: '#0d47a1',
          900: '#063592',
          950: '#042880',
        },
        // Google Drive UI grays
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8eaed', // Google's light border
          300: '#dadce0', // Google's medium border
          400: '#bdc1c6', // Google's icon gray
          500: '#9aa0a6', // Google's secondary text
          600: '#80868b', // Google's disabled text
          700: '#5f6368', // Google's primary text
          800: '#3c4043', // Google's dark text
          900: '#202124', // Google's darkest text
          950: '#1a1a1a',
        },
        // Google success green
        success: {
          50: '#e6f4ea',
          100: '#ceead6',
          200: '#a8dab5',
          300: '#81c995',
          400: '#5bb974',
          500: '#34a853', // Google Green
          600: '#2d9334',
          700: '#137333',
          800: '#0d652d',
          900: '#0a5325',
          950: '#064420',
        },
        // Google warning yellow
        warning: {
          50: '#fef7e0',
          100: '#feefc3',
          200: '#fde047',
          300: '#facc15',
          400: '#eab308',
          500: '#fbbc04', // Google Yellow
          600: '#f9ab00',
          700: '#e37400',
          800: '#d56e0c',
          900: '#b45309',
          950: '#8b4513',
        },
        // Google error red
        error: {
          50: '#fce8e6',
          100: '#fad2cf',
          200: '#f6aea9',
          300: '#f28b82',
          400: '#ee675c',
          500: '#ea4335', // Google Red
          600: '#d33b2c',
          700: '#b52d20',
          800: '#a50e0e',
          900: '#8e0000',
          950: '#760000',
        },
        // Google Drive specific colors
        google: {
          blue: '#4285f4',
          green: '#34a853',
          yellow: '#fbbc04',
          red: '#ea4335',
        },
        // Background colors matching Google Drive
        background: {
          light: '#ffffff',
          dark: '#202124', // Google's dark theme background
          surface: {
            light: '#fafafa', // Google's surface color
            dark: '#303134', // Google's dark surface
          },
          paper: {
            light: '#ffffff',
            dark: '#292a2d', // Google's dark paper
          },
          sidebar: {
            light: '#fafafa',
            dark: '#202124',
          }
        },
        // Text colors matching Google's design
        text: {
          primary: {
            light: '#3c4043', // Google's primary text
            dark: '#e8eaed', // Google's dark primary text
          },
          secondary: {
            light: '#5f6368', // Google's secondary text
            dark: '#9aa0a6', // Google's dark secondary text
          },
          muted: {
            light: '#80868b', // Google's disabled text
            dark: '#bdc1c6', // Google's dark disabled text
          },
          inverse: {
            light: '#ffffff',
            dark: '#202124',
          }
        },
        // Border colors matching Google Drive
        border: {
          light: '#e8eaed', // Google's light border
          medium: '#dadce0', // Google's medium border
          dark: '#5f6368', // Google's dark border
          darkMode: '#5f6368', // Google's dark theme border
        },
        // Google Drive file type colors
        fileType: {
          docs: '#4285f4', // Google Docs blue
          sheets: '#34a853', // Google Sheets green
          slides: '#ff9900', // Google Slides orange
          pdf: '#ea4335', // PDF red
          image: '#9c27b0', // Image purple
          video: '#ff5722', // Video orange-red
          audio: '#607d8b', // Audio blue-gray
          archive: '#795548', // Archive brown
          folder: '#5f6368', // Folder gray
        }
      },      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'Arial', 'sans-serif'], // Google's font stack
        serif: ['Roboto Slab', 'serif'],
        mono: ['Roboto Mono', 'Consolas', 'monospace'],
        display: ['Google Sans Display', 'Google Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '16px' }], // Google's small text
        'sm': ['13px', { lineHeight: '20px' }], // Google's body small
        'base': ['14px', { lineHeight: '20px' }], // Google's body text
        'lg': ['16px', { lineHeight: '24px' }], // Google's body large
        'xl': ['18px', { lineHeight: '28px' }], // Google's subtitle
        '2xl': ['20px', { lineHeight: '28px' }], // Google's title
        '3xl': ['24px', { lineHeight: '32px' }], // Google's headline
        '4xl': ['28px', { lineHeight: '36px' }], // Google's display small
        '5xl': ['32px', { lineHeight: '40px' }], // Google's display medium
        '6xl': ['36px', { lineHeight: '44px' }], // Google's display large
      },      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Google Drive specific spacing
        'sidebar': '240px', // Google Drive sidebar width
        'toolbar': '64px', // Google Drive toolbar height
        'fab': '56px', // Floating action button size
      },
      borderRadius: {
        'none': '0',
        'sm': '4px', // Google's small radius
        'DEFAULT': '8px', // Google's default radius
        'md': '8px',
        'lg': '12px', // Google's large radius
        'xl': '16px',
        '2xl': '24px',
        'full': '50%', // For circular elements
        'google': '8px', // Google's standard border radius
      },
      boxShadow: {
        // Google Material Design elevation shadows
        'elevation-1': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        'elevation-2': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)',
        'elevation-3': '0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)',
        'elevation-4': '0 2px 3px 0 rgba(60, 64, 67, 0.3), 0 6px 10px 4px rgba(60, 64, 67, 0.15)',
        'elevation-5': '0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)',
        // Google Drive specific shadows
        'card': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        'dropdown': '0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)',
        'modal': '0 8px 10px 1px rgba(60, 64, 67, 0.14), 0 3px 14px 2px rgba(60, 64, 67, 0.12), 0 5px 5px -3px rgba(60, 64, 67, 0.2)',
        // Legacy support
        'soft': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        'medium': '0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)',
        'strong': '0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)',
        'glow': '0 0 20px rgba(66, 133, 244, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)', // Google's standard easing
        'slide-up': 'slideUp 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'ripple': 'ripple 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      // Google Material Design transitions
      transitionTimingFunction: {
        'google': 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Google's standard easing
        'google-enter': 'cubic-bezier(0.0, 0.0, 0.2, 1)', // Google's enter easing
        'google-exit': 'cubic-bezier(0.4, 0.0, 1, 1)', // Google's exit easing
      },
    },
  },
  plugins: [
    // Add any additional Tailwind plugins here
    // e.g., @tailwindcss/forms, @tailwindcss/typography, etc.
  ],
}
