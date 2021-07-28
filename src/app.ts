import { createConnection } from 'typeorm';
import express from 'express';

// Controllers routes
import Notebook from './User/Entity/Notebook';
import User from './User/Entity/User';
import routerUser from './User/routes';
import UserOrder from './User/Entity/UserOrder';

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

app.use(routerUser);

export default app;
