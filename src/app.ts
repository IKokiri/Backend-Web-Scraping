import { createConnection } from 'typeorm';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

// Controllers routes
import Notebook from './Entity/Notebook';
import User from './Entity/User';
import UserOrder from './Entity/UserOrder';
import router from './routes';
import swaggerDocs from './docs/swagger.json';
/**
 * database connector
 */
createConnection({
    type: 'sqlite',
    database: 'backendwebscraping.sqlite',
    synchronize: true,
    logging: true,
    entities: [Notebook, User, UserOrder],
});

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.set('port', 9000);

app.use('/v1', router);

export default app;
