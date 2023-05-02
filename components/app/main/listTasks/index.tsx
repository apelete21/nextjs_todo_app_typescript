import React, { useContext, useEffect, useState } from "react";
import PencilIcon from "@heroicons/react/20/solid/PencilIcon";
import TrashIcon from "@heroicons/react/20/solid/TrashIcon";
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import { ItemsContext } from "@/contexts";
import { taskRequests } from "@/utils";

const inputStyle: string =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-100";
const labelStyle: string =
  "w-full rounded-lg p-2 text-center text-white dark:text-white cursor-pointer hover:opacity-80";
const inputContainer: string =
  "w-full py-2 flex items-center justify-left relative gap-4";
const borderBottom: string = "border-b border-[#2222] dark:border-[#fff2]";

export default function ListTasks() {
  const {
    groupLoading,
    setGroupLoading,
    setSelectedGroup,
    selectedGroup,
    tasksLoading,
    setTasksLoading,
  }: any = useContext(ItemsContext);

  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const deleteTask = async (id: string) => {
    const { success }: any = await taskRequests(
      `delete/${id}`,
      "DELETE",
      undefined
    );
    if (!success) {
      window.alert("Error, not deleted!");
      return;
    }
    setTasksLoading(true);
    return;
  };

  useEffect(() => {
    async function getAlltasks() {
      if (selectedGroup?._id === "" || !selectedGroup._id) {
        setSelectedGroup(null);
        setTasksLoading(false);
        setError("No group selected!");
        return;
      }
      const { data, success }: any = await taskRequests(``, "POST", {
        group: selectedGroup._id,
      });
      if (!success) {
        setError(data?.message);
        setSelectedGroup(null);
        return;
      }
      setData(data?.tasks);
      setError(null);
      setTasksLoading(false);
    }
    if (selectedGroup?._id) getAlltasks();
  }, [selectedGroup, tasksLoading]);

  return (
    <>
      <div className="w-full h-full gap-1 flex flex-col">
        <div className="w-full gap-1 flex flex-col">
          <div className="w-full gap-1 flex flex-row justify-between">
            <h1 className="text-3xl">Tasks list</h1>
            <div className="w-1/4">
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
              <label
                htmlFor="checkbox"
                className={`${labelStyle} bg-yellow-600`}
              >
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
          {data.length !== 0 && !tasksLoading && error === null ? (
            data?.map((element: any, index: number) => {
              return (
                <>
                  <div
                    key={index}
                    className={`${borderBottom} p-2 flex flex-row justify-between items-center cursor-pointer hover:bg-[#eee5] dark:hover:bg-[#2224] dark:focus:hover:bg-[#2224]`}
                  >
                    <div className="py-2 opacity-50 w-full flex-1 overflow-x-scroll">
                      {element?.content}
                    </div>
                    <div className="flex flex-row gap-2 text-black dark:text-white">
                      <button className="p-1 opacity-40 hover:opacity-100 cursor-pointer">
                        <PencilIcon width={15} />
                      </button>
                      <button
                        className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                        onClick={() => deleteTask(element?._id)}
                      >
                        <TrashIcon width={15} />
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="w-full h-full overflow-scroll p-2 flex items-center justify-center">
                <span>No tasks to show</span>
              </div>
            </>
          )}
          {tasksLoading && (
            <>
              <div className="w-full h-full overflow-scroll p-2 flex items-center justify-center">
                <ArrowPathIcon
                  width={25}
                  style={{
                    animation: "infRotate 1s infinite linear",
                  }}
                />
              </div>
            </>
          )}
          {error !== null && (
            <>
              <div className="w-full h-full overflow-scroll p-2 flex items-center justify-center">
                <span>{error}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
