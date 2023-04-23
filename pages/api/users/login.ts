import { mongoConnect } from "@/libs";
import { User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method !== "POST")
    return res.status(405).send({ message: `Cannot ${method} at ${req.url}` });

  const { email, password } = req.body;
  if (!email || !password)
    return res.status(425).send({ message: `All fields are required!` });

  try {
    await mongoConnect();
    const user: any = await User.findOne({ email });
    if (!user)
      return res
        .status(405)
        .send({ message: `User with ${email} not exists!` });
    
    if (user?.password !== password) 
        return res
            .status(405)
            .send({ message: `Invalid email or password!` });

    res.status(200).send({ message: "Success", user });
  } catch (error: any) {
    return res.status(500).send({ message: `${error.message}` });
  }
}
