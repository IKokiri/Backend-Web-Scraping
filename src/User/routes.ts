import { Request, Response, Router } from 'express';
import { controller } from '.';

const router = Router();

router.post('/v1/user', (req: Request, res: Response) => {
    return controller.create(req, res);
});

export default router;
