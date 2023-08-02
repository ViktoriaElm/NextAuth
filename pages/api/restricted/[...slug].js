import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../auth/[...nextauth]';



const prisma = new PrismaClient({
  // log: ['query','info'],
  // errorFormat:'pretty'
});

export default async function handler(req, res) {
  try { // обернем все в try-catch
  const { slug } = req.query,
    [table, id] = slug,
    session = await getServerSession(req, res, authOptions);
  console.debug('>> ', req.method, ' запрос на', req.url, 'slug =', { table, id });
  if (req.body) console.debug('req.body=', JSON.stringify(req.body));
  if (!session) throw new Error('Вы должны залогиниться для доступа к этому API');
  if (!['candidate'].includes(table)) throw new Error('Доступ к неизвестной таблице');
  switch (req.method) {
    // case 'OPTIONS':  // это может потребоваться для доступа с другого домена
    //   return res.status(200).send(''); 
    case 'GET':
      return res.status(200).json(await prisma[table].findMany({orderBy: {id:'asc'}}));
    case 'POST':
      return res.status(200).json(await prisma[table].create({
        data: Object.fromEntries(new URLSearchParams(req.body).entries())
      }));
    case 'DELETE':
      return res.status(204).json(await prisma[table].delete({
        where: {
          id: +id
        }
      }));
    case 'PUT':
      return res.status(201).json(await prisma[table].update({
        where: {
          id: +id
        },
        data: Object.fromEntries([...new URLSearchParams(req.body).entries()].filter(([n]) => 'id' !== n))
      }));

  }

  } catch (error) {
    console.error(__filename, error.message);
    res.status(500).json({ error:error.message });    
  }
}