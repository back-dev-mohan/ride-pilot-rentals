
import { createContext, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme exists in localStorage or use system preference
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        return storedTheme;
      }
      
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the previous theme class
    root.classList.remove("light", "dark");
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Store the current theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
