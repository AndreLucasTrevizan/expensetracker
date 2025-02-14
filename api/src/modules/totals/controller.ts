import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';
import { getMonth } from '../../util';

export const listUserTotals = async (
  req: Request,
  res: Response,
) => {
  let actualMonth = new Date(Date.now()).getMonth();
  
  let monthGt = getMonth(String(actualMonth));

  const totals = await prisma.total.findFirst({
    where: { userId: req.user.id },
    select: {
      id: true,
      valueWallet: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  const invoiceMonthValue = await prisma.payments.aggregate({
    _sum: {
      price: true,
    },
    where: {
      userId: req.user.id,
      invoice: true,
      createdAt: {
        gt: new Date(new Date().setMonth(monthGt-1)),
        lt: new Date(new Date().setMonth(monthGt)),
      },
    }
  });

  if (!totals) {
    throw new Error('Nenhum registro encontrado para o usuário');
  }

  res.json({ ...totals, valueInvoice: invoiceMonthValue });
}
