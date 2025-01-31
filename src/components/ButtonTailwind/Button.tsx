import React from "react";
import { Button as AriaButton } from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-primary",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-opacity-90 active:bg-opacity-80 ",
        secondary:
          "bg-secondary text-white hover:bg-opacity-90 active:bg-opacity-80",
        danger: "bg-danger text-white hover:bg-opacity-90 active:bg-opacity-80",
      },
      size: {
        small: "px-xs py-xs text-sm",
        medium: "px-md py-md text-base",
        large: "px-md py-md text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ComponentProps<typeof AriaButton>;

export const Button = ({ variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton className={buttonVariants({ variant, size })} {...props} />
  );
};
