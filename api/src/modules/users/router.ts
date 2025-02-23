import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { checkEmail, createUser, listUsers, userDetails, userSignIn } from './controller';

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

router
  .route('/users/send_email_code/:email')
  .get(checkEmail);

export { router as UsersRouter };
