import {
  createToken,
  encrypt,
  mongoConnect,
  validEmail,
  validPwd,
} from "@/libs";
import { User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method !== "POST")
    return res.status(401).send({ message: `Cannot ${method} at ${req.url}` });

  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(401).send({ message: `All fields are required!` });

  if ((await validEmail(email)) === false || (await validPwd(password)))
    return res.status(401).send({ message: `Invalid Email or password` });

  try {
    await mongoConnect();
    const oldUser: Object | null = await User.findOne({ email });
    if (oldUser)
      return res
        .status(401)
        .send({ message: `User with ${email} already exists!` });

    const cryptedPassword: string = await encrypt(password);

    const newUser = await User.create({
      name,
      email,
      password: cryptedPassword,
    });

    const token = createToken(newUser?._id);

    res.status(200).send({ message: "Success", newUser, token });
  } catch (error: any) {
    return res.status(500).send({ message: `${error.message}` });
  }
}
