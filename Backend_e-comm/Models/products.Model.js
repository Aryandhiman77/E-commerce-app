const mongoose = require('mongoose')
const productSchema = new mongoose.Schema ({
    product_name:{
        type:String,
        required:true
    },
    product_images:[],
    product_url_slug:{
        type: String,
        unique:true,
        sparse:true
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    description:{
        type:String,
        required:true,  
    },
    price:{
        type:Number,
        required:true,
        set: (v) => {
            return Math.round(v * 100) / 100; //! rounding off the value*100 and dividing by 100 to get 2 decimal places
        }
    },
    stock_quantity:{
        type:Number
    },
    product_status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }
})
const Product = mongoose.model('product',productSchema)
module.exports = Product