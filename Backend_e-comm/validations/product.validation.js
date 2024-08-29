const {body} = require('express-validator')
const validateAddProduct =[
        body("product_name").isLength({ min: 10 }).withMessage("Product name must contain a minimum of 10 characters.").isLength({ max: 50 }).withMessage("Product name must not contain a more than 50 characters.").trim(),
        body("description").isLength({ min: 10 }).withMessage("Product description must contain a minimum of 10 characters.").isLength({ max: 200 }).withMessage("Product name description contain a maximum of 200 characters.").trim(),
        body('price',"price must be required.").notEmpty().trim(),
        body('stock_quantity',"Stock quantity must not be greater than 250").trim().isNumeric().isLength({max:10})
]
const validateProductVarient = [
        body('color',"color must not be empty").trim().notEmpty().isLength({max:10}),
        body('size').trim().isLength({max:20}),
        body('price','price must be required').trim().notEmpty().isLength({max:8}),
        body('stock_quantity',"Stock quantity must not be greater than 250").trim().isNumeric().isLength({max:10})
]
module.exports = {validateAddProduct,validateProductVarient}