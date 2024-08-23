const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/E-cart').then(()=>{
    console.log('Connected to E-commerce database')
})