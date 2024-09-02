const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_PRIVATE_KEY
const User = require('../../Models/user.Model')
const checkAdminLogin = (req,res,next)=>{
    try{
        let token = req.cookies.token;
        if(!token) {
            return res.render('Login',{error:'No token found.'})
        }
        token = token.split(' ')[1];
        jwt.verify(token,jwtSecret,async(err,data)=>{
            if(err){
                return res.render('Login',{error:'Please provide a valid authorization token....'})
            }
            const user = await User.findById(data.id)
            req.user = user._id.toString()
            req.token = token
            next();
        })

    }catch(error){
        console.log(error)
    }
}

module.exports = checkAdminLogin
