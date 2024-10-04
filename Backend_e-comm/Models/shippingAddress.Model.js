const mongoose = require('mongoose')
const shippingAdressSchema = new mongoose.Schema ({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    mobile_no:{
        type:Number,
        required:true,
    },
    locality:{
        type:String,
        required:true
    },
    full_address:{
        type:String,
        required:true
    },
    address_type:{
        type:String,
        enum:['home','work'],
        default:'home',
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

const ShippingAddress = mongoose.model('shippingAddress',shippingAdressSchema)
module.exports = ShippingAddress