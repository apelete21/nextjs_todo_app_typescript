import { useRouter } from "next/router";
import React from "react";

type Props = {};

const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";


export function User({}: Props) {
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <div className="w-full h-fit flex-1 px-2 py-1 border-t-4 border-[#2222] dark:border-[#fff2]">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[30px] h-[30px] bg-slate-600 rounded-full flex items-center justify-center text-center">
              <span>{user?.toLocaleString().toUpperCase().charAt(0)}</span>
            </div>
            <div>{user?.toLocaleString().toUpperCase()}</div>
          </div>
          <div className="flex flex-row gap-2">
            <button className={`${asideUserBtn}`}>Logout</button>
          </div>
        </div>
        <div className="w-full py-2 flex gap-2">
          <button className={`${asideUserBtn} w-full`}>Profile</button>
          <button className={`${asideUserBtn} w-full`}>Light/Dark</button>
        </div>
      </div>
    </>
  );
}
