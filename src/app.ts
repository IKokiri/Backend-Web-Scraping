import { createConnection } from 'typeorm';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// Controllers routes
import Notebook from './Entity/Notebook';
import User from './Entity/User';
import UserOrder from './Entity/UserOrder';
import router from './routes';
import swaggerDocs from './docs/swagger.json';
import MiddlewareAuth from './infrastructure/middleware/authenticate/MiddlewareAuth';
/**
 * database connector
 */
createConnection({
    type: 'sqlite',
    database: 'backendwebscraping.sqlite',
    synchronize: true,
    logging: false,
    entities: [Notebook, User, UserOrder],
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1', router);
app.use(
    '/api-docs',
    MiddlewareAuth,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs),
);
app.set('port', 9000);

export default app;
