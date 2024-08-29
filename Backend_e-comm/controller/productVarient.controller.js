const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const ProductVarient = require('../Models/productVarients.Model')
const { validationResult } = require("express-validator");  
const fs = require('fs')
const getAllVarients = (req,res)=>{
    res.send('get all varients working..')
}

const getSingleVarient = (req,res )=>{
    res.send('get single working..')
}
const createVarient = async(req,res )=>{
    if(req.files.length===0){
        return res.status(400).json({ success: false, error: "images must be required." });
    }
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

            let imagesPaths = [];
            //! fill all database mandatory product_images array
            if(req.files){
                for(let i=0;i<4;i++){  //! filling complete array at once
                    let paths = req.files[i]?req.files[i].path:'/defaultProductImage/defaultProduct.jpg';
                    paths = paths.split('/')[1]+"/"+paths.split('/')[2]
                    imagesPaths.push(paths)
                    
                }
            }
            const varient_info={
                product_id:req.params.id,
                varient_images:imagesPaths,
                color,size,
                price,
                stock_quantity
            }
            const Varients = await ProductVarient.find({product_id});
            if(Varients.length>=6){
                throw new Error('a product can only have maximum 6 varients.')
            }
            const createVarient = await ProductVarient.create(varient_info)
            createVarient
              ? res.status(200).json({
                  success: true,
                  message: "product varient saved successfully.",
                  createVarient,
                })
              : res
                  .status(400)
                  .json({ success: false, error: "product does not exist." });
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
            res.status(400).json({ success: false, message: error.message });
          }
}
const updateVarient = (req,res)=>{
    res.send('api working..')
}

const deleteVarient = (req,res )=>{

}

module.exports = {getAllVarients,createVarient,updateVarient,deleteVarient,getSingleVarient}