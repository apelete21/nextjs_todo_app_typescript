import { User } from "@/libs";
import { useState } from "react";

export const useIdentify = async (credentials: User, url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const { name, email, password } = credentials;

  setIsLoading(true);

  const bodyContent = JSON.stringify({
    name,
    email,
    password,
  });

  const response = await fetch(url, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();

  setError(response.ok);

  setIsLoading(false);
  return { data, isLoading, setIsLoading, error, setError };
};
