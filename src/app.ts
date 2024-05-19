import express from 'express'


const app = express();

app.get("/",(req,res,next)=>{
    res.json("hello world");
});

export default app;