const {body} = require('express-validator')
const validateAddProduct =[
        body("product_name").isLength({ min: 10 }).withMessage("Product name must contain minimum of 10 characters.").isLength({ max: 150 }).withMessage("Product name can not contain more than 150 characters.").trim(),
        body("description").isLength({ min: 10 }).withMessage("Product description must contain a minimum of 10 characters.").isLength({ max: 600 }).withMessage("Product description can only contain maximum of 600 characters.").trim(),
        body('price',"price must be required.").notEmpty().trim(),
        body('stock_quantity',"Stock quantity must be 1-999.").trim().isNumeric().isLength({max:3})
]
const validateProductVarient = [
        body('color','max 20 character can be there.').trim().isLength({max:20}),
        body('size').trim().isLength({max:20}),
        body('price','price must be required').trim().notEmpty().isLength({max:8}),
        body('stock_quantity',"Stock quantity must be 1-999.").trim().isNumeric().isLength({max:3})
]
module.exports = {validateAddProduct,validateProductVarient}