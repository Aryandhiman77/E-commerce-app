const {body} = require('express-validator')

const validateRegistration = [
    body('full_name',"Full name must be 5-20 characters.").isLength({min:5}).isLength({max:20}),
    body('email',"Please enter a valid email.").isEmail(),
    body('password',"Password must be 8-20 characters.").isLength({min:8}).isLength({max:20}),
    body('phone_number',"Phone number must be 10 digits.").isMobilePhone('en-IN')
]
const validateLogin = [
    body('email',"Please enter a valid email.").isEmail(),
    body('password',"Invalid Password").isLength({max:20}),
]
module.exports = {validateRegistration,validateLogin}