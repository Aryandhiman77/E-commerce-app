const mongoose = require('mongoose')
const shippingAdressSchema = new mongoose.Schema ({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
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

const ShippingAddress = mongoose.model('shippingAddress',shippingAdressSchema)
module.exports = ShippingAddress