import jwt from "jsonwebtoken";

export const createToken = (_id: string) => {
  const jwtkey: string = process.env.JWT_SECRET_KEY || "";

  if (!jwtkey || jwtkey === "") {
    throw new Error("Internal server error!");
  } else {
    return jwt.sign({ _id }, jwtkey, { expiresIn: "5h" });
  }
};
