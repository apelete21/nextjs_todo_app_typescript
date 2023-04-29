import type { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY: string = process.env.JWT_SECRET_KEY || "";

export function jwtAuth(req: NextApiRequest, res: NextApiResponse, next: any) {
  const authorization: any = req.headers.authorization;
  try {
    const token: any = authorization.split(" ")[1];
    const decode: any = jwt.verify(token, SECRET_KEY);
    const { _id }: JwtPayload = decode;
    next();
    return { ok: true, _id };
  } catch (error: any) {
    return { ok: false };
  }
}
