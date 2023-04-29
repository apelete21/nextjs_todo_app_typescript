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
          <Head>
            <title>Todo App</title>
          </Head>
          <Component {...pageProps} />
        </ItemsContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
