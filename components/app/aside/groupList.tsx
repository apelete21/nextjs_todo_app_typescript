import { ItemsContext } from "@/contexts";
import { groupRequests } from "@/utils";
import React, { useContext, useEffect, useState } from "react";
import PencilIcon from "@heroicons/react/20/solid/PencilIcon";
import TrashIcon from "@heroicons/react/20/solid/TrashIcon";
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";

const borderBottom: String = "border-b border-[#2222] dark:border-[#fff2]";

export function List() {
  const [data, setData] = useState([]);
  const { groupLoading, setGroupLoading }: any = useContext(ItemsContext);

  const deleteItem = async (id: any) => {
    const token: any = localStorage.getItem("token");
    console.log(id);
    if (!token) {
      window.alert("Please login!");
    }
    const { success }: any = await groupRequests(
      token,
      `delete/${id}`,
      "DELETE",
      undefined
    );
    if (!success) {
      return;
    }
    setGroupLoading(true);
    return;
  };

  useEffect(() => {
    const getGroups = async () => {
      const token: any = localStorage.getItem("token");
      if (!token) {
        window.alert("Please login!");
      }
      const { data, success }: any = await groupRequests(
        token,
        "",
        "GET",
        undefined
      );
      if (!success) {
        return setGroupLoading(false);
      }
      setData(data?.groups);
      return setGroupLoading(false);
    };
    getGroups();
  }, [groupLoading]);
  if (groupLoading) {
    return (
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
    );
  } else {
    return (
      <>
        <ul className="w-full h-full overflow-scroll p-2">
          <>
            {data?.length === 0 && (
              <div className="text-center my-2">No groups created</div>
            )}
          </>
          {data?.length >= 0 &&
            data?.map((element: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`${borderBottom} p-2 flex flex-row justify-between items-center cursor-pointer hover:bg-[#eee5] dark:hover:bg-[#2224] dark:focus:hover:bg-[#3334]`}
                >
                  <div className="py-2 opacity-50 w-full flex-1 overflow-x-scroll">
                    {element.title}
                  </div>
                  <div className="flex flex-row gap-2 text-black dark:text-white">
                    <button className="p-1 opacity-40 hover:opacity-100 cursor-pointer">
                      <PencilIcon width={15} />
                    </button>
                    <button
                      className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                      onClick={() => deleteItem(element._id)}
                    >
                      <TrashIcon width={15} />
                    </button>
                  </div>
                </div>
              );
            })}
        </ul>
      </>
    );
  }
}
