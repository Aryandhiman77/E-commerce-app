const {body} = require('express-validator')

const validateCart = [
    body('quantity','quantity must be greater than 0 and less than 10.').trim().isNumeric().isLength({min:1}).isLength({max:10}),
    body('product_id','Invalid id.').isMongoId(),
    body('product_varient_id','Invalid variant id.').isMongoId(),
]
module.exports = validateCart