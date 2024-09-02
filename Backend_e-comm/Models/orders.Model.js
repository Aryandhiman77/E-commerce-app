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
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }
    },
    discount_amount:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }

    },
    gross_amount:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }

    },
    shipping_amont:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }

    },
    net_amount:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round((v*100)/100);
        }

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