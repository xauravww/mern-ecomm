const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const { job } = require('./cron')

job.start()

const app = express()
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors({
    credentials:true,
    origin: ['http://localhost:5500','http://127.0.0.1:5500','http://localhost:3000','https://mern-ecomm-gco0.onrender.com']
    }));
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT =  process.env.PORT || 8080


app.get("/",(req,res)=>{
res.json({result:'success',message:"Server is running successfully"})
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
