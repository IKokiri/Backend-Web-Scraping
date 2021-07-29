import { Request, Response, Router } from 'express';
import controller from '.';

const router = Router();
router.get('', (req: Request, res: Response) => {
    return res.status(200).json('Olá, eu sou a versão 1 da aplicação');
});

router.post('/user', (req: Request, res: Response) => {
    return controller.create(req, res);
});

router.get('/user/login', (req: Request, res: Response) => {
    return controller.login(req, res);
});

router.get('/crawler', (req: Request, res: Response) => {
    controller.crawler(req, res);
});

router.get('/crawlerDetail/:id', (req: Request, res: Response) => {
    controller.crawlerDetails(req, res);
});

router.post('/order', (req: Request, res: Response) => {
    return controller.createOrder(req, res);
});


export default router;
