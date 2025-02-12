import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';

export const createNewInstallmentPurchase = async (
  req: Request,
  res: Response
) => {

  const {
    description,
    amountOfInstallment,
    installmentValue,
    totalExpense,
    partPayed,
    installmentsPayed,
    onCard,
    dueDay
  } = req.body;

  if (description == "") {
    throw new Error("Preencha o campo 'Descrição'");
  }

  if (amountOfInstallment == "") {
    throw new Error("Preencha o campo 'Quantidade de Parcelas'");
  }

  if (totalExpense == "") {
    throw new Error("Preencha o campo 'Preço Total'");
  }
  
  if (dueDay == "") {
    throw new Error("Preencha o campo 'Data de Vencimento da Parcela'");
  }
  
  if (onCard == "") {
    throw new Error("Preencha o campo 'Parcelado no Cartão?'");
  }

  if (partPayed != undefined && partPayed != "") {
    if (installmentsPayed == "") {
      throw new Error("Preencha o campo 'Quantidade de Parcelas Pagas'");
    }
    
    const newInstallmentPurchase = await prisma.installmentPurchases.create({
      data: {
        description,
        amountOfInstallment: Number(amountOfInstallment),
        installmentValue: Number(installmentValue),
        totalExpense: Number(totalExpense),
        partPayed: true,
        installmentsPayed: Number(installmentsPayed),
        onCard: (onCard == "true") ? true : false,
        dueDay: Number(dueDay),
        userId: req.user.id,
      }
    });

    

    res.status(201).json({ newInstallmentPurchase });
  } else {


    const newInstallmentPurchase = await prisma.installmentPurchases.create({
      data: {
        description,
        amountOfInstallment: Number(amountOfInstallment),
        installmentValue: Number(installmentValue),
        totalExpense: Number(totalExpense),
        onCard: (onCard == "true") ? true : false,
        dueDay: Number(dueDay),
        userId: req.user.id,
      }
    });
  
    res.status(201).json({ newInstallmentPurchase });
  }
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
      partPayed: true,
      installmentsPayed: true,
      onCard: true,
      dueDay: true,
      installmentValue: true,
      totalExpense: true,
      isPayed: true,
    }
  });

  res.status(201).json({ installmentPurchases });
}


