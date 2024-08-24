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
    price:Decimal128,
    Stock_quantity:{
        type:Number,
        required:true,
        default:0,
    }
})

const ProductVarient = mongoose.model('productVarient',productVarientSchema)
module.exports = Product