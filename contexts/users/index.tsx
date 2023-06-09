import { childrenType } from "@/interfaces";
import { UserContextType } from "@/interfaces";
import { UserType } from "@/interfaces";
import { authenticate } from "@/utils";
import { SetStateAction, createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserContextType | {}>({
  isLoading: true,
  sessionSet: false,
  currentUser: undefined,
});

export const UserContextProvider = (props: childrenType) => {
  // *******************************
  const [sessionSet, setSessionSet] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserType | undefined | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // controlling if user allready logged in on first load
  useEffect(() => {
    // here is the logic for controing the user session
    async function refreshUser() {
      const token: string | null = localStorage.getItem("token");
      if (!token) {
        return setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
      const { data, success }: any = await authenticate(token);
      if (!success) {
        return setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
      setCurrentUser(data.user);
      setSessionSet(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    refreshUser();
  }, [sessionSet]);

  return (
    <>
      <UserContext.Provider
        value={{
          isLoading,
          sessionSet,
          currentUser,
          setIsLoading,
          setSessionSet,
          setCurrentUser,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};
