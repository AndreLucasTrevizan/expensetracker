import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';
import { getMonth } from '../../util';

export const listMonthInvoices = async (
  req: Request,
  res: Response
) => {

  const month = req.query.month as string;

  let monthGt = getMonth(month);

  const invoices = await prisma.payments.findMany({
    where: { 
      userId: req.user.id,
      invoice: true,
      createdAt: {
        gt: new Date(new Date().setMonth(monthGt-1)),
        lt: new Date(new Date().setMonth(monthGt)),
      }
    },
  });

  let values = invoices.reduce((total, invoice) => {
    return total += Number(invoice.price);
  }, 0);

  res.json({ invoice: { total: values.toFixed(2) } });
}
