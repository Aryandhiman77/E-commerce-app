const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema ({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    product_varient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productVarient'
    },
    quantity:{
        type:Number,
        required:true,
        default:1,
    }

})

const Cart = mongoose.model('cart',cartSchema)
module.exports = Cart