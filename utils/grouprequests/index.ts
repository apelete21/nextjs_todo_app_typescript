export const groupRequests = async (
  token: string,
  action: string,
  method: string,
  body: any | null
) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  const response = await fetch(`/api/groups/${action}`, {
    method: method,
    headers: headersList,
    body: JSON.stringify(body) || undefined,
  });
  if (!response.ok) return { data:null, success: response.ok };
  const data: any = await response.json();
  return { data, success: response.ok };
};
