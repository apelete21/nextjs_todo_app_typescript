import { jwtAuth } from "@/libs";
import { Group } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  const method = req.method;
  if (method !== "DELETE")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const authorization: any = req.headers.authorization;
  const token: any = authorization.split(" ")[1];
  const { ok } = jwtAuth(token);
  if (!ok)
    return res.status(401).send({ message: "Authentication failed!" });

  const { id } = req.query;

  if (!id) return res.status(401).send({ message: "No group specified" });

  try {
    const deleted = await Group.deleteOne({ _id: id });
    if (!deleted)
      return res.status(500).send({ message: " An error occurred!" });
    res.status(200).send({ message: "Success", deleted });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
}
