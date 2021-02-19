import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { name },
  } = req;

  function capitalize(name) {
    return name && name[0].toUpperCase() + name.slice(1);
  }

  const result =
    name !== 'page'
      ? await prisma.gallery.count({
          where: {
            OR: [{ autor: capitalize(name) }, { autor: 'Praca wspólna' }],
          },
        })
      : await prisma.gallery.count();
  return res.json(result);
}
