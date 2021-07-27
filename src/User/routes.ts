import { Request, Response, Router } from 'express';
import { controller } from '.';

const router = Router();

router.post('/v1/user', (req: Request, res: Response) => {
    console.log(req.body);
    return controller.create(req, res);
});

export default router;
