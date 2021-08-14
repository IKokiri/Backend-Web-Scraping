import { createConnection } from 'typeorm';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// Controllers routes
import Notebook from './Entity/Notebook';
import User from './Entity/User';
import UserOrder from './Entity/UserOrder';
import authRouter from './routes/auth/routes';
import publicRouter from './routes/public/routes';
import swaggerDocs from './docs/swagger.json';
import MiddlewareAuth from './infrastructure/middleware/authenticate/MiddlewareAuth';
/**
 * database connector
 */
createConnection({
    type: 'sqlite',
    database: 'backendwebscraping.sqlite',
    synchronize: false,
    logging: false,
    entities: [Notebook, User, UserOrder],
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1', publicRouter);
app.use('/v1', MiddlewareAuth, authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.set('port', 9000);

export default app;
