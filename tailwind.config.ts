import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'bg-primary': '#020202',      // Deeper black
                'bg-secondary': '#080808',    // Very dark grey
                'bg-tertiary': '#0f0f0f',     // Subtle dark grey
                'text-primary': '#f0f0f0',    // Off-white for better readability
                'text-secondary': '#a1a1aa',  // Muted grey-blue
                'accent-primary': '#6366f1',  // Indigo
                'accent-secondary': '#22d3ee', // Cyan
                'accent-tertiary': '#d946ef',  // Fuchsia
            },
            backgroundImage: {
                'gradient-premium': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #d946ef 100%)',
                'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(217, 70, 239, 0.15) 0, transparent 50%)',
                'gradient-dark': 'linear-gradient(180deg, rgba(2, 2, 2, 0) 0%, rgba(2, 2, 2, 1) 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            },
            boxShadow: {
                'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                'premium-hover': '0 35px 60px -15px rgba(0, 0, 0, 0.7)',
                'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.4)',
                'glass-premium': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
            },
            borderWidth: {
                '0.5': '0.5px',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.2)' },
                    'to': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.5), 0 0 50px rgba(99, 102, 241, 0.3)' },
                }
            },
            spacing: {
                'huge': '16rem',
                'giant': '20rem',
            }
        },
    },
}
