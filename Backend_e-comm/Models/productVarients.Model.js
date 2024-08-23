const mongoose = require('mongoose')
const productSchema = new mongoose.Schema ({
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
    price:Decimal128,
    Stock_quantity:{
        type:Number,
        required:true,
        default:0,
    }
})

const Product = mongoose.model('product',productSchema)
module.exports = Product