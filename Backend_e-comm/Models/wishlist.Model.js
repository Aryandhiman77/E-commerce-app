const mongoose = require('mongoose')
const wishlistSchema = new mongoose.Schema ({
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
    
})

const Wishlist = mongoose.model('wishlist',wishlistSchema)
module.exports = Wishlist