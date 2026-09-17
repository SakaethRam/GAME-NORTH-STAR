import tailwindAnimate from 'tailwindcss-animate';

export default {
    content: [
        './index.html',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './node_modules/streamdown/dist/**/*.js'
    ],
    prefix: '',
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                'comic-olive': '#4B5320',
                'comic-offwhite': '#F5F5DC',
                'comic-dark': '#111111',
                'comic-accent': '#00E5FF',
            },
            fontFamily: {
                'comic': ['"Comic Sans MS"', '"Bangers"', 'Impact', 'sans-serif'],
            }
        }
    },
    plugins: [tailwindAnimate]
};
