import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { listMonthInvoices } from './controller';

const router = Router();

router
  .route('/invoices')
  .get(authMiddleware, listMonthInvoices);

export { router as InvoicesRouter }
