import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';
import { Prisma } from '@prisma/client';

export const createNewInstallmentPurchase = async (
  req: Request,
  res: Response
) => {

  const {
    description,
    amountOfInstallment,
    installmentValue,
    totalExpense,
    dueDay
  } = req.body;

  if (description == "") {
    throw new Error("Preencha o campo descrição");
  }

  if (amountOfInstallment == "") {
    throw new Error("Preencha o campo Quantidade de Parcelas");
  }

  if (totalExpense == "") {
    throw new Error("Preencha o campo Preço Total");
  }
  
  if (dueDay == "") {
    throw new Error("Preencha o campo Data de Vencimento da Parcela");
  }

  const newInstallmentPurchase = await prisma.installmentPurchases.create({
    data: {
      description,
      amountOfInstallment: Number(amountOfInstallment),
      installmentValue: Number(installmentValue),
      totalExpense: Number(totalExpense),
      dueDay: Number(dueDay),
      userId: req.user.id,
    }
  });

  res.status(201).json({ newInstallmentPurchase });
}

export const listUserInstallmentPurchase = async (
  req: Request,
  res: Response
) => {

  const installmentPurchases = await prisma.installmentPurchases.findMany({
    where: { userId: req.user.id, },
    select: {
      id: true,
      description: true,
      amountOfInstallment: true,
      dueDay: true,
      installmentValue: true,
      totalExpense: true,
      isPayed: true,
    }
  });

  res.status(201).json({ installmentPurchases });
}
