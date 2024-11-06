const typography = require('@tailwindcss/typography');

module.exports = {
    content: ['./hugo_stats.json'],
    plugins: [typography],
    theme: {
        extend: {
            gridTemplateColumns: {
                basic: "repeat(auto-fill, minmax(300px, 1fr))"
            },
            colors: {
                background: {
                    DEFAULT: "hsl(var(--background))",
                    transparent: {
                        sm: "hsl(var(--background)/ 90%)"
                    }
                },
                foregorund: "var(--foreground)",
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                blue1: "var(--blue1)",
                blue2: "var(--blue2)",
                gray1: "var(--gray1)",
                gray2: "var(--gray2)",
                red1: "var(--red1)",
                red2: "var(--red2)",
                green1: "var(--green1)",
                green2: "var(--green2)",
                yellow1: "var(--yellow1)",
                yellow2: "var(--yellow2)",
                purple1: "var(--purple1)",
                purple2: "var(--purple2)",
                aqua1: "var(--aqua1)",
                aqua2: "var(--aqua2)",
                orange1: "var(--orange1)",
                orange2: "var(--orange2)",
            },
            borderRadius: {
                angular: "0 100% 100% 0"
            }
        }
    }
};
