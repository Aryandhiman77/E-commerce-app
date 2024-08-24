const mongoose = require('mongoose')
const userRoleSchema = new mongoose.Schema ({
    role_name:{
        type:String,
        enum:['admin','customer'],
        default:'customer'
    },
    Created_at:{
        type:Date,
        default:Date.now
    },
    Updated_At:{
        type:Date,
        default:null
    }
})

const UserRoles = mongoose.model('userRole',userRoleSchema)
module.exports = UserRoles