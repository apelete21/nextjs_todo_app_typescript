import { ItemsContext } from "@/contexts";
import { groupRequests } from "@/utils";
import React, {
  MutableRefObject,
  ReactElement,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PencilIcon from "@heroicons/react/20/solid/PencilIcon";
import TrashIcon from "@heroicons/react/20/solid/TrashIcon";
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import CheckIcon from "@heroicons/react/20/solid/CheckIcon";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";
import { GroupDataType } from "@/interfaces";

const borderBottom: String = "border-b border-[#2222] dark:border-[#fff2]";
const inputStyle: String =
  "w-full my-2 rounded-lg p-2 dark:text-black bg-gray-300";

export function List() {
  const [data, setData] = useState<GroupDataType[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  const [setselectToUpdate, setSelectToUpdate] = useState<string>("");
  const newTitle = useRef<RefObject<HTMLInputElement> | any>();
  const {
    search,
    setSearch,
    groupLoading,
    setGroupLoading,
    setSelectedGroup,
    setTasksLoading,
  }: any = useContext(ItemsContext);

  const handleEdit = (selected: string, value: boolean) => {
    setUpdate(value);
    setSelectToUpdate(selected);
  };

  const updateItem = async (id: string, title: string) => {
    setGroupLoading(true);
    const token: any = localStorage.getItem("token");
    if (!token) {
      window.alert("Please login!");
    }
    const { success }: any = await groupRequests(token, `update/${id}`, "PUT", {
      title,
    });
    if (!success) {
      setUpdate(true);
      setSelectToUpdate("");
      return;
    }
    setUpdate(true);
    setSelectToUpdate("");
    setGroupLoading(true);
    setSelectedGroup(null);
    return;
  };

  const deleteItem = async (id: any) => {
    setGroupLoading(true);
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
    setSelectedGroup(null);
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
            data
              ?.filter((element: GroupDataType) => {
                if (search === "") {
                  return element;
                }
                if (search !== "" && element.title.search(search) !== -1) {
                  return element;
                }
              })
              .map((element: GroupDataType, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedGroup(element);
                      setTasksLoading(true);
                    }}
                    className={`${borderBottom} py-2 flex flex-col justify-between items-center cursor-pointer hover:bg-[#eee5] dark:hover:bg-[#2224] dark:focus:hover:bg-[#3334]`}
                  >
                    <div className="w-full flex flex-row justify-between">
                      <div className="py-2 opacity-50 w-full flex-1 overflow-x-scroll first-letter:capitalize">
                        {element.title}
                      </div>
                      <div className="flex flex-row gap-2 text-black dark:text-white">
                        {update && setselectToUpdate === element._id ? (
                          <>
                            <button
                              className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                              onClick={() =>
                                updateItem(element._id, newTitle.current?.value)
                              }
                            >
                              <CheckIcon width={20} />
                            </button>
                            <button
                              className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                              onClick={() => handleEdit("", false)}
                            >
                              <PlusIcon
                                width={20}
                                className="rotate-45 origin-center"
                              />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                              onClick={() => handleEdit(element._id, true)}
                            >
                              <PencilIcon width={15} />
                            </button>
                            <button
                              className="p-1 opacity-40 hover:opacity-100 cursor-pointer"
                              onClick={() => deleteItem(element._id)}
                            >
                              <TrashIcon width={15} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    {update && setselectToUpdate === element._id && (
                      <div className="w-full flex flex-row justify-between">
                        <input
                          type="text"
                          placeholder="Search"
                          className={`${inputStyle} bg-white`}
                          defaultValue={element?.title}
                          ref={newTitle}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
        </ul>
      </>
    );
  }
}
