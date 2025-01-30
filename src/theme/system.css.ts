import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { referenceTokens } from "./tokens.css";

export const systemThemeContract = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    danger: null,
    text: null,
    background: null,
  },
  spacing: {
    paddingSm: referenceTokens.spacing.sm,
    paddingMd: referenceTokens.spacing.md,
    paddingLg: referenceTokens.spacing.lg,
  },
  borderRadius: {
    default: referenceTokens.borderRadius.md,
  },
  typography: {
    defaultFontSize: referenceTokens.typography.fontSizeMd,
    defaultFontWeight: referenceTokens.typography.fontWeightBold,
  },
});

// Light Mode Theme
export const lightTheme = createTheme(systemThemeContract, {
  color: {
    primary: referenceTokens.color.blue,
    secondary: referenceTokens.color.gray,
    danger: referenceTokens.color.red,
    text: referenceTokens.color.black,
    background: referenceTokens.color.white,
  },
  spacing: {
    paddingSm: referenceTokens.spacing.sm,
    paddingMd: referenceTokens.spacing.md,
    paddingLg: referenceTokens.spacing.lg,
  },
  borderRadius: {
    default: referenceTokens.borderRadius.md,
  },
  typography: {
    defaultFontSize: referenceTokens.typography.fontSizeMd,
    defaultFontWeight: referenceTokens.typography.fontWeightBold,
  },
});

// Dark Mode Theme
export const darkTheme = createTheme(systemThemeContract, {
  color: {
    primary: "#1E90FF", // Lighter blue
    secondary: "#A9A9A9", // Dark gray
    danger: "#FF6347", // Softer red
    text: referenceTokens.color.white,
    background: "#121212", // Dark background
  },
  spacing: {
    paddingSm: referenceTokens.spacing.sm,
    paddingMd: referenceTokens.spacing.md,
    paddingLg: referenceTokens.spacing.lg,
  },
  borderRadius: {
    default: referenceTokens.borderRadius.md,
  },
  typography: {
    defaultFontSize: referenceTokens.typography.fontSizeMd,
    defaultFontWeight: referenceTokens.typography.fontWeightBold,
  },
});
