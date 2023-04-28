import React from "react";
import { AsideComponent } from "./aside";
import MainWrapper from "./main";

type Props = {};

export function App({}: Props) {
  return (
    <>
      <div className="w-screen h-screen flex flex-row text-black dark:text-white bg-slate-100 dark:bg-neutral-900">
        <AsideComponent />
        <MainWrapper />
      </div>
    </>
  );
}
