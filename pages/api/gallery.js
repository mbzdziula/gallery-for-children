import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      const post = req.body;
      const result = await prisma.gallery.create({
        data: {
          id_image: post.id_image,
          title: post.title,
          autor: post.autor,
          description: post.description,
          tag: post.tag,
          great: 0,
          like: 0,
        },
      });
      return res.json(result);
    }
    // case 'DELETE': {
    //   const id = req.body;
    //   const result = await prisma.gallery.delete({ where: { id: id.id } });
    //   return res.json(result);
    // }
    // case 'PATCH': {
    //   const updateTodo = req.body;
    //   const result = await prisma.todos.update({
    //     where: { Id: updateTodo.Id },
    //     data: {
    //       Todo: updateTodo.Todo,
    //       IsDone: updateTodo.IsDone,
    //       Like: updateTodo.Like,
    //       Comment: updateTodo.Comment,
    //       Date: updateTodo.Date,
    //       Project: updateTodo.Project,
    //       ProjectId: updateTodo.ProjectId,
    //     },
    //   });
    //   return res.json(result);
    // }
    default: {
      const result = await prisma.gallery.findMany({
        orderBy: {
          CreatedAt: 'desc',
        },
        // take: 1,
      });
      return res.json(result);
    }
  }
}
