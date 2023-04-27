import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

type Props = {
  children: ReactNode | any;
};

export const UserContextProvider = (props: Props) => {
  const [sessionSet, setSessionSet] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // controlling if user allready logged in on first load
  useEffect(() => {
    // here is the logic for controing the user session
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
