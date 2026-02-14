import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ── BRAND COLORS ──
      colors: {
        obsidian: {
          DEFAULT: '#09090b',
          50:  '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
        },
        gold: {
          DEFAULT: '#c8a44a',
          50:  '#fdf9ee',
          100: '#faf0d0',
          200: '#f4dfa0',
          300: '#ecc96a',
          400: '#e8c870',
          500: '#c8a44a',
          600: '#b08530',
          700: '#8a6424',
          800: '#6b4d1e',
          900: '#56401c',
        },
        charcoal: '#18181c',
        graphite: '#28282f',
        border:   '#333340',
        silver:   '#9090a0',
        mist:     '#d0d0d8',
        ivory:    '#f5f2eb',
      },

      // ── TYPOGRAPHY ──
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,5.5vw,5.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.2rem,4vw,3.8rem)',   { lineHeight: '1.1'  }],
        'display-md': ['clamp(1.6rem,2.5vw,2.4rem)', { lineHeight: '1.15' }],
        'eyebrow':    ['0.6rem',  { letterSpacing: '0.35em' }],
        'caption':    ['0.65rem', { letterSpacing: '0.2em'  }],
      },

      // ── SPACING ──
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },

      // ── ANIMATIONS ──
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':      { opacity: '0.5', transform: 'scale(1.4)' },
        },
        dot: {
          '0%, 60%, 100%': { transform: 'translateY(0)',   opacity: '0.4' },
          '30%':           { transform: 'translateY(-5px)', opacity: '1'   },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-dot': 'pulse 2s infinite',
        'dot-1':    'dot 1.2s infinite',
        'dot-2':    'dot 1.2s 0.2s infinite',
        'dot-3':    'dot 1.2s 0.4s infinite',
        'shimmer':  'shimmer 2s linear infinite',
      },

      // ── GRADIENTS ──
      backgroundImage: {
        'gold-gradient':    'linear-gradient(135deg, #c8a44a 0%, #e8c870 100%)',
        'gold-text':        'linear-gradient(135deg, #c8a44a 0%, #e8c870 50%, #c8a44a 100%)',
        'hero-overlay':     'linear-gradient(135deg, rgba(9,9,11,0.97) 0%, rgba(9,9,11,0.75) 50%, rgba(9,9,11,0.92) 100%)',
        'gold-glow':        'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,164,74,0.08) 0%, transparent 65%)',
      },

      // ── SHADOWS ──
      boxShadow: {
        'gold':     '0 12px 40px rgba(200,164,74,0.35)',
        'gold-lg':  '0 16px 60px rgba(200,164,74,0.4)',
        'card':     '0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,164,74,0.1)',
        'chat':     '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,164,74,0.1)',
      },

      // ── TRANSITIONS ──
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [typography],
};

export default config;
