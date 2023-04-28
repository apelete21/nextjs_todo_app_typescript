import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider, UserContextProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Head>
          <title>Todo App</title>
        </Head>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
