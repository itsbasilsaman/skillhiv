import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  res.status(200).json({ user: session?.user || null });
}