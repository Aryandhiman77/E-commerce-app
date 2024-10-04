const {body} = require('express-validator')

const validateRegistration = [
    body('full_name',"Full name must be 5-20 characters.").isLength({min:5}).isLength({max:20}),
    body('email',"Please enter a valid email.").isEmail().trim(),
    body('password',"Password must be 8-20 characters.").isLength({min:8}).isLength({max:20}).trim(),
    body('phone_number',"Phone number must be a valid 10 digits number.").isMobilePhone('en-IN').trim()
]
const validateLogin = [
    body('email',"Please enter a valid email.").isEmail().trim(),
    body('password',"Invalid Password").isLength({max:20}).trim(),
]
const validateUpdation = [
    body('username',"Invalid Password").isLength({max:20}).trim(),
    body('email',"Please enter a valid email.").isEmail().trim(),
    body('mobile_no',"Mobile number must be a valid 10 digits number.").isMobilePhone('en-IN').trim()
]
module.exports = {validateRegistration,validateLogin,validateUpdation}