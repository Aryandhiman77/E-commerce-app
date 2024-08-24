const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema ({
    order_no:{
        type:mongoose.Schema.Types.ObjectId.toString().slice(10),
        ref:'user'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    total_amount:{
        type:Float32Array,
        required:true
    },
    discount_amount:{
        type:Float32Array,
        required:true
    },
    gross_amount:{
        type:Float32Array,
        required:true
    },
    shipping_amont:{
        type:Float32Array,
        required:true
    },
    net_amount:{
        type:Float32Array,
        required:true
    },
    status:{
        type:String,
        enum:['placed' , 'processing' , 'shipping' , 'delivered'],
        required:true
    },
    payment_status:{
        type:String,
        enum:['paid' , 'notpaid'],
        required:true
    },
    payment_type:{
        type:String,
        enum:['netbanking' , 'upi','cod'],
        required:true
    },
    payment_transaction_id:{
        type:String,
        required:true
    },
    zip_code:{
        type:Number,
        required:true
    }
})

const Order = mongoose.model('order',OrderSchema)
module.exports = Order