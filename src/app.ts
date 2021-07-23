import express from 'express';

// Controllers routes
import info from './controllers/info';

const app = express();

app.set('port', 9000);

app.get('/', info);

export default app;
