import { Request, Response, Router } from 'express';
import controller from '.';

const router = Router();

router.post('/v1/user', (req: Request, res: Response) => {
    return controller.create(req, res);
});

router.get('/v1/user/login', (req: Request, res: Response) => {
    return controller.login(req, res);
});

router.post('/v1/order', (req: Request, res: Response) => {
    return controller.createOrder(req, res);
});

export default router;
