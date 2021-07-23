const express = require('express')

const app = express();

const PORT = 3000

app.get('/', (req:any,res:any)=>{
    res.send("olá")
})

app.listen(PORT,()=>{
    console.log(`Alive in ${PORT}`)
})