import { Request, Response } from "express"
import { prisma } from "../../prisma/prisma";

export default async function viewThread(req: Request, res: Response) {
    const thread = await prisma.threads.findUnique({
        where: {
            id: req.params.id,
        },
    });
    return res.status(200).json({
        thread,
    });
}