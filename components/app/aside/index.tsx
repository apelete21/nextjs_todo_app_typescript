import React from "react";
import { Search } from "./search";
import { List } from "./groupList";
import { User } from "./user";

type Props = {};

export function AsideComponent({}: Props) {
  return (
    <>
      <aside className="w-1/4 h-full dark:bg-neutral-950 bg-gray-300 flex flex-col select-none">
        {/* group search component */}
        <Search />
        {/* list item group task */}
        <List />
        {/* user component */}
        <User />
      </aside>
    </>
  );
}
