import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {

        extend: {
            colors: {

                primary: '#333333',       // Main content text color
                secondary: '#666666',     // Less emphasized text color
                accent: '#FD6F00',        // Highlighted or link text color
                muted: '#959595',         // Subtle or disabled text color
                light: '#DFDFDF',         // Text color for light content on dark backgrounds
                dark: '#000000',          // Text color for dark content on light backgrounds
                heading: '#2C3E50',       // Heading text color
                subheading: '#707070',    // Subheading text color
                body: '#959595',          // Body text color
                caption: '#7F8C8D',       // Caption or small text color
                link: '#959595',          // Link text color
                button: '#FFFFFF',        // Button text color
                placeholder: '#95A5A6',   // Placeholder text color
                error: '#E74C3C',         // Error message text color
                success: '#2ECC71',       // Success message text color
                warning: '#F39C12',       // Warning message text color
                info: '#3498DB',


            },
            backgroundImage: {
                'button-gradient': 'linear-gradient(90deg, #FD6F00 0%, #E46400 100%)',
                'heading-gradient': 'linear-gradient(90deg, #984300 0%,#FD6F00 46%, #CA5900 100%)',
            },
            backgroundColor:{
                'primary':'#1E1E1E',
                'secondary':'#575757',
                'sub-primary':'rgba(255, 255, 255, 0.04)'
            },
            transitionProperty: {
                'text': 'color',
            },
            transitionDuration: {
                '250': '250ms',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },

        },
    },
    plugins: [],
};
export default config;
