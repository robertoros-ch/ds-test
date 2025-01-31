export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--sys-color-primary)",
        secondary: "var(--sys-color-secondary)",
        danger: "var(--sys-color-danger)",
        text: "var(--sys-color-text)",
        background: "var(--sys-color-background)",
      },
      spacing: {
        sm: "var(--sys-spacing-paddingSm)",
        md: "var(--sys-spacing-paddingMd)",
        lg: "var(--sys-spacing-paddingLg)",
      },
      borderRadius: {
        default: "var(--sys-borderRadius-default)",
      },
      fontSize: {
        base: "var(--sys-typography-defaultFontSize)",
      },
      fontWeight: {
        bold: "var(--sys-typography-defaultFontWeight)",
      },
    },
  },
  plugins: [],
};
