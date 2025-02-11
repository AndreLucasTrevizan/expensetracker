import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createNewPayment } from './controller';

const router = Router();

router
  .route('/payments')
  .post(authMiddleware, createNewPayment);

export { router as PaymentsRouter }
