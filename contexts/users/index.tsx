import { authenticate } from "@/utils";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

type Props = {
  children: ReactNode | any;
};

export const UserContextProvider = (props: Props) => {
  // *******************************
  const [sessionSet, setSessionSet] = useState(false);
  const [currentUser, setCurrentUser] = useState<object>();
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
      }, 1500);
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
