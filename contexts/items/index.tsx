import { createContext, useState } from "react";

export const ItemsContext = createContext({});

export const ItemsContextProvider = ({ children }: any) => {
  const [groupLoading, setGroupLoading] = useState<boolean>(true);
  const [selectedGroup, setSelectedGroup] = useState<any>();
  const [tasksLoading, setTasksLoading] = useState<boolean>();
  const [selectedTask, setSelectedTask] = useState<any>();
  const [taskEdit, setTaskEdit] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <ItemsContext.Provider
        value={{
          search,
          taskEdit,
          groupLoading,
          tasksLoading,
          selectedGroup,
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
