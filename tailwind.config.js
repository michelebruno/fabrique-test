module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        extend: {
            colors: {
               green: 'rgb(117,251,225)',
                blue : 'rgb(2,4,70)'
            },
            fontFamily: {
                sans: ['Avros Tros Midnight', 'sans-serif']
            },
            transitionDuration: {
                DEFAULT: '500ms'
            }
        },
    },
    plugins: [],
}