import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ItemsContextProvider,
  ThemeContextProvider,
  UserContextProvider,
} from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ItemsContextProvider>
          <>
            <Head>
              <title>Todo App</title>
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
