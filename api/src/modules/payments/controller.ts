import {
  Request,
  Response
} from 'express';
import { prisma } from '../../prisma';
import { Prisma } from '@prisma/client';

export const createNewPayment = async (
  req: Request,
  res: Response
) => {

  const {
    description,
    price,
    isInstallment,
    installmentPurchaseId,
    operationId,
    invoice
  } = req.body;

  if (description == "") {
    throw new Error("Preencha o campo descrição");
  }

  if (price == "") {
    throw new Error("Preencha o campo Preço");
  }

  if (isInstallment == "") {
    throw new Error("Preencha o campo É pagamento de parcela ?");
  }
  
  if (installmentPurchaseId == "") {
    throw new Error("Selecione uma das compras parceladas que você possui");
  }

  if (operationId == "") {
    throw new Error("Selecione uma operação de pagamento");
  }

  const operation = await prisma.operation.findFirst({
    where: {
      id: operationId,
    }
  });

  if (!operation) {
    throw new Error("Operação não encontrada");
  }

  const userTotals = await prisma.total.findFirst({
    where: { userId: req.user.id },
  });

  if (!userTotals) {
    throw new Error("Não encontramos os saldos do usuários");
  }

  const saldo = new Prisma.Decimal(userTotals.valueWallet).sub(new Prisma.Decimal(price));

  if (saldo.toNumber() <= 0) {
    throw new Error("Não á saldo o suficiente para efetuar o pagamento");
  }

  if (isInstallment == "true") {
    const installmentPurchase = await prisma.installmentPurchases.findFirst({
      where: { id: Number(installmentPurchaseId) }
    });

    if (!installmentPurchase) {
      throw new Error("Compra parcelada não encontrada");
    }

    const newPayment = await prisma.payments.create({
      data: {
        description,
        price: new Prisma.Decimal(price),
        isIstallment: true,
        installmentPurchaseId: installmentPurchase.id,
        operationId: operation.id,
        userId: req.user.id,
      }
    });

    await prisma.total.update({
      where: { id: userTotals.id },
      data: {
        valueWallet: userTotals.valueWallet.sub(new Prisma.Decimal(price)),
      }
    });

    res.status(201).json({ newPayment });
  } else if (isInstallment == "false" && invoice == "true") {
    const card_operation = await prisma.operation.findFirst({
      where: {
        name: "Cartão",
      }
    });

    if (!card_operation) {
      throw new Error("Operação inválida");
    } else {
      const newPayment = await prisma.payments.create({
        data: {
          description,
          price,
          isIstallment: false,
          installmentPurchaseId: null,
          operationId: card_operation.id,
          userId: req.user.id,
          invoice: true,
        }
      });

      res.status(201).json({ newPayment });
    }
  } else {
    const newPayment = await prisma.payments.create({
      data: {
        description,
        price,
        isIstallment: false,
        installmentPurchaseId: null,
        operationId: operation.id,
        userId: req.user.id,
        invoice: true,
      }
    });

    await prisma.total.update({
      where: { id: userTotals.id },
      data: {
        valueWallet: userTotals.valueWallet.sub(new Prisma.Decimal(price)),
      }
    });

    res.status(201).json({ newPayment });
  }
}

export const listUserPayments = async (
  req: Request,
  res: Response,
) => {
  let month = req.query.month as string;//1
  let invoice = req.query.invoice as string;//1
  let monthGt = 0;

  if (month && month != "") {
    for (let i = 0; i <= 12; i++) {
      if (i+1 == Number(month)) {
        monthGt = i;
      }
    }

    const payments = await prisma.payments.findMany({
      where: {
        userId: req.user.id,
        createdAt: {
          gt: new Date(new Date().setMonth(monthGt-1)),
          lt: new Date(new Date().setMonth(monthGt)),
        },
        invoice: (invoice == "true") ? true : false,
      },
      select: {
        id: true,
        description: true,
        price: true,
        isIstallment: true,
        invoice: true,
        createdAt: true,
      }
    });

    res.json({ payments });
  } else {
    const payments = await prisma.payments.findMany({
      where: { userId: req.user.id },
      select: {
        id: true,
        description: true,
        price: true,
        isIstallment: true,
        createdAt: true,
      }
    });

    res.json({ payments });
  }
}
