import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { createUser, listUsers, userDetails, userSignIn } from './controller';

const router = Router();

router
  .route('/users')
  .get(authMiddleware, listUsers)
  .post(createUser);

router
  .route('/users/details')
  .get(authMiddleware, userDetails);

router
  .route('/sign_in')
  .post(userSignIn);

export { router as UsersRouter };
