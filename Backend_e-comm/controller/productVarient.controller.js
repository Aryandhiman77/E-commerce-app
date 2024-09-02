const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const ProductVarient = require('../Models/productVarients.Model')
const { validationResult } = require("express-validator");  
const fs = require('fs')
const getAllVarients =async (req,res)=>{
    try {
        const varients = await ProductVarient.find({product_id:req.params.id})
        varients
        ? res.status(200).json({
            success: true,
            message: "product varients found successfully.",
            varients,
          })
        : res
            .status(400)
            .json({ success: false, error: "No product varients exists." });
    } catch (error) {
        res.status(500).json({ success: false, error: "Internal server error." });
    }
}

const getSingleVarient = async(req,res )=>{
    try{
        const varient_id = req.params.id;
        const varient = await ProductVarient.findById(varient_id)
        varient
        ? res.status(200).json({
            success: true,
            message: "product varient found successfully.",
            varient,
          })
        : res
            .status(400)
            .json({ success: false, error: "No product varient exists." });
    }catch(error){
        res.status(500).json({ success: false, error: "Internal server error." });
    }
    
    
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
                err && res.send(err); // else console.log("files deleted successfully.")
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
const updateVarient =async (req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          if (req.files) {
            req.files.map((file) => {
              fs.unlink(file.path, (err) => {
                err && res.send(err); // else console.log("files deleted successfully.")
              });
            });
          }
          return res.status(400).json({ errors: errors.array() }); // ! bad request
        }
        try{
            const {color,size,price,stock_quantity} = req.body;
            const varient_id = req.params.id;
            !varient_id && new Error("product varient id not found.");
            const varient = await ProductVarient.findById(varient_id);
            let imagePaths = varient.varient_images; //? deleting previous paths and adding new if any
            let updatedImages=[];
            if(req.files.length>0 && req.files.length<=4){
                if(imagePaths.length>0){
                    imagePaths=imagePaths.filter((image)=>image!=='defaultProductImage/defaultProduct.jpg')
                    console.log(imagePaths)
                    imagePaths.forEach(image => {
                        fs.unlinkSync(`uploads/${image}`) //! delete image from server
                    });
                    for(let i=0;i<4;i++){  //! filling complete array at once 
                        let paths = req.files[i]?req.files[i].path:'/defaultProductImage/defaultProduct.jpg';
                        paths = paths.split('/')[1]+"/"+paths.split('/')[2]
                        updatedImages.push(paths)
                    }
                } 
            }
            const varient_info={
                product_id:req.params.id,
                varient_images:updatedImages,
                color,size,
                price,
                stock_quantity
            }
            const updateVarient = await ProductVarient.findByIdAndUpdate(varient_id,varient_info)
            updateVarient
              ? res.status(200).json({
                  success: true,
                  message: "product varient saved successfully.",
                  updateVarient,
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

const deleteVarient =async (req,res )=>{
    
    try{
        const varient_id = req.params.id;
        !varient_id && new Error("product varient id not found.");
         const varient = await ProductVarient.findById(varient_id);
        let imagePaths = varient.varient_images;
        if(imagePaths.length>0){
            imagePaths=imagePaths.filter((image)=>image!=='defaultProductImage/defaultProduct.jpg')
            console.log(imagePaths)
            imagePaths.forEach(image => {
                fs.unlinkSync(`uploads/${image}`) //! delete image from server
            });
            
        } 

        const deleteVarient = await ProductVarient.findByIdAndDelete(varient_id);
        deleteVarient
          ? res.status(200).json({
              success: true,
              message: "product varient deleted successfully.",
              deleteVarient,
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

module.exports = {getAllVarients,createVarient,updateVarient,deleteVarient,getSingleVarient}