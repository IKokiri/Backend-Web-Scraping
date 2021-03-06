import { createConnection } from 'typeorm';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';

// Controllers routes
import Notebook from './entity/Notebook';
import User from './entity/User';
import UserOrder from './entity/UserOrder';
import authRouter from './routes/auth/routes';
import publicRouter from './routes/public/routes';
import swaggerDocs from './docs/swagger.json';
import MiddlewareAuth from './infrastructure/middleware/authenticate/MiddlewareAuth';
/**
 * database connector
 */
const connection = async () => {
    await createConnection();
};

connection();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1', publicRouter);
app.use('/v1', MiddlewareAuth, authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.set('port', process.env.BACKEND_PORT);

export default app;
