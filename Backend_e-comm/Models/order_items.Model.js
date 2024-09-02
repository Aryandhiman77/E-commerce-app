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
    size:{
        type:String,
        default:null
    },
    price:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }
    },
    quantity:{
        type:Number,
        required:true
    },
    total_amount:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }
    }
})

const Order_item = mongoose.model('orderItem',orderItemSchema)
module.exports = Order_item