import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';

export const createRevenue = async (
  req: Request,
  res: Response,
) => {

  const {
    description,
    value
  } = req.body;

  if (description == "") {
    throw new Error("Insira uma descrição para a receita");
  }
  
  if (value == "") {
    throw new Error("Insira um valor para a receita");
  }

  const revenue = await prisma.revenue.create({
    data: {
      description,
      value: Number(value),
      userId: req.user.id,
    }
  });

  res.status(201).json({ revenue });
}
