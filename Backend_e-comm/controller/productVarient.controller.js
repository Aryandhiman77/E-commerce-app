const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const ProductVarient = require('../Models/productVarients.Model')
const { validationResult } = require("express-validator");  

const getAllVarients = (req,res)=>{
    res.send('get all varients working..')
}

const getSingleVarient = (req,res )=>{
    res.send('get single working..')
}
const createVarient = async(req,res )=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          if (req.files) {
            req.files.map((file) => {
              fs.unlink(file.path, (err) => {
                err && res.send(err); // :console.log("files deleted successfully.")
              });
            });
          }
          return res.status(400).json({ errors: errors.array() }); // ! bad request
        }
        try{
            const {color,size,price,stock_quantity} = req.body;
            const product_id = req.params.id;
            !product_id && new Error("product id not found.");
            const varient_info={
                product_id:req.params.id,
                color,size,
                price,
                stock_quantity
            }
            const productImages = [];
            
            // const createVarient = await ProductVarient(varient_info)
            // createVarient
            //   ? res.status(200).json({
            //       success: true,
            //       message: "product varient saved successfully.",
            //       createVarient,
            //     })
            //   : res
            //       .status(400)
            //       .json({ success: false, error: "product does not exist." });
        }catch (error) {
            if (error.message === "") {
              res
                .status(500)
                .json({ success: false, error: "Internal server error." });
            }
            if (req.files) {
              req.files.map((file) => {
                fs.unlink(file.path, (err) => {
                  err && res.send(err); // :console.log("files deleted successfully.")
                });
              });
            }
            res.status(400).json({ success: false, error: error.message });
          }
}
const updateVarient = (req,res)=>{
    res.send('api working..')
}

const deleteVarient = (req,res )=>{

}

module.exports = {getAllVarients,createVarient,updateVarient,deleteVarient,getSingleVarient}