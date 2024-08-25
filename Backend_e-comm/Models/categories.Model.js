const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema ({
    category_name:{
        type:String,
        unique:true,
        required:true
    },
    category_url_slug:{
        type: String,
        unique:true,
        // required:true
    },
    parent_cat_id:{
        type:String,    //todo
    },
    cat_status:{
        type:String,
        enum:['active','inactive','block'],
        default:'active'
    }
})

const Category = mongoose.model('category',categorySchema)
module.exports = Category;