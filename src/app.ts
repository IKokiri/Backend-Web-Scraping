import { createConnection } from 'typeorm';
import express from 'express';

// Controllers routes
import Notebook from './Entity/Notebook';
import User from './Entity/User';
import UserOrder from './Entity/UserOrder';
import router from './routes';

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
app.set('port', 9000);

app.use(router);

export default app;
