import { App, Loader, Welcome } from "@/components";
import { UserContext } from "@/contexts";
import { useContext } from "react";

export default function Home() {
  const { sessionSet, pageLoading }: any = useContext(UserContext);

  if (sessionSet && !pageLoading) {
    return (
      <>
        <App />
      </>
    );
  } else if (pageLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <Welcome />
    </>
  );
}
