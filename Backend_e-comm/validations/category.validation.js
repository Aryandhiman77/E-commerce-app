const {body} = require('express-validator');
const validateCategory = [
    body("category_name","category name must be 3-30 characters").isLength({min:3}).isLength({max:30}).trim(),
    body('category_image',"Category logo is required.").isLength({max:100}).trim()
]

module.exports = {validateCategory}
