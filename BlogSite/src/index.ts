import express from 'express';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const prisma = new PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
    }).$extends(withAccelerate())
    // prisma.$connect()
    res.send("Success");
})

app.post('/api/v1/user/signup',(req,res)=>{
    res.send("Success1");
})

app.post('/api/v1/user/signin',(req,res) => {
    res.send("Success2");
})

app.post('/api/v1/blog',(req,res) => {
    res.send("Success");
})


app.put('/api/v1/blog',(req,res) => {
    
})


app.get('/api/v1/blog/:id',(req,res) => {
    
})

app.post('/post', (req,res) => {
    res.json("Final response")
})

app.listen(port, ()=>{
    console.log("Listening on port ",port);
    
})