/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'dyslexic': ['Open Sans', 'Verdana', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.8',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'h1, h2, h3, h4, h5, h6': {
              marginTop: '1.5em',
              marginBottom: '0.75em',
              fontWeight: '600',
              lineHeight: '1.3',
            },
            a: {
              textDecorationThickness: '1px',
              textUnderlineOffset: '0.15em',
            },
            'a:hover': {
              textDecorationThickness: '2px',
            },
            ul: {
              marginTop: '1em',
              marginBottom: '1.5em',
            },
            li: {
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        // Improved contrast ratios for text
        '.text-gray-600': { color: '#4b5563' }, // Darker than default for better contrast
        '.dark .text-gray-400': { color: '#9ca3af' }, // Lighter in dark mode
        
        // Focus styles for better keyboard navigation
        'a:focus, button:focus, input:focus, select:focus, textarea:focus': {
          outline: '3px solid #3b82f6',
          outlineOffset: '3px',
        },
      });
    },
  ],
}