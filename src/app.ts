import { createConnection } from 'typeorm';
import express from 'express';

// Controllers routes
import info from './controllers/info';
import crawler from './controllers/crawler';
import Notebook from './Entity/Notebook';
import crawlerDetails from './controllers/crawlerDetails';
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

app.get('/', info);
app.get('/v1/crawler', crawler);
app.get('/v1/crawlerDetail/:id', crawlerDetails);

app.use(routerUser);

export default app;
