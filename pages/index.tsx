import { App, Welcome } from "@/components";
import { UserContext } from "@/contexts";
import { useContext } from "react";

export default function Home(): JSX.Element {
  const {
    isLoading,
    sessionSet,
    currentUser,
    setIsLoading,
    setSessionSet,
    setCurrentUser,
  }: any = useContext(UserContext);

  if (sessionSet)
    return (
      <>
        <App />
      </>
    );
  else
    return (
      <>
        <Welcome />
      </>
    );
}
