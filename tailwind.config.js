/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#f8fafc',
        surface: '#ffffff',
        text: '#0f172a',
        muted: '#475569',
        border: '#e2e8f0',
        accent: {
          DEFAULT: '#2563eb',
          foreground: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['SFMono-Regular', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
