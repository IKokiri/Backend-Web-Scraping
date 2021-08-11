import { Request, Response, Router } from 'express';
import controller from '../..';

const router = Router();

router.post('/user/login', (req: Request, res: Response) => {
    return controller.login(req, res);
});

export default router;
