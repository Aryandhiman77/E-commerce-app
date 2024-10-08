const mongoose = require('mongoose')
const productSchema = new mongoose.Schema ({
    product_name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    product_images:[{
        type:String
    }],
    product_url_slug:{
        type: String,
        unique:true,
        sparse:true
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    varients_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productVarient'
    }],
    description:{
        type:String,
        unique:true,   //todo rich description for html formatter input
        required:true
    },
    rich_description:{
        type:String
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
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date,
        default:null
    },
    product_status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }
})
const Product = mongoose.model('product',productSchema)
module.exports = Product