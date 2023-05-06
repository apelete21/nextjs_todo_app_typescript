import { Dispatch, SetStateAction } from "react";

export interface ResponseType {
  data: DataType;
  success: boolean;
}

export interface DataType {
  message: string;
  user: UserType;
  token: string;
}

export interface childrenType {
  children: JSX.Element;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme(): void;
}

export interface UserContextType {
  isLoading: boolean;
  sessionSet: boolean;
  currentUser: UserType | undefined | null;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSessionSet: Dispatch<SetStateAction<boolean>>;
  setCurrentUser: Dispatch<SetStateAction<UserType | undefined | null>>;
}

export type UserType = {
  role: string;
  email: string;
  fullname: string;
  createdAt: string;
  updatedAt: string;
  __v: number | null | undefined;
  _id: string | null;
  password: string | null;
};

export type GroupDataType = {
  _id: string;
  title: string;
  author: string;
  __v: number | null | undefined;
  createdAt: string;
  updatedAt: string;
};

export type TaskDataType = {
  _id: string;
  content: string;
  group: string;
  description: string;
  status: boolean;
  priority: boolean;
  delay: Date | string;
  __v: number | null | undefined;
  createdAt: string;
  updatedAt: string;
};

export interface ItemsContextType {
  groupLoading: boolean;
  setGroupLoading: Dispatch<SetStateAction<boolean>>;
  selectedGroup: GroupDataType | undefined | null;
  setSelectedGroup: Dispatch<SetStateAction<GroupDataType | undefined | null>>;
  tasksLoading: boolean;
  setTasksLoading: Dispatch<SetStateAction<boolean>>;
  selectedTask: TaskDataType | undefined | null;
  setSelectedTask: Dispatch<SetStateAction<TaskDataType | undefined | null>>;
  taskEdit: TaskDataType | undefined | null;
  setTaskEdit: Dispatch<SetStateAction<TaskDataType | undefined | null>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
