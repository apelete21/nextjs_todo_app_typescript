import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string | null | undefined
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(500).send({
        message: "Internal server error",
    });
}
