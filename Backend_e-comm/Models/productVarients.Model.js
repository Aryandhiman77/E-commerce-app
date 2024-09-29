const mongoose = require('mongoose')
const productVarientSchema = new mongoose.Schema ({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    varient_images:[{
        type:String,
    }], 
    color:{
        type: String, // hex validation already applied by express-validator
        default:null
    },
    varient_name:{
        type: String,
        default:null
    },
    size:{
        type: String,
        default:null
    },
    price:{
        type:Number,
        required:true,
        set:(v)=>{
            return Math.round(v * 100) / 100
        }
    },
    stock_quantity:{
        type:Number,
        required:true,
        default:0,
    }
})

const ProductVarient = mongoose.model('productVarient',productVarientSchema)
module.exports = ProductVarient