import { App, Loader, Welcome } from "@/components";
import { UserContext } from "@/contexts";
import { UserContextType } from "@/interfaces";
import { useContext } from "react";

export default function Home() {
  const { sessionSet, isLoading }: any = useContext<{} | UserContextType>(
    UserContext
  );

  if (sessionSet && !isLoading) {
    return (
      <>
        <App />
      </>
    );
  } else if (!sessionSet && !isLoading)
    return (
      <>
        <Welcome />
      </>
    );
  // else if (isLoading && !sessionSet) {
    return (
      <>
        <Loader />
      </>
    );
  } 
// }
