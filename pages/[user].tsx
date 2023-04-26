import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const inputStyle: String = "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const labelStyle: String = "w-full rounded-lg p-2 z-[-1] text-center text-white";
const checkboxStyle: String = "absolute w-full opacity-0 cursor-pointer";
const inputContainer: String =
  "w-full py-2 flex items-center justify-left relative gap-4 text-white";
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
  const [newGroup, setNewGoup] = useState(false);
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className="w-screen h-screen flex flex-row">
      {/* aside wrapper */}
      <aside className="w-1/4 h-full dark:bg-neutral-950 bg-gray-300 flex flex-col select-none">
        {/* group search component */}
        <div className="w-full h-fit flex-1 px-2 py-1 border-b-4 border-[#2222] dark:border-[#fff2]">
          <input type="text" placeholder="Search" className={`${inputStyle} bg-white`} />
        </div>
        {/* list item group task */}
        <ul className="w-full h-full overflow-scroll p-2">
          {data?.map((element: any, index: number) => {
            return (
              <div
                key={index}
                className={`${borderBottom} p-2 flex flex-row justify-between items-center cursor-pointer hover:bg-[#eee5] dark:hover:bg-[#2224] dark:focus:hover:bg-[#3334]`}
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
      {/* Main wrapper */}
      <main className="w-3/4 h-full flex gap-8 justify-between my-auto flex-col p-4">
        <nav className="w-full h-fit grid relative">
          <nav className="w-full h-fit flex flex-row justify-between items-center">
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
          </nav>
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
        <div className="w-full h-[90%] flex items-center self-end justify-between flex-1 gap-10 p-4 pr-0">
          <div className="w-full h-full gap-1 flex flex-col">
            <div className="w-full gap-1 flex flex-col">
              <div className="w-full gap-1 flex flex-row justify-between">
                <h1 className="text-3xl">Tasks list</h1>
                <select
                  name=""
                  id=""
                  placeholder="Order by"
                  className={`${inputStyle} w-auto`}
                >
                  <option disabled selected hidden>
                    Order by
                  </option>
                  <option value={"Creation"}>Creation</option>
                  <option value={"Content"}>Content</option>
                  <option value={"Delay"}>Delay</option>
                  <option value={"Priority"}>Priority</option>
                </select>
              </div>
              <div className="w-full gap-6 flex flex-row">
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-red-600`}
                  >
                    Pending
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-green-600`}
                  >
                    Done
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex-1 overflow-y-scroll relative">
              {data?.map((element: any, index: number) => {
                return (
                  <>
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
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-full h-full gap-4 flex flex-col justify-between">
            <h1 className="text-3xl">New task</h1>
            <form onSubmit={(e) => e.preventDefault()} className="">
              <input
                type="text"
                className={`${inputStyle}`}
                placeholder="Content..."
              />
              <textarea
                className={`${inputStyle} max-h-30 resize-none`}
                rows={6}
                placeholder="Description..."
              ></textarea>
              <div className="w-full flex items-center justify-left gap-4">
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} text-black`}
                  >
                    Status:
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-red-600`}
                  >
                    Pending
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-green-600`}
                  >
                    Done
                  </label>
                </div>
              </div>
              <div className="w-full flex items-center justify-left gap-4">
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} text-black`}
                  >
                    Priority:
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-green-800`}
                  >
                    LOW
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-yellow-700`}
                  >
                    NORMAL
                  </label>
                </div>
                <div className={`${inputContainer}`}>
                  <input type="checkbox" className={`${checkboxStyle}`} />
                  <label
                    htmlFor="checkbox"
                    className={`${labelStyle} bg-red-900`}
                  >
                    HIGH
                  </label>
                </div>
              </div>
              <input
                type="date"
                placeholder="delay"
                className={`${inputStyle}`}
              />
            </form>

            <div className="w-full gap-4 flex">
              <button className={`${asideUserBtn} w-1/2 m-auto`}>
                New task
              </button>
              <button className={`${asideUserBtn} w-1/2 m-auto`}>Update</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
