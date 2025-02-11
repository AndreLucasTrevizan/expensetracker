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

export const createOperation = async (
  req: Request,
  res: Response,
) => {

  const {
    name
  } = req.body;

  if (name == "") {
    throw new Error("Preencha o campo nome");
  }

  const new_operation = await prisma.operation.create({
    data: {
      name,
    }
  });

  res.status(201).json({ new_operation });
}
