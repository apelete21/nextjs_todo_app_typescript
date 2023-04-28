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

  const response = await fetch(`/api/users/${url}`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();
  return { data, success: response.ok };
};

export async function authenticate() {
  const token: string | null = localStorage.getItem("token");
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  const response = await fetch(`/api/users/auth`, {
    method: "POST",
    headers: headersList,
  });
  const data: any = await response.json();
  return { data, success: response.ok };
}
