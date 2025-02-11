import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';

export const listUserTotals = async (
  req: Request,
  res: Response,
) => {

  const totals = await prisma.total.findFirst({
    where: { userId: req.user.id },
    select: {
      id: true,
      valueCard: true,
      valueWallet: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  if (!totals) {
    throw new Error('Nenhum registro encontrado para o usuário');
  }

  res.json({totals});
}
