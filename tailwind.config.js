module.exports = {
    purge: ["./index.html", "./src/**.*.{vue,js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        extend: {
            spacing: {
                "10%": "10%",
            }
        }
    },
    variants: {
        extend: {}
    },
}