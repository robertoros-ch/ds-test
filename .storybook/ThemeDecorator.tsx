import React, { useEffect } from "react";
import { useGlobals } from "@storybook/client-api";
import { lightTheme, darkTheme } from "../src/theme/system.css"; // adjust the import path as needed

export const ThemeDecorator = (Story) => {
  const [{ theme }] = useGlobals();
  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add(darkTheme);
      document.body.classList.remove(lightTheme);
    } else {
      document.body.classList.add(lightTheme);
      document.body.classList.remove(darkTheme);
    }
  }, [theme]);

  return (
    // <div className={selectedTheme}>
    <Story />
    // </div>
  );
};
