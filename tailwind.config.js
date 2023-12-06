module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
        "shrink-in": {
          from: { transform: "scale(1.25)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "dialog-backdrop-show":
          "fade-in 1500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "dialog-content-show":
          "shrink-in 325ms cubic-bezier(0.075, 0.82, 0.165, 1) 30ms, fade-in 300ms ease 30ms forwards",
      },
    },
  },
  plugins: [],
};
