import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'bg-primary': '#050505',
                'bg-secondary': '#0a0a0a',
                'bg-tertiary': '#111111',
                'text-primary': '#ffffff',
                'text-secondary': '#a0a0a0',
                'accent-blue': '#00d9ff',
                'accent-cyan': '#00ffcc',
            },
            backgroundImage: {
                'gradient-lusion': 'linear-gradient(135deg, #00d9ff 0%, #00ffcc 100%)',
                'gradient-dark': 'linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 1) 100%)',
            },
            boxShadow: {
                'lusion': '0 20px 50px rgba(0, 0, 0, 0.5)',
                'lusion-hover': '0 30px 60px rgba(0, 0, 0, 0.8)',
                'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'float': 'float 5s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            spacing: {
                'huge': '12rem',
            }
        },
    },
}
