require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/',(req,res)=>{
res.send("Hello world!")
})

app.get('/hello',(req,res)=>{
    res.send("Haanji");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
