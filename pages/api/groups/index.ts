import { jwtAuth } from "@/libs";
import { Group } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method !== "GET")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const authorization: any = req.headers.authorization;
  const token: any = authorization.split(" ")[1];
  const { ok, _id } = jwtAuth(token);
  if (!ok) return res.status(401).send({ message: "Authentication failed!" });
  try {
    const groups = await Group.find({ author: _id });
    if (!groups)
      return res.status(500).send({ message: " An error occurred!" });
    res.status(200).send({ message: "Success", groups });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
}
