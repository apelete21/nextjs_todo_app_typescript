import React, { useState } from 'react'

type Props = {}


const inputStyle: string =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

export function Nav({}: Props) {
    const [newGroup, setNewGoup] = useState(false);
  return (
    <>
      <nav className="w-full h-fit grid relative">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <div className="">
            <b>Selected task group</b>
          </div>
          <div className="flex gap-2 w-1/3">
            <button
              className={`${asideUserBtn} w-full`}
              onClick={() => setNewGoup(!newGroup)}
            >
              {!newGroup ? "New group" : "Close"}
            </button>
            <button className={`${asideUserBtn} w-full`}>Delete group</button>
          </div>
        </div>
        <div
          className={`w-1/2 h-fit px-2 mt-2 flex bg-slate-200 flex-row justify-between place-self-end items-center rounded-xl absolute top-full ${
            !newGroup && "hidden"
          }`}
        >
          <div className="p-1 w-full">
            <input
              type="text"
              placeholder="New group title"
              className={`${inputStyle}`}
            />
          </div>
          <div className="p-1 flex gap-2 w-1/3">
            <button className={`${asideUserBtn} w-full`}>Create </button>
          </div>
        </div>
      </nav>
    </>
  );
}