import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function MiddlewareAuth(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const auth = req.headers.authorization;
    try {
        const token = auth
            ?.replace('Bearer', '')
            .replace('"', '')
            .replace('"', '')
            .trim();
        const data = jwt.verify(String(token), `${process.env.BACKEND_PORT}`);
        next();
    } catch {
        res.status(401).send();
    }
    return false;
}
