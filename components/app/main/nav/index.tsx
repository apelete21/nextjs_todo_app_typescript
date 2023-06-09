import { ItemsContext } from "@/contexts";
import { groupRequests } from "@/utils";
import React, { useContext, useEffect, useRef, useState } from "react";
import DocumentPlusIcon from "@heroicons/react/20/solid/DocumentPlusIcon";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";

const inputStyle: string =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";
const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

export function Nav({}: any) {
  const [newGroup, setNewGoup] = useState<boolean>(false);
  const { groupLoading, setGroupLoading, selectedGroup }: any =
    useContext(ItemsContext);
  const [result, setResult] = useState<string | null>(null);

  const groupTitle = useRef<any>();

  const CreateGroup = async (e: any) => {
    setGroupLoading(true);
    e.preventDefault();
    const title = groupTitle.current?.value;
    const token: any = localStorage.getItem("token");
    if (!token) {
      window.alert("Please login!");
      return setGroupLoading(false);
    }
    setGroupLoading(true);
    const { success }: any = await groupRequests(token, "create", "POST", {
      title,
    });
    if (!success) {
      setResult("error, not created!");
      return setGroupLoading(false);
    }
    setResult("Created!");
    setNewGoup(false);
    setGroupLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setResult(null);
    }, 1000);
  }, [result]);

  return (
    <>
      <nav className="w-full h-fit grid relative">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <div className="">
            <b>{selectedGroup ? selectedGroup.title : "No group selected!"}</b>
          </div>
          <div className="flex gap-2 w-fit">
            <button
              className={`${asideUserBtn} w-fit flex flex-row items-center gap-1`}
              onClick={() => setNewGoup(!newGroup)}
            >
              {!newGroup ? (
                <>
                  <DocumentPlusIcon width={20} />
                  New group
                </>
              ) : (
                <>
                  <PlusIcon width={20} style={{ transform: "rotate(45deg)" }} />
                  Cancel
                </>
              )}
            </button>
          </div>
        </div>
        <form
          className={`w-1/2 h-fit px-2 mt-2 flex bg-slate-200 flex-row justify-between place-self-end items-center rounded-xl absolute top-full ${
            !newGroup && "hidden"
          }`}
          onSubmit={CreateGroup}
        >
          {groupLoading ? (
            <p className="text-black dark:text-black m-4">Loading</p>
          ) : (
            <>
              {!result ? (
                <>
                  <div className="p-1 w-full">
                    <input
                      type="text"
                      placeholder="New group title"
                      className={`${inputStyle}`}
                      ref={groupTitle}
                      required={true}
                    />
                  </div>
                  <div className="p-1 flex gap-2 w-1/3">
                    <button type="submit" className={`${asideUserBtn} w-full`}>
                      Create
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-black dark:text-black m-4">{result}</p>
              )}
            </>
          )}
        </form>
      </nav>
    </>
  );
}
