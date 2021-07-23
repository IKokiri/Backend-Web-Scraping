import express from 'express';

const app = express();

const PORT = 3000

app.get('/', (req,res)=>{
    res.send("olá")
})

app.listen(PORT,()=>{
    console.log(`Alive in ${PORT}`)
})