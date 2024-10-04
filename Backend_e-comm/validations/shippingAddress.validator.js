const { body } = require('express-validator');

const validateShippingAddress = [
    body('mobile_no','Mobile number must be a 10 digit number.').trim().isMobilePhone("en-IN"),
    body('username','User name must be required and contain less than 30 characters.').trim().isLength({min:2}).isLength({max:30}).isString(),
    body('locality','Locality must be required and contain less than 100 characters.').trim().isLength({min:2}).isLength({max:100}).isString(),
    body('full_address','Full address cannot contain more than 300 characters.').trim().isLength({max:300}).isString(),
    body('address_type','Address type cannot be other than Home / Work.').trim().isLength({min:4}).isLength({max:4}).isString(),
    body('state','State must contain less than 50 characters.').trim().isLength({min:2}).isLength({max:50}).isString(),
    body('city','City must contain less than 50 characters.').trim().isLength({min:2}).isLength({max:50}).isString(),
    body('zip_code','Enter a valid zip code.').trim().isNumeric().isLength({min:6}).isLength({max:6}),
]

module.exports =  validateShippingAddress