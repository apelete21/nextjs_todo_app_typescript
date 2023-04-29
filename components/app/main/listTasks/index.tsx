import React from 'react'

type Props = {}


const inputStyle: string = "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-100";
const labelStyle: string = "w-full rounded-lg p-2 text-center text-white dark:text-white cursor-pointer hover:opacity-80";
const inputContainer: string =
  "w-full py-2 flex items-center justify-left relative gap-4";
const borderBottom: string = "border-b border-[#2222] dark:border-[#fff2]";

const data: Array<Number | string> = [
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
              <label htmlFor="checkbox" className={`${labelStyle} bg-yellow-600`}>
                All
              </label>
            </div>
            <div className={`${inputContainer}`}>
              <label htmlFor="checkbox" className={`${labelStyle} bg-red-600`}>
                Pending
              </label>
            </div>
            <div className={`${inputContainer}`}>
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