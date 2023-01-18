/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "black": "#161413",
                "white": "#eff9f0",
                "yellow": "#ffba08",
                "grey": "#857e7b",
                "orange": "#ec4e20"
            }
        },
    },
    plugins: [],
};
