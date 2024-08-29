const mongoose = require('mongoose')
const productVarientSchema = new mongoose.Schema ({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    color:{
        type: String
    },
    size:{
        type: String
    },
    price:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round(v * 100) / 100
        }
    },
    stock_quantity:{
        type:Number,
        required:true,
        default:0,
    }
})

const ProductVarient = mongoose.model('productVarient',productVarientSchema)
module.exports = ProductVarient