const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_PRIVATE_KEY
const User = require('../Models/user.Model');
const checkLoginMiddleware = (req,res,next)=>{
    try{
        let token = req.headers.authorization;
        if(!token) {
            return res.send({message:'Please login first.'})
        }
        token = token.split(' ')[1];
        if(token){
            jwt.verify(token,jwtSecret,async(err,data)=>{
                if(err){
                    return res.send({message:'Please login first.'})
                }
                const user = await User.findById(data.id)
                req.user = user._id.toString()
                req.token = token
                next();
            })
        }
       
    }catch(error){
        res.status(500).json({message:'Internal Server Error.',error:error.message})
    }
    
    
}
module.exports = checkLoginMiddleware