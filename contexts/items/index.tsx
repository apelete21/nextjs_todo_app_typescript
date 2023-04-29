import { createContext, useState } from "react";

export const ItemsContext = createContext<any>({});

export const ItemsContextProvider = ({ children }: any) => {
  const [groupLoading, setGroupLoading] = useState<any>();
  const [selectedGroup, setSelectedGroup] = useState<any>();
  const [tasksLoading, setTasksLoading] = useState<any>();
  const [selectedTask, setSelectedTask] = useState<any>();
  return (
    <>
      <ItemsContext.Provider
        value={{
          groupLoading,
          tasksLoading,
          selectedGroup,
          selectedTask,
          setGroupLoading,
          setSelectedGroup,
          setTasksLoading,
          setSelectedTask,
        }}
      >
        {children}
      </ItemsContext.Provider>
    </>
  );
};
