const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const ProductVarient = require('../Models/productVarients.Model')
const { validationResult } = require("express-validator");  
const fs = require('fs');
const { error } = require("console");
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
          return res.status(400).json({ error: errors.array()[0].msg }); // ! bad request
        }
        try{
          if(req.body.color && req.body.varient_name){
            throw new Error("You must select either color or name.");
          }
          if(req.body.size && req.body.sizewithunit){
            throw new Error("You cannot enter both fixed and variable sizes.");
          }
          if(req.body.size >=1000){ 
            throw new Error("Size must be less than 50.");
          }
          if(req.body.size <0 || req.body.sizewithunit <=0){
          throw new Error("Size cannot contains negative values.");
          }
            const {color,name,size,sizewithunit,unit,price,stock_quantity} = req.body;
            const product_id = req.query.id;
            console.log(product_id)
            !product_id && new Error("product id not found.");
            let varientname = '';
            let varient_size='';
            if(color){
              const getColorname = await fetch(`https://www.thecolorapi.com/id?hex=${color.slice(1)}`);
              const getname =  await getColorname.json();
              varientname = getname.name.value
            }
            if(name){
              varientname = name
            }
            if(size){ // fixed size 
              varient_size = size
            }
            if(sizewithunit){
              varient_size = sizewithunit + " " +unit
            }
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
              product_id:req.query.id,
              varient_name:name || varientname,
                varient_images:imagesPaths,
                color,
                size:varient_size,
                price,
                stock_quantity
            }
            console.log(varient_info)
            const Varients = await ProductVarient.find({product_id});
            if(Varients.length>=6){
                throw new Error('a product can only have maximum 6 varients.')
            }
            const createVarient = await ProductVarient.create(varient_info)
            if(createVarient){
              await Product.findByIdAndUpdate(product_id,{
                $addToSet:{
                  varients_ids:createVarient._id
                }
              })
              // addVarientIdToProduct?console.log('added varient_id to product'):console.log('cannot add varient_id to product')
            }
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
            res.status(400).json({ success: false, error: error.message });
          }
}
const updateVarient =async (req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          // if (req.files) {
          //   req.files.map((file) => {
          //     fs.unlink(file.path, (err) => {
          //       err && res.send(err); // else console.log("files deleted successfully.")
          //     });
          //   });
          // }
          return res.status(400).json({ error: errors.array() }); // ! bad request
        }
        try{
            const {color,varient_name,size,price,stock_quantity} = req.body;
            const varient_id = req.params.id;
            !varient_id && new Error("product varient id not found.");
            // const varient = await ProductVarient.findById(varient_id);
            // let imagePaths = varient.varient_images; //? deleting previous paths and adding new if any
            // let updatedImages=[];
            // if(req.files.length>0 && req.files.length<=4){
            //     if(imagePaths.length>0){
            //         imagePaths=imagePaths.filter((image)=>image!=='defaultProductImage/defaultProduct.jpg')
            //         console.log(imagePaths)
            //         imagePaths.forEach(image => {
            //             fs.unlinkSync(`uploads/${image}`) //! delete image from server
            //         });
            //         for(let i=0;i<4;i++){  //! filling complete array at once 
            //             let paths = req.files[i]?req.files[i].path:'/defaultProductImage/defaultProduct.jpg';
            //             paths = paths.split('/')[1]+"/"+paths.split('/')[2]
            //             updatedImages.push(paths)
            //         }
                // } 
            
            const varient_info={
              varient_name,
                // varient_images:updatedImages,
                color,
                size,
                price,
                stock_quantity
            }
            // console.log(varient_info)
            console.log(varient_info)
            const updateVarient = await ProductVarient.findByIdAndUpdate(varient_id,{
              $set:varient_info
            })
            updateVarient
              ? res.status(200).json({
                  success: true,
                  message: "product varient updated successfully.",
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
            // if (req.files) {
            //   req.files.map((file) => {
            //     fs.unlink(file.path, (err) => {
            //       err && res.send(err); // :console.log("files deleted successfully.")
            //     });
            //   });
            // }
            res.status(400).json({ success: false, message: error.message });
          }
        }
        
const updateVarientImages = async(req,res)=>{
  try {
    if(req.file){
      const product_id = req.params.id;
      const getPreviousImages = await Product.findById(product_id,{varient_images:1,_id:0});
      const isExists = fs.readFileSync(`uploads${getPreviousImages.image}`) // image exists on server and db
      if(isExists){
        fs.unlinkSync(`uploads${getPreviousImages.image}`)
      }
      let imagesToBePushed = [];
      req.files.forEach(image => {
        imagesToBePushed("/"+image.path.split('/')[1]+"/"+image.path.split('/')[2]);
      });
     const updatedImages = await Product.findByIdAndUpdate(product_id,{
            $push:{
              varient_images:imagesToBePushed
      }
            
      })
      if(updatedImages){
        return res.status(200).json({success:true ,message:"variant images updated successfully."})
      }else{
        return res.status(400).json({success:false ,message:"Cannot update variant images."})
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    if (req.files) {
      req.files.map((file) => {
        fs.unlink(file.path, (err) => {
          err && res.send(err); // :console.log("files deleted successfully.")
        });
      });
    }
  }
}

const deleteVarient =async (req,res )=>{
    console.log('working..')
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
        if(deleteVarient){
          res.status(200).json({
            success: true,
            message: "product varient deleted successfully.",
            deleteVarient,
        })
      }
        else{
        throw new Error('product does not exist.')
        }
      
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

module.exports = {getAllVarients,createVarient,updateVarient,deleteVarient,getSingleVarient,updateVarientImages}