const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_PRIVATE_KEY

const loginMiddleware = (req,res,next)=>{
    try{
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                return res.send({message:'Please provide a valid authorization token.'})
            }
            req.body={...req.body,token}
            next();
        })

    }catch(error){
        res.status(500).json({message:'Internal Server Error.'})
    }
    
    
}
module.exports = loginMiddleware