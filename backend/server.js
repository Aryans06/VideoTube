import express from 'express';
const app=express()
import dotenv from 'dotenv';
dotenv.config()

const port=process.env.PORT||3000
app.get('/',(req,res)=>{
    res.send("Hello there");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"joke1",
            joke:"Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id:2,
            title:"joke2",
            joke:"Why did the math book look sad? Because it had too many problems."    
        },
        {
            id:3,
            title:"joke3",
            joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"
        }
    
    
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})