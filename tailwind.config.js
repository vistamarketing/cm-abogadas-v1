/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    dark: '#0f172a',
                    darker: '#332526', // Very Dark Brown/Black
                    secondary: '#593134', // Deep Brown/Burgundy
                    primary: '#881E27', // Corporate Burgundy
                    light: '#FEF2F2', // Red 50
                    accent: '#9F1239', // Rose 800
                }
            }
        },
    },
    plugins: [
        require("tailwindcss-animate")
    ],
}
