import { createGlobalTheme } from "@vanilla-extract/css";

export const referenceTokens = createGlobalTheme(":root", {
  color: {
    blue: "#007bff",
    gray: "#6c757d",
    red: "#dc3545",
    white: "#ffffff",
    black: "#000000",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  typography: {
    fontSizeSm: "14px",
    fontSizeMd: "16px",
    fontSizeLg: "18px",
    fontWeightBold: "bold",
  },
  borderRadius: {
    sm: "4px",
    md: "6px",
    lg: "8px",
  },
});
