import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let current: any = localStorage.getItem("theme");
    if (
      !current &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("light");
      current = "light";
      document.documentElement.classList.remove("dark");
    }
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      current === "dark"
    ) {
      setTheme("dark");
      current = "dark";
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", current);
  }, [theme]);

  const toggleTheme = () => {
    if (theme !== "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme !== "light") {
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
