import { jwtAuth } from "@/libs";
import { Group } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  const method = req.method;
  if (method !== "POST")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const { ok, _id } = jwtAuth(req, res, next);
  if (!ok && !_id)
    return res.status(401).send({ message: "Authentication failed!" });

  const { title } = req.body;

  if (!title) return res.status(401).send({ message: "title is required" });

  try {
    const newGroup = await Group.create({ author: _id, title });
    if (!newGroup)
      return res.status(500).send({ message: " An error occurred!" });
    res.status(200).send({ message: "Success", newGroup });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
}
