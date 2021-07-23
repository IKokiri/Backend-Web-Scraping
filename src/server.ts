import express from 'express';

const app = express();

const PORT = 9000

app.get('/', (req,res)=>{
    res.send("olá")
})

app.listen(PORT,()=>{
    console.log(`Alive in ${PORT}`)
})