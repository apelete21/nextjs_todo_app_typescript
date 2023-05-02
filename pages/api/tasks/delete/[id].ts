import { Task } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  const method = req.method;
  if (method !== "DELETE")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const { id } = req.query;

  if (!id || id === undefined)
    return res.status(401).send({ message: "No task specified" });

  try {
    const deleted = await Task.deleteOne({ _id: id });
    if (!deleted)
      return res.status(500).send({ message: "An error occurred!" });
    res.status(200).send({ message: "Success", deleted });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
}
