import React, { ReactNode, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme/system.css";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = "light",
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a context so components can access the current theme
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined,
);
