import { ItemsContext } from "@/contexts";
import { taskRequests } from "@/utils";
import CheckIcon from "@heroicons/react/20/solid/CheckIcon";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

const inputStyle: String =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const labelStyle: String = "w-full rounded-lg p-2 text-center dark:text-white";
const inputContainer: String =
  "w-full py-2 flex items-center justify-left relative gap-4 text-white";
const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

function CheckBtn(): JSX.Element {
  return (
    <>
      <CheckIcon width={15} />
    </>
  );
}

export default function ItemManager({}: Props) {
  const [content, setContent] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [status, setStatus] = useState<boolean | undefined>();
  const [priority, setPriority] = useState<any>();
  const [date, setDate] = useState<any>();
  const [error, setError] = useState<null | boolean>();

  const { selectedGroup, setTasksLoading, taskEdit, setTaskEdit }: any =
    useContext(ItemsContext);

  const handleChange = (e: any, setItem: any) => {
    if (setItem === setStatus) {
      return setStatus(!status);
    }
    setItem(e.target.value);
  };

  const createTask = async (e: any) => {
    e.preventDefault();
    if (!content || !description) {
      return setError(true);
    }
    const { success }: any = await taskRequests("create", "POST", {
      group: selectedGroup?._id,
      content,
      description,
      status,
      priority,
      date,
    });
    if (!success) return window.alert("Something gone wrong");
    formReset();
    setTasksLoading(true);
  };

  const formReset = () => {
    setContent(null);
    setDescription("");
    setDate(null);
    setPriority(null);
    setStatus(undefined);
    document.forms[1].reset()
  };

  useEffect(() => {
    if (taskEdit !== null) {
      setContent(taskEdit?.content);
      setDescription(taskEdit?.description);
      setDate(taskEdit?.date);
      setPriority(taskEdit?.priority);
      setStatus(taskEdit?.status);
      return;
    }
    formReset();
  }, [taskEdit]);

  const updateTask = async (e: any) => {
    e.preventDefault();
    const { success }: any = await taskRequests(
      `update/${taskEdit?._id}`,
      "PUT",
      {
        content,
        description,
        status,
        priority,
        date,
      }
    );
    if (!success) return window.alert("Something gone wrong");
    formReset();
    setTaskEdit(null);
    setTasksLoading(true);
  };

  return (
    <>
      <form
        className="w-full h-full gap-4 flex flex-col justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl">New task</h1>
        <div className="">
          <input
            type="text"
            className={`${inputStyle}`}
            placeholder="Content..."
            value={content}
            onChange={(e) => handleChange(e, setContent)}
          />
          <textarea
            className={`${inputStyle} max-h-30 resize-none`}
            rows={6}
            placeholder="Description..."
            value={description}
            onChange={(e) => handleChange(e, setDescription)}
          ></textarea>
          <div className="w-full flex items-center justify-left gap-4">
            <div className={""}>Status:</div>
            <div className={`${inputContainer}`}>
              <button
                className={`${labelStyle} gap-2 bg-red-600 flex flex-row items-center justify-center`}
                onClick={(e) => handleChange(e, setStatus)}
              >
                Pending
                {status === false && <CheckBtn />}
              </button>
            </div>
            <div className={`${inputContainer}`}>
              <button
                className={`${labelStyle} gap-2 bg-green-600 flex flex-row items-center justify-center`}
                onClick={(e) => handleChange(e, setStatus)}
              >
                Done
                {status === true && <CheckBtn />}
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-left gap-4">
            <div className={""}>Priority:</div>
            <div className={`${inputContainer}`}>
              <button
                value="LOW"
                className={`${labelStyle} gap-2 bg-green-800 flex flex-row items-center justify-center`}
                onClick={(e) => handleChange(e, setPriority)}
              >
                LOW
                {priority === "LOW" && <CheckBtn />}
              </button>
            </div>
            <div className={`${inputContainer}`}>
              <button
                className={`${labelStyle} gap-2 bg-yellow-700 flex flex-row items-center justify-center`}
                value="NORMAL"
                onClick={(e) => handleChange(e, setPriority)}
              >
                NORMAL
                {priority === "NORMAL" && <CheckBtn />}
              </button>
            </div>
            <div className={`${inputContainer}`}>
              <button
                value="HIGH"
                className={`${labelStyle} gap-2 bg-red-900 flex flex-row items-center justify-center`}
                onClick={(e) => handleChange(e, setPriority)}
              >
                HIGH
                {priority === "HIGH" && <CheckBtn />}
              </button>
            </div>
          </div>
          <input
            type="date"
            placeholder="delay"
            className={`${inputStyle}`}
            value={date}
            onChange={(e) => handleChange(e, setDate)}
          />
        </div>

        <div className="w-full gap-4 flex">
          {taskEdit === null ? (
            <button
              className={`${asideUserBtn} w-1/2 m-auto`}
              onClick={createTask}
            >
              New task
            </button>
          ) : (
            <button
              className={`${asideUserBtn} w-1/2 m-auto`}
              onClick={updateTask}
            >
              Update
            </button>
          )}
          <button className={`${asideUserBtn} w-1/2 m-auto`} onClick={formReset}>Cancel</button>
        </div>
      </form>
    </>
  );
}
