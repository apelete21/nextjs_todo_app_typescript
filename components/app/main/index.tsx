import React from "react";
import { Nav } from "./nav";
import ListTasks from "./listTasks";
import ItemManager from "./itemManager";

type Props = {};

export default function MainWrapper({}: Props):JSX.Element {
  return (
    <main className="w-3/4 h-full flex gap-8 justify-between my-auto flex-col p-4">
      <Nav />
      <div className="w-full h-[90%] flex items-center self-end justify-between flex-1 gap-10 p-4 pr-0">
        <ListTasks />
        <ItemManager />
      </div>
    </main>
  );
}
