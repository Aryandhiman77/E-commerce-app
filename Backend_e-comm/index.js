const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
const categoryRouter = require('./routes/category.route')
const productVarientsrouter = require('./routes/productVarient.route')
const cors = require('cors')
const path = require('path')
require('dotenv').config();
require('./config/dbConn')

//! express middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/utilities')))
app.use(express.static(path.join(__dirname,'/uploads')))

//! Cors middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
//! routing for register,login -> (Authentication,Authorization)
app.use('/auth/',userRouter)
//! routung for various operations on products -> (CRUD)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/varient',productVarientsrouter)
app.use('/api/v1',categoryRouter)



app.listen(8000,()=>{
    console.log('e-commerce backend listening on:http://localhost:8000')
});