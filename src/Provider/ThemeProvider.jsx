import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem("habit-tracker-theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    const updateTheme = () => {
      // 1. Temporarily disable all transitions to force an "instant" style update
      document.documentElement.classList.add("no-transitions");
      
      // 2. Apply theme attributes/classes
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      // 3. Save to localStorage
      localStorage.setItem("habit-tracker-theme", theme);

      // 4. Force a style recalculation (reflow) to apply the new theme instantly
      // without leaving time for CSS transitions to kick in
      void document.documentElement.offsetHeight;

      // 5. Re-enable transitions after a tiny delay to ensure the browser
      // has processed the theme change as a single "atomic" update
      setTimeout(() => {
        document.documentElement.classList.remove("no-transitions");
      }, 50);
    };

    // Use View Transitions API for ultra-smooth theme changes (if supported)
    if (document.startViewTransition) {
      document.startViewTransition(() => updateTheme());
    } else {
      updateTheme();
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  const value = {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
