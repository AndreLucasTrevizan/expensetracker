import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createOperation, listOperations } from './controller';

const router = Router();

router
  .route('/operations')
  .get(authMiddleware, listOperations)
  .post(authMiddleware, createOperation);

export { router as OperationsRouter };
