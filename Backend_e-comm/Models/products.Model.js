const mongoose = require('mongoose')
const productSchema = new mongoose.Schema ({
    product_name:{
        type:String,
        required:true
    },
    url_slug:{
        type: String,
        unique:true,
        required:true
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        required:true,
    }
})

const Product = mongoose.model('product',productSchema)
module.exports = Product