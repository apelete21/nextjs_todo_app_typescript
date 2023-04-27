import { User } from "@/libs";
import { useState } from "react";

export const useIdentify = async (credentials: User, url: string) => {
  const [isLoading, setIsLoading] = useState(false);

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const { name, email, password } = credentials;

  setIsLoading(true)

  let bodyContent = JSON.stringify({
    name,
    email,
    password,
  });

  let response = await fetch(url, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  setIsLoading(false)
  return { data, isLoading };
};
