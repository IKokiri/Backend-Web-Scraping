import { Request, Response } from 'express';

const crawler = (req: Request, res: Response) => {
    res.status(200).json({ status: true });
};

export default crawler;
