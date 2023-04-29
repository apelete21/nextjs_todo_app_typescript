import { jwtAuth } from "@/libs";
import { Group } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  const method = req.method;
  if (method !== "PUT")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const { ok, _id } = jwtAuth(req, res, next);
  if (!ok && !_id)
    return res.status(401).send({ message: "Authentication failed!" });

  const { title }: any = req.body;
  const { id }: any = req.query;

  if (!title) return res.status(401).send({ message: "title is required" });
  if (!id) return res.status(401).send({ message: "No group specified!" });

  try {
    const updatedGroup = await Group.findOneAndUpdate({ _id: id, title });
    if (!updatedGroup)
      return res.status(500).send({ message: " An error occurred!" });
    res.status(200).send({ message: "Success", updatedGroup });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
}
