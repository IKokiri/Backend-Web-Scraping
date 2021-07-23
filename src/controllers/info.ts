import { Request, Response } from 'express';

const info = (req: Request, res: Response) => {
    res.status(200).json({ status: true });
};

export default info;
