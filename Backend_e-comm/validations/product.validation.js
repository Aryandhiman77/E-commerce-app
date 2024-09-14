const {body} = require('express-validator')
const validateAddProduct =[
        body("product_name").isLength({ min: 10 }).withMessage("Product name must contain minimum of 10 characters.").isLength({ max: 150 }).withMessage("Product name can not contain more than 150 characters.").trim(),
        body("description").isLength({ min: 10 }).withMessage("Product description must contain a minimum of 10 characters.").isLength({ max: 600 }).withMessage("Product description can only contain maximum of 600 characters.").trim(),
        body('price',"price must be required.").notEmpty().trim(),
        body('stock_quantity',"Stock quantity must be 1-999.").trim().isNumeric().isLength({max:3})
]
const validateProductVarient = [
        body('color','Please select a valid color.').trim().isHexColor().optional(),
        body('name','Name can contain maximum of 50 characters.').trim().isLength({max:50}).optional(),
        body('size','size must be entered properly.').trim().isLength({max:25}).optional(),
        body('sizewithunit','size must be entered properly.').isNumeric().trim().isLength({max:4}).optional(),
        body('unit','unit must be entered properly.').isAlphanumeric('az-AZ').trim().isLength({max:2}).optional(),
        body('price','price must be required').trim().notEmpty().isNumeric().isLength({max:8}),
        body('stock_quantity',"Stock quantity must be 1-999.").trim().isNumeric().isLength({max:3})
]
module.exports = {validateAddProduct,validateProductVarient}