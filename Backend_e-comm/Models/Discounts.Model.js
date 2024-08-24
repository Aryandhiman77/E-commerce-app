const mongoose = require('mongoose')
const discountSchema = new mongoose.Schema ({
    coupon_code:{
        type:String,
        unique:true
    },
    discount_type:{
        type:String,
        enum:['fixed','rate']
    },
    discount_value:{
        type:Float32Array,
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        required:true
    }
    
})

const Discount = mongoose.model('discount',discountSchema)
module.exports = Discount