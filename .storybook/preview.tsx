import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "./ThemeDecorator";
import { ThemeSelector } from "./ThemeSelector";

import * as buttonCss from "../src/components/Button/Button.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    themes: {
      default: "light",
      list: [
        { name: "light", class: "light-theme", color: "#ffffff" },
        { name: "dark", class: "dark-theme", color: "#000000" },
      ],
    },
  },
  decorators: [ThemeDecorator],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export const decorators = [ThemeDecorator];
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export default preview;
