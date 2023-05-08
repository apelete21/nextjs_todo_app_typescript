import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ItemsContextProvider,
  ThemeContextProvider,
  UserContextProvider,
} from "@/contexts";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ItemsContextProvider>
          <>
            <Head>
              <title>
                {router.pathname === "/profile"
                  ? "Profile"
                  : router.pathname === "/"
                  ? "Home"
                  : router.pathname === "/login"
                  ? "Login"
                  : router.pathname === "/register"
                  ? "Register"
                  : router.pathname === "/dashboard"
                  ? "Dashboard"
                  : router.pathname === "/password"
                  ? "Change password"
                  : "Todo App"}
              </title>
            </Head>
            <div className="text-black dark:text-white bg-white dark:bg-neutral-950">
              <Component {...pageProps} />
            </div>
          </>
        </ItemsContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
