import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { listUserTotals } from './controller';

const router = Router();

router.route('/user/totals').get(authMiddleware, listUserTotals);

export { router as TotalsRouter }
