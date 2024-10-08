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
    locality:{
        type:String,
    },
    full_address:{
        type:String,

    },
    address_type:{
        type:String,
        enum:['home','work'],
        default:'home',
        optional:true
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    zip_code:{
        type:Number,
    }
    
})

const OrderShippingAddress = mongoose.model('orderShippingAddress',orderShippingAdressSchema)
module.exports = OrderShippingAddress