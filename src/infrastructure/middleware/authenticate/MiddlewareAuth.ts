import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function MiddlewareAuth(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const auth = req.headers.authorization;
    try {
        const token = auth?.replace('Bearer', '').trim();
        const data = jwt.verify(String(token), 'secret');
        next();
    } catch {
        res.status(401).send();
    }
    return false;
}
