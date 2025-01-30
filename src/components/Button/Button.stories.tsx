import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "danger"] },
    size: { control: "radio", options: ["small", "medium", "large"] },
    children: { control: "text" },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Click Me",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Click Me",
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    size: "large",
    children: "Click Me",
  },
};
