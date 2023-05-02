import { Task } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  tasks: Array<object | any> | undefined;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method;
  if (method !== "POST")
    return res.status(401).send({
      message: `Cannot ${method} at ${req.url}`,
      tasks: undefined,
    });

  const { group }: { group: string } = req.body;
  if (!group) {
    return res.status(401).send({
      message: `No group specified!`,
      tasks: undefined,
    });
  }
  try {
    const tasks = await Task.find({ group });
    res.status(200).send({ message: "Success", tasks });
  } catch (error: any) {
    res.status(401).send({
      message: error.message,
      tasks: undefined,
    });
  }
}
