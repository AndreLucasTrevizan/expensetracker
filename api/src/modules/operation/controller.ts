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

interface OperationType {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createOperation = async (
  req: Request,
  res: Response,
) => {

  const operations = req.body.operations as OperationType[];

  if (operations.length == 0) {
    throw new Error("Preencha o campo operations");
  }

  let error = false;
  let operation_name = '';

  operations.forEach(async (operation) => {
    const found_operation = await prisma.operation.findFirst({
      where: {
        name: operation.name,
      }
    });

    if (found_operation) {
      error = true;
      operation_name = operation.name;
    }
  });

  if (error) {
    throw new Error(`Já existe uma operação com esse nome ${operation_name.toUpperCase()}`);
  } else {
    res.status(201).json({});
  }
}
