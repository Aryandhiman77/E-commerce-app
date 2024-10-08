const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema ({

    order_no:{  // from razorpay
        type:String,
        unique:true,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
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
    shipping_amount:{
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
    paymentby:{
        type:String,
        default:null
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
        enum:['card','netbanking','upi','cod'],
        required:true
    },
    payment_transaction_id:{
        type:String,
    },
    auth_code:{
        type:String
    }
    
})

const Order = mongoose.model('order',OrderSchema)
module.exports = Order