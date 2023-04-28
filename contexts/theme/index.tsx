import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    let current: any = localStorage.getItem("theme");
    if (
      !current &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("light");
      current = "light";
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      current = "dark";
    }
    localStorage.setItem("theme", current);
  }, [theme]);

  const toggleTheme = () => {
    if (theme !== "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("dark");
    }
    if (theme !== "light") {
      document.documentElement.classList.add("dark");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
