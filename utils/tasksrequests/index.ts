export const taskRequests = async (
  action: string,
  method: string | "",
  body: any
) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  const response = await fetch(`/api/tasks/${action}`, {
    method: method,
    headers: headersList,
    body: JSON.stringify(body) || undefined,
  });
  if (!response.ok) return new Error();
  const data: any = await response.json();
  return { data, success: response.ok };
};
