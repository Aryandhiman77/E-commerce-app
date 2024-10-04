const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema ({

    order_no:{  // 10 digit unique number -> must be done in backend
        type:String,
        ref:'order',
        unique:true
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
        enum:['netbanking','upi','cod'],
        required:true
    },
    payment_transaction_id:{
        type:String,
        required:true
    }
})

const Order = mongoose.model('order',OrderSchema)
module.exports = Order