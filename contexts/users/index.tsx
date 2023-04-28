import { authenticate } from "@/utils";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

type Props = {
  children: ReactNode | any;
};

export const UserContextProvider = (props: Props) => {
  // page load trnasitions
  const router: any = useRouter();
  const [pageLoading, setPageLoding] = useState(true);

  // *******************************
  const [sessionSet, setSessionSet] = useState(false);
  const [currentUser, setCurrentUser] = useState<object>();
  const [isLoading, setIsLoading] = useState(true);

  // controlling if user allready logged in on first load
  useEffect(() => {
    // here is the logic for controing the user session
    async function refreshUser() {
      const token: string | null = localStorage.getItem("token");
      if (!token) return;
      setIsLoading(true);
      const { data, success }: any = await authenticate(token);
      if (success) {
        setCurrentUser(data.user);
        setSessionSet(true);
      }
    }
    refreshUser();
    setPageLoding(false);
    setIsLoading(false);
  }, [sessionSet]);

  return (
    <>
      <UserContext.Provider
        value={{
          isLoading,
          sessionSet,
          currentUser,
          pageLoading,
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
