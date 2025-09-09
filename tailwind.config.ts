import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Suisse Intl as primary font
        'suisse': ['Suisse Intl', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        
        // Override default sans-serif with Suisse Intl
        'sans': ['Suisse Intl', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        
        // Keep other fonts as alternatives
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
        
        // Serif and mono fonts
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],

        // Custom badlystuffedanimal font
        'badly-stuffed': ['Badly Stuffed Animal', 'cursive', 'fantasy', 'sans-serif'],
        'display': ['Badly Stuffed Animal', 'cursive', 'fantasy', 'sans-serif'], // Alternative name
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      }
    },
  },
  plugins: [],
}

export default config
