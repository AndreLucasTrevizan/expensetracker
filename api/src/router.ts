import { Request, Response, Router } from 'express';
import { UsersRouter } from './modules/users/router';
import { OperationsRouter } from './modules/operation/router';
import { TotalsRouter } from './modules/totals/router';
import { RevenueRouter } from './modules/revenue/router';
import { PaymentsRouter } from './modules/payments/router';
import { InstallmentPurchasesRouter } from './modules/installmentPurchases/router';

const router = Router();

router.get('/errors', (req: Request, res: Response) => {
  throw new Error('Error test ok');
});

router.use(UsersRouter);
router.use(OperationsRouter);
router.use(TotalsRouter);
router.use(RevenueRouter);
router.use(PaymentsRouter);
router.use(InstallmentPurchasesRouter);

export default router;
