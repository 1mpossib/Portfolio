import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
