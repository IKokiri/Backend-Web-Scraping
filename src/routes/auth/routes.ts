import { Request, Response, Router } from 'express';
import controller from '../..';

const router = Router();

router.put('/notebook/:id', (req: Request, res: Response) => {
    return controller.update(req, res);
});

router.get('/crawler', (req: Request, res: Response) => {
    controller.crawler(req, res);
});

router.get('/crawler/findById/:id', (req: Request, res: Response) => {
    controller.crawlerDetails(req, res);
});

router.post('/order', (req: Request, res: Response) => {
    return controller.createOrder(req, res);
});

router.get('/notebook', (req: Request, res: Response) => {
    return controller.getAllNotebooks(req, res);
});

router.delete('/notebook/:id/remove', (req: Request, res: Response) => {
    return controller.removeNotebook(req, res);
});

export default router;
