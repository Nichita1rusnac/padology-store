import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      display: ['Noto Serif Japanese', 'roboto'],
      body: ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      fontSize: {
        // Fluid typography: scales from min → max across viewports
        'xs-fluid': ['clamp(0.75rem, 1.5vw, 0.8125rem)', { lineHeight: '1.4' }],
        'sm-fluid': ['clamp(0.8125rem, 2vw, 0.875rem)', { lineHeight: '1.5' }],
        'base-fluid': ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'lg-fluid': ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.6' }],
        'xl-fluid': ['clamp(1.25rem, 4vw, 1.5rem)', { lineHeight: '1.5' }],
        '2xl-fluid': ['clamp(1.5rem, 5vw, 1.75rem)', { lineHeight: '1.4' }],
        '3xl-fluid': ['clamp(1.75rem, 6vw, 2.25rem)', { lineHeight: '1.3' }],
        '4xl-fluid': ['clamp(2.25rem, 7vw, 3rem)', { lineHeight: '1.2' }],

        // Marketing/Display scales
        'display-sm': ['clamp(1.5rem, 5vw, 2rem)', { lineHeight: '1.2' }],
        'display-md': ['clamp(2rem, 6vw, 2.5rem)', { lineHeight: '1.2' }],
        'display-lg': ['clamp(2.5rem, 8vw, 3.5rem)', { lineHeight: '1.1' }],

        // Accessibility-First Sizing Scale
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'small': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],

        // Headings with semantic weights
        'h6': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'h5': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h1': ['1.75rem', { lineHeight: '1.25', fontWeight: '700' }],

        // Labels & UI
        'label': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'button': ['0.875rem', { lineHeight: '1.5', fontWeight: '600' }],

        // Platform-inspired presets
        'ios-body': ['16px', { lineHeight: '1.6' }],
        'ios-headline': ['17px', { lineHeight: '1.2', fontWeight: '600' }],
        'ios-title': ['28px', { lineHeight: '1.15', fontWeight: '700' }],
        'material-body': ['14px', { lineHeight: '1.5' }],
        'material-label-small': ['11px', { lineHeight: '1.4' }],
        'material-headline-small': ['20px', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'instagram': 'var(--instagram)',
      },
      colors: {
        nav: {
          DEFAULT: 'hsl(var(--nav-background))',
          foreground: 'hsl(var(--nav-foreground))',
        },
        'hero-accent': 'hsl(var(--hero-accent))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    // Implementation of the proposed custom plugins
    function({ addVariant, addUtilities, theme }) {
      // Dynamic Type / Responsive Text Variants
      addVariant('supports-large-text', '@supports (font-size: clamp(1px, 1vw, 2px))');
      
      // Contrast & Readability Utilities
      // These map to standard high-contrast accessible colors
      addUtilities({
        '.text-contrast-high': {
          color: theme('colors.foreground'),
          filter: 'contrast(1.2)',
        },
        '.text-contrast-normal': {
          color: theme('colors.foreground'),
          opacity: '0.9',
        },
        '.text-contrast-low': {
          color: theme('colors.muted.foreground'),
        },
      });
    },
  ],
} satisfies Config;

