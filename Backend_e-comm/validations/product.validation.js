const {body} = require('express-validator')
const validateAddProduct =[
        body("product_name").isLength({ min: 10 }).withMessage("Product name must contain a minimum of 10 characters.").isLength({ max: 50 }).withMessage("Product name must not contain a more than 50 characters.").trim(),
        body("description").isLength({ min: 10 }).withMessage("Product description must contain a minimum of 10 characters.").isLength({ max: 200 }).withMessage("Product name description contain a maximum of 200 characters.").trim(),
        body('price',"price must be required.").notEmpty().trim()
]
module.exports = validateAddProduct