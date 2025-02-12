import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createNewPayment, listUserPayments } from './controller';

const router = Router();

router
  .route('/payments')
  .post(authMiddleware, createNewPayment)
  .get(authMiddleware, listUserPayments);

export { router as PaymentsRouter }
