import express from 'express';

const app = express();

app.set('port', 9000);

app.get('/', (req, res) => {
    res.send('olá');
});

export default app;
