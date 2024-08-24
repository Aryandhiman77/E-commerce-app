const mongoose = require('mongoose')
const orderItemSchema = new mongoose.Schema ({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'order'
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    product_variant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productVarient'
    },
    product_name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        default:null
    },
    Size:{
        type:String,
        default:null
    },
    price:{
        type:Float32Array,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    total_amount:{
        type:Float32Array,
        required:true
    }
})

const Order_item = mongoose.model('orderItem',orderItemSchema)
module.exports = Order_item