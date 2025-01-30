import { buttonVariants } from "./Button.css";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

type ButtonProps = AriaButtonProps & {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <AriaButton
      {...props}
      className={`${buttonVariants({ variant, size })} ${className ?? ""}`}
    >
      {props.children}
    </AriaButton>
  );
};
