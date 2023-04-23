import { mongoConnect } from "@/libs";
import { User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method !== "POST")
    return res.status(405).send({ message: `Cannot ${method} at ${req.url}` });

  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(425).send({ message: `All fields are required!` });

  try {
    await mongoConnect();
    const oldUser = await User.findOne({ email });
    if (oldUser)
      return res
        .status(425)
        .send({ message: `User with ${email} already exists!` });

    const newUser = await User.create({ name, email, password });
    res.status(200).send({ message: "Success", newUser });
  } catch (error: any) {
    return res.status(500).send({ message: `${error.message}` });
  }
}
