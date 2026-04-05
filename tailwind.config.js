/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // IMPORTANT pour le toggle dark/light

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },

      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },

      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: '#ffffff',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
        },

        card: 'hsl(var(--card) / <alpha-value>)',

        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground))',
        },

        border: 'hsl(var(--border) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
      },

      boxShadow: {
        glow: '0 0 40px hsl(var(--primary) / 0.3)',
        soft: '0 8px 30px rgba(0,0,0,0.08)',
      },

      borderRadius: {
        xl: 'var(--radius)',
      },
    },
  },

  plugins: [],
}