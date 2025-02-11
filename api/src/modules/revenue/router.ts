import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createRevenue } from './controller';

const router = Router();

router.route('/revenue').post(authMiddleware, createRevenue);

export { router as RevenueRouter }
