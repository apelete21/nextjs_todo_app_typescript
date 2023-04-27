import React from "react";
import { AsideComponent } from "./aside";
import MainWrapper from "./main";

type Props = {};

export function App({}: Props) {
  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <AsideComponent />
        <MainWrapper />
      </div>
    </>
  );
}
