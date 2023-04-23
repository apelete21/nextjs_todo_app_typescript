import { useRouter } from "next/router";
import React from "react";

type Props = {};

const inputStyle: String = "w-full my-2 rounded-lg p-2 dark:text-black";
const borderBottom: String = "border-b border-[#2222] dark:border-[#fff2]";
const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

const data: Array<Number | String> = [
  "dkjvksdjfvlkdfvkjdh",
  "kfvnsfkjnv",
  "fkjvnkfjnkjd",
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];

const Dashboard = (props: Props) => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className="w-screen h-screen flex flex-row">
      <aside className="w-1/4 h-full dark:bg-neutral-950 bg-gray-300 flex flex-col select-none">
        {/* group search component */}
        <div className="w-full h-fit flex-1 px-2 py-1 border-b-4 border-[#2222] dark:border-[#fff2]">
          <input type="text" placeholder="Search" className={`${inputStyle}`} />
        </div>
        {/* list item group task */}
        <ul className="w-full h-full overflow-scroll p-2">
          {data?.map((element: any, index: number) => {
            return (
              <div
                key={index}
                className={`${borderBottom} p-2 flex flex-row justify-between items-center cursor-pointer hover:bg-[#eee5] dark:hover:bg-[#2224] dark:focus:hover:bg-[#2224]`}
              >
                <div className="py-2 opacity-50 w-full flex-1 overflow-x-scroll">
                  {element}
                </div>
                <div className="flex flex-row gap-2">
                  <button className="p-1 opacity-20 hover:opacity-60 cursor-pointer">
                    E
                  </button>
                  <button className="p-1 opacity-20 hover:opacity-60 cursor-pointer">
                    D
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
        {/* user component */}
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
      </aside>
      <main className="w-3/4 h-full">main</main>
    </div>
  );
};

export default Dashboard;
