import {
  GroupDataType,
  ItemsContextType,
  TaskDataType,
  childrenType,
} from "@/interfaces";
import { createContext, useState } from "react";

export const ItemsContext = createContext<ItemsContextType | {}>({});

export const ItemsContextProvider = ({ children }: childrenType) => {
  const [groupLoading, setGroupLoading] = useState<boolean>(true);
  const [selectedGroup, setSelectedGroup] = useState<GroupDataType | null>();
  const [tasksLoading, setTasksLoading] = useState<boolean>();
  const [isManaging, setIsManaging] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<TaskDataType | null>(null);
  const [taskEdit, setTaskEdit] = useState<TaskDataType | null>(null);
  const [search, setSearch] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  return (
    <>
      <ItemsContext.Provider
        value={{
          search,
          taskEdit,
          groupLoading,
          tasksLoading,
          selectedGroup,
          isManaging,
          isUpdating,
          setIsUpdating,
          setIsManaging,
          setSearch,
          selectedTask,
          setTaskEdit,
          setTasksLoading,
          setGroupLoading,
          setSelectedTask,
          setSelectedGroup,
        }}
      >
        {children}
      </ItemsContext.Provider>
    </>
  );
};
