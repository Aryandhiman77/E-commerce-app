const mongoose = require('mongoose')
const orderShippingAdressSchema = new mongoose.Schema ({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'order',
        required:true
    },
    shipping_address_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shippingAddress',
        required:true
    },
    full_address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip_code:{
        type:Number,
        required:true
    }
    
})

const OrderShippingAddress = mongoose.model('orderShippingAddress',orderShippingAdressSchema)
module.exports = OrderShippingAddress