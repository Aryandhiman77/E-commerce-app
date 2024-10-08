const mongoose = require('mongoose')
const userSchema = new mongoose.Schema ({
    full_name:{
        type:String,
        required:true
    },
    role_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'userRole'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true,
        unique:true,
    },
    status:{
        type:String,
        enum:['active','inactive','block'],
        default:'inactive'
    },
    profile:{
        type:String,
        default:'/defaultProfile/profile.jpg'
    }
})

const User = mongoose.model('user',userSchema)
module.exports = User