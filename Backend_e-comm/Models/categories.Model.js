const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema ({
    category_name:{
        type:String,
        required:true
    },
    url_slug:{
        type: String,
        unique:true,
        required:true
    },
    parent_cat_id:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive','block'],
        required:true
    }
})

const Category = mongoose.model('category',categorySchema)
module.exports = Category;