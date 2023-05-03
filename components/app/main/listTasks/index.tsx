import React, { useContext, useEffect, useState } from "react";
import PencilIcon from "@heroicons/react/20/solid/PencilIcon";
import TrashIcon from "@heroicons/react/20/solid/TrashIcon";
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import EyeIcon from "@heroicons/react/20/solid/EyeIcon";
import EyeSlashIcon from "@heroicons/react/20/solid/EyeSlashIcon";
import { ItemsContext } from "@/contexts";
import { taskRequests } from "@/utils";
import moment from "moment";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const labelStyle: string =
  "w-full rounded-lg p-2 text-center text-white dark:text-white cursor-pointer hover:opacity-80";
const inputContainer: string =
  "w-full py-2 flex items-center justify-left relative gap-4";
const borderBottom: string = "border-b border-[#2222] dark:border-[#fff2]";

export default function ListTasks() {
  const {
    setTaskEdit,
    setSelectedGroup,
    selectedGroup,
    tasksLoading,
    setTasksLoading,
  }: any = useContext(ItemsContext);

  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<boolean | null>(null);
  const [itemView, setItemView] = useState<string | null>("");

  const filterFunc = (status: boolean | null) => setActive(status);

  const viewDetails = (item: string) => {
    if (item === itemView) return setItemView(null);
    setItemView(item);
  };

  const deleteTask = async (id: string) => {
    setTasksLoading(true);
    const { success }: any = await taskRequests(
      `delete/${id}`,
      "DELETE",
      undefined
    );
    if (!success) {
      window.alert("Error, not deleted!");
      return;
    }
    setTaskEdit(null);
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
          </div>
          <div className="w-full gap-6 flex flex-row">
            <div className={`${inputContainer}`}>
              <label
                className={`${labelStyle} bg-yellow-600`}
                onClick={() => filterFunc(null)}
              >
                All
              </label>
            </div>
            <div className={`${inputContainer}`}>
              <label
                className={`${labelStyle} bg-red-600`}
                onClick={() => filterFunc(false)}
              >
                Pending
              </label>
            </div>
            <div className={`${inputContainer}`}>
              <label
                className={`${labelStyle} bg-green-600`}
                onClick={() => filterFunc(true)}
              >
                Done
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-1 overflow-y-scroll relative">
          {data.length !== 0 && !tasksLoading && error === null ? (
            data
              ?.filter((element: any) => {
                if (active === null) {
                  return element;
                }
                if (active === true && element.status === true) {
                  return element;
                } else if (active === false && element.status === false) {
                  return element;
                }
              })
              .map((element: any, index: number) => {
                return (
                  <div className={`${borderBottom}`}>
                    <div
                      key={index}
                      className={`p-2 flex flex-row justify-between items-center cursor-pointer hover:bg-[#eee6] dark:hover:bg-[#2224] dark:focus:hover:bg-[#2224]`}
                    >
                      <div className="py-2 max-w-[33%] flex-1 overflow-x-scroll">
                        {element?.content}
                      </div>
                      <div
                        className={`py-2 max-w-[33%] flex-1 overflow-x-scroll ${
                          element.status === false
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {element.status ? "Done" : "Pending"}
                      </div>
                      <div className="flex flex-row gap-2 text-black dark:text-white">
                        <button
                          className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                          onClick={() => viewDetails(element._id)}
                        >
                          {itemView === element._id ? (
                            <EyeSlashIcon width={15} />
                          ) : (
                            <EyeIcon width={15} />
                          )}
                        </button>
                        <button
                          className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                          onClick={() => setTaskEdit(element)}
                        >
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
                    {itemView === element._id && (
                      <div className="p-2 pt-0">
                        <div className="flex flex-row w-full justify-between gap-3 my-2">
                          <div>
                            <span className="opacity-50 my-2 w-full">
                              Priority
                            </span>
                            <br />
                            <span> {element.priority} </span>
                          </div>
                          <div>
                            <span className="opacity-50 my-2 w-full">
                              Delay
                            </span>
                            <br />
                            <span>
                              {`${moment(element?.delay).format('ll')}`}
                            </span>
                          </div>
                        </div>
                        <div className="w-full">
                          <span className="opacity-50 my-2">Description</span>
                          <br />
                          <span className="w-full">{element.description}</span>
                        </div>
                      </div>
                    )}
                  </div>
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
