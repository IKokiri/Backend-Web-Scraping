import express from 'express';

// Controllers routes
import info from './controllers/info';
import crawler from './controllers/crawler';

const app = express();

app.set('port', 9000);

app.get('/', info);
app.get('/v1/crawler', crawler);

export default app;
