import React from "react";
import { useGlobals, useParameter } from "@storybook/client-api";

export const ThemeSelector = () => {
  const [{ theme }, updateGlobals] = useGlobals();
  const { themes } = useParameter("themes", { themes: ["light", "dark"] });

  return (
    <select
      value={theme}
      onChange={(event) => {
        updateGlobals({
          theme: event.target.value,
        });
      }}
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
};
