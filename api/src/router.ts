import { Request, Response, Router } from 'express';
import { UsersRouter } from './modules/users/router';
import { OperationsRouter } from './modules/operation/router';

const router = Router();

router.get('/errors', (req: Request, res: Response) => {
  throw new Error('Error test ok');
});

router.use(UsersRouter);
router.use(OperationsRouter);

export default router;
