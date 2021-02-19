import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { type },
    query: { id },
  } = req;

  const newId = Number(id);

  switch (req.method) {
    case 'PATCH': {
      const value = req.body;

      switch (type) {
        case 'great': {
          const great = await prisma.gallery.findUnique({ where: { id: newId } });
          const newValue = great.great + value.value;

          const result = await prisma.gallery.update({
            where: { id: newId },
            data: {
              great: newValue,
            },
          });
          return res.json(result);
        }
        case 'like': {
          const like = await prisma.gallery.findUnique({ where: { id: newId } });
          const newValue = like.like + value.value;
          const result = await prisma.gallery.update({
            where: { id: newId },
            data: {
              like: newValue,
            },
          });
          return res.json(result);
        }

        default:
          return res.end('Wrong type of action');
      }
    }
    default: {
      return res.end('Only for like and great');
    }
  }
}
