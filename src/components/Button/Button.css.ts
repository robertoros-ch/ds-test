import { recipe } from "@vanilla-extract/recipes";
import { systemThemeContract } from "../../theme/system.css";

export const buttonTokens = {
  color: {
    default: systemThemeContract.color.primary,
    secondary: systemThemeContract.color.secondary,
    danger: systemThemeContract.color.danger,
    text: systemThemeContract.color.text,
  },
  padding: {
    small: systemThemeContract.spacing.paddingSm,
    medium: systemThemeContract.spacing.paddingMd,
    large: systemThemeContract.spacing.paddingLg,
  },
  borderRadius: systemThemeContract.borderRadius.default,
  typography: {
    fontSize: systemThemeContract.typography.defaultFontSize,
    fontWeight: systemThemeContract.typography.defaultFontWeight,
  },
};

export const buttonVariants = recipe({
  base: {
    fontSize: systemThemeContract.typography.defaultFontSize,
    fontWeight: systemThemeContract.typography.defaultFontWeight,
    padding: systemThemeContract.spacing.paddingMd,
    borderRadius: systemThemeContract.borderRadius.default,
    cursor: "pointer",
    border: "none",
    transition: "background 0.2s ease, transform 0.1s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",

    selectors: {
      "&:focus": {
        outline: `2px solid ${systemThemeContract.color.primary}`,
        outlineOffset: "2px",
      },
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: systemThemeContract.color.primary,
        color: systemThemeContract.color.text,

        selectors: {
          "&:hover": {
            backgroundColor: "rgb(0, 102, 204)", // Darker blue
          },
          "&:active": {
            backgroundColor: "rgb(0, 90, 180)",
            transform: "scale(0.98)", // Press effect
          },
          "&:disabled": {
            backgroundColor: "rgb(0, 102, 204, 0.5)", // Muted version of primary
          },
        },
      },

      secondary: {
        backgroundColor: systemThemeContract.color.secondary,
        color: systemThemeContract.color.text,

        selectors: {
          "&:hover": {
            backgroundColor: "rgb(100, 100, 100)", // Darker gray
          },
          "&:active": {
            backgroundColor: "rgb(80, 80, 80)",
            transform: "scale(0.98)",
          },
          "&:disabled": {
            backgroundColor: "rgb(150, 150, 150)",
          },
        },
      },

      danger: {
        backgroundColor: systemThemeContract.color.danger,
        color: systemThemeContract.color.text,

        selectors: {
          "&:hover": {
            backgroundColor: "rgb(200, 50, 50)", // Darker red
          },
          "&:active": {
            backgroundColor: "rgb(180, 40, 40)",
            transform: "scale(0.98)",
          },
          "&:disabled": {
            backgroundColor: "rgb(200, 50, 50, 0.5)",
          },
        },
      },
    },

    size: {
      small: { padding: systemThemeContract.spacing.paddingSm },
      medium: { padding: systemThemeContract.spacing.paddingMd },
      large: { padding: systemThemeContract.spacing.paddingLg },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
