import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let current: any = localStorage.getItem("theme");
    if (
      !current &&
      current === "light" ||
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("light");
      current = "light";
      document.documentElement.classList.remove("dark");
    } else if (
      !current &&
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      current === "dark"
    ) {
      setTheme("dark");
      current = "dark";
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", current);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
