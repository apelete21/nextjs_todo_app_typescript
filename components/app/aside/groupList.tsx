import { groupRequests } from "@/utils";
import React, { useEffect, useState } from "react";

type Props = {};

const borderBottom: String = "border-b border-[#2222] dark:border-[#fff2]";

export function List({}: Props) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      const token: any = localStorage.getItem("token");
      if (!token) {
        window.alert("Please login!");
        return setIsLoading(false);
      }
      setIsLoading(true);
      const { data, success }: any = await groupRequests(token, "", "GET");
      if (!success) {
        return setIsLoading(false);
      }
      setData(data?.groups);
      setIsLoading(false);
    };
    getGroups();
  }, [data]);

  return (
    <>
      <ul className="w-full h-full overflow-scroll p-2">
        {data?.length === 0 && (
          <div className="text-center my-2">No groups created</div>
        )}
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
    </>
  );
}
