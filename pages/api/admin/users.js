import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import exp from "constants";

const prisma = new PrismaClient;



export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    console.debug('>>>>>', req.method, 'запрос на', req.url, 'session =', session);
    // console.debug('_____', session?.user?.id);
    if (session && admin === session.user.role) {
        try {
            return res.status(200)
                .json( await prisma.user.findMany());
        } catch (error) {
            console.log(__filename, error);
            res.status(500).send({ error });
        }
    } else {
        res.status(403).send({
            error: 'Для продолжения работы, необходимы права администратора',
        });
    }
}