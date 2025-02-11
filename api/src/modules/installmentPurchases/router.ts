import {
  Router
} from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createNewInstallmentPurchase, listUserInstallmentPurchase } from './controller';

const router = Router();

router
  .route('/installment/purchases')
  .get(authMiddleware, listUserInstallmentPurchase)
  .post(authMiddleware, createNewInstallmentPurchase);

export { router as InstallmentPurchasesRouter }
