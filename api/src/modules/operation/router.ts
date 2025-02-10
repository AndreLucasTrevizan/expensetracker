import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { listOperations } from './controller';

const router = Router();

router
  .route('/operations')
  .get(authMiddleware, listOperations);

export { router as OperationsRouter };
