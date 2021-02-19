import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { number },
    query: { name },
  } = req;

  const page = Number(number);
  const skipPost = (page - 1) * 10;

  function capitalize(name) {
    return name && name[0].toUpperCase() + name.slice(1);
  }

  const result =
    name !== 'page'
      ? await prisma.gallery.findMany({
          where: {
            OR: [{ autor: capitalize(name) }, { autor: 'Praca wspólna' }],
          },

          orderBy: {
            CreatedAt: 'desc',
          },
          skip: skipPost,
          take: 10,
        })
      : await prisma.gallery.findMany({
          orderBy: {
            CreatedAt: 'desc',
          },
          skip: skipPost,
          take: 10,
        });
  return res.json(result);
}
