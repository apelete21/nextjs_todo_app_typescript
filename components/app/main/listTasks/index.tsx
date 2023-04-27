import React from 'react'

type Props = {}


const inputStyle: String = "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const labelStyle: String = "w-full rounded-lg p-2 z-[-1] text-center text-white";
const checkboxStyle: String = "absolute w-full opacity-0 cursor-pointer";
const inputContainer: String =
  "w-full py-2 flex items-center justify-left relative gap-4 text-white";
const borderBottom: String = "border-b border-[#2222] dark:border-[#fff2]";

const data: Array<Number | String> = [
  "dkjvksdjfvlkdfvkjdh",
  "kfvnsfkjnv",
  "fkjvnkfjnkjd",
];

export default function ListTasks({}: Props) {
  return (
    <>
      <div className="w-full h-full gap-1 flex flex-col">
        <div className="w-full gap-1 flex flex-col">
          <div className="w-full gap-1 flex flex-row justify-between">
            <h1 className="text-3xl">Tasks list</h1>
            <div className='w-1/4'>
              <select
                name=""
                id=""
                placeholder="Order by"
                className={`${inputStyle} w-fit`}
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
          </div>
          <div className="w-full gap-6 flex flex-row">
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
    </>
  );
}