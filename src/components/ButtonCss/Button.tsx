import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import styles from "./Button.module.scss";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
      danger: styles["button--danger"],
    },
    size: {
      small: styles["button--small"],
      medium: styles["button--medium"],
      large: styles["button--large"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
