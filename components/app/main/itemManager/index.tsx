import React from "react";

type Props = {};

const inputStyle: String =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const labelStyle: String =
  "w-full rounded-lg p-2 z-[-1] text-center text-white";
const checkboxStyle: String = "absolute w-full opacity-0 cursor-pointer";
const inputContainer: String =
  "w-full py-2 flex items-center justify-left relative gap-4 text-white";
const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

export default function ItemManager({}: Props) {
  return (
    <>
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
              <label htmlFor="checkbox" className={`${labelStyle} text-black`}>
                Status:
              </label>
            </div>
            <div className={`${inputContainer}`}>
              <input type="checkbox" className={`${checkboxStyle}`} />
              <label htmlFor="checkbox" className={`${labelStyle} bg-red-600`}>
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
              <label htmlFor="checkbox" className={`${labelStyle} text-black`}>
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
              <label htmlFor="checkbox" className={`${labelStyle} bg-red-900`}>
                HIGH
              </label>
            </div>
          </div>
          <input type="date" placeholder="delay" className={`${inputStyle}`} />
        </form>

        <div className="w-full gap-4 flex">
          <button className={`${asideUserBtn} w-1/2 m-auto`}>New task</button>
          <button className={`${asideUserBtn} w-1/2 m-auto`}>Update</button>
        </div>
      </div>
    </>
  );
}
