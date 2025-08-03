import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Theme } from "../types/theme";
import { theme1 } from "../theme/theme1";
import { theme2 } from "../theme/theme2";
import { theme3 } from "../theme/theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themes = { theme1, theme2, theme3 };

export const ThemeContext = createContext<ThemeContextType>({
  theme: theme1,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(theme1);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setThemeState(themes[savedTheme as keyof typeof themes]);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    const themeKey = Object.keys(themes).find(
      (key) => themes[key as keyof typeof themes] === newTheme
    );
    if (themeKey) {
      localStorage.setItem("theme", themeKey);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
