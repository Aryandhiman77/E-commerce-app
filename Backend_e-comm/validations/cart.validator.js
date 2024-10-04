const {body} = require('express-validator')

const validateCart = [
    body('quantity','quantity must be greater than 0 and less than 10.').trim().isNumeric().isLength({min:1}).isLength({max:10}),
]
module.exports = validateCart