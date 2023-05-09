import { ThemeContext } from "@/contexts";
import React, { useContext, useEffect, useState } from "react";
import MoonIcon from "@heroicons/react/20/solid/MoonIcon";
import SunIcon from "@heroicons/react/20/solid/SunIcon";
import { ThemeContextType } from "@/interfaces";
import { Switch } from "@headlessui/react";

type Props = {
  className: string;
};

export function ThemeChangerBtn({ className }: Props): JSX.Element {
  const { theme, toggleTheme }: any =
    useContext<ThemeContextType>(ThemeContext);

  const [enabled, setEnabled] = useState<boolean>();

  useEffect(() => {
    if (theme === "dark") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
    return;
  }, [theme]);

  return (
    <>
      <div className={`${className}`}>
        <Switch
          onClick={toggleTheme}
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-none" : "bg-none"}
          relative inline-flex p-[2px] w-[60px] shrink-0 cursor-pointer rounded-full border-[3px] border-gray-700 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-7" : "translate-x-0"}
            pointer-events-none flex items-center justify-center h-full p-[2px] rounded-full bg-none dark:bg-none text-black border border-gray-500 dark:text-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          >
            {theme === "dark" ? (
              <MoonIcon width={18} />
            ) : (
              <SunIcon width={18} />
            )}
          </span>
        </Switch>
      </div>
    </>
  );
}
