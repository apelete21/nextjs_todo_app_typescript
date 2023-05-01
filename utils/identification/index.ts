import { User } from "@/libs";

export const useIdentify = async (credentials: User, url: string) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const { fullname, email, password } = credentials;
  const bodyContent = JSON.stringify({
    fullname,
    email,
    password,
  });
  try {
    const response = await fetch(`/api/users/${url}`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    const data = await response.json();
    return { data, success: response.ok };
  } catch (error) {
    return { data: null, success: false };
  }
};
