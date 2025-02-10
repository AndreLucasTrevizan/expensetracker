import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';

export const listOperations = async (
  req: Request,
  res: Response,
) => {
  const operations = await prisma.operation.findMany();

  res.json({ operations });
}
