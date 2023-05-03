import { ItemsContext } from "@/contexts";
import React, { useContext } from "react";

type Props = {};

const inputStyle: String =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";

export function Search({}: Props) {
  const { search, setSearch }: any = useContext(ItemsContext);
  return (
    <>
      <div className="w-full h-fit flex-1 px-2 py-1 border-b-4 border-[#2222] dark:border-[#fff2]">
        <input
          type="text"
          placeholder="Search"
          className={`${inputStyle} bg-white`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
