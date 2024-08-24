const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const cors = require('cors')
const path = require('path')
require('dotenv').config();
require('./config/dbConn')
//! express middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/utilities')))

//! Cors middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
//! routing for register,login (Authentication,Authorization)
app.use('/auth/',userRouter)

app.listen(8000,()=>{
    console.log('e-commerce backend listening on:http://localhost:8000')
});