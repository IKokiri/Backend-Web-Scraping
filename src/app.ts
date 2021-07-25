import { createConnection } from 'typeorm';
import express from 'express';

// Controllers routes
import info from './controllers/info';
import crawler from './controllers/crawler';
import Notebook from './Entity/Notebook';

/**
 * database connector
 */
createConnection({
    type: 'sqlite',
    database: 'backendwebscraping.sqlite',
    synchronize: true,
    logging: true,
    entities: [Notebook],
});

const app = express();

app.set('port', 9000);

app.get('/', info);
app.get('/v1/crawler', crawler);

export default app;
