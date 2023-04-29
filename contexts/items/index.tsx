import { createContext, useState } from "react";

export const ItemsContext = createContext({});

export const ItemsContextProvider = ({ children }: any) => {
  const [groupLoading, setGroupLoading] = useState<boolean>();
  const [selectedGroup, setSelectedGroup] = useState<any>();
  const [tasksLoading, setTasksLoading] = useState<boolean>();
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
