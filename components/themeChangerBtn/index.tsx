import { ThemeContext } from "@/contexts";
import React, { useContext } from "react";
import MoonIcon from "@heroicons/react/20/solid/MoonIcon";
import SunIcon from "@heroicons/react/20/solid/SunIcon";
import { ThemeContextType } from "@/interfaces";

type Props = {
  className: string;
};

export function ThemeChangerBtn({ className }: Props): JSX.Element {
  const { theme, toggleTheme }: any =
    useContext<ThemeContextType>(ThemeContext);
  return (
    <>
      <span
        onClick={toggleTheme}
        className={`${className} text-[15px] opacity-80 hover:opacity-100 -mb-6 cursor-pointer`}
      >
        {theme === "dark" ? <MoonIcon width={20} /> : <SunIcon width={20} />}
      </span>
    </>
  );
}
