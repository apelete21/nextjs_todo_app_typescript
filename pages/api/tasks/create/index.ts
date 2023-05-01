import { TaskType } from "@/libs";
import { Task } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  tasks: any;
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

  const { group, content, delay, description, priority, status }: TaskType =
    req.body;
  if (!group) {
    return res.status(401).send({
      message: `No group specified!`,
      tasks: undefined,
    });
  }
  try {
    const tasks = await Task.create({
      group,
      content,
      delay,
      description,
      priority,
      status,
    });
    res.status(200).send({ message: "Success", tasks });
  } catch (error: any) {
    res.status(401).send({
      message: error.message,
      tasks: undefined,
    });
  }
}
