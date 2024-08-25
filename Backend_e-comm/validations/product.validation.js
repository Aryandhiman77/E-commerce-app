const fs = require('fs');
const upload= require('../middleware/imageUpload.middleware')
const {body,validationResult} = require('express-validator');
const path = require('path')
//! Basic form validation
const validateProduct =(req,res,next)=> {
   body('product_name',"product name must be 10-50 characters").isLength({min:10}).isLength({max:50}),
    body('description',"product description must be 10-300 characters.").isLength({min:10}).isLength({max:300})
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});  // 400 means bad request
     }else{
        next()
     }
}
// ! validate product images and upload file..   --> files unlinks when errors 
const validateProductImageAndUpload=(req,res,next)=>{
    
    upload.array('productImages',4)(req,res,(err)=>{
        if(err){
            return res.status(400).json({message:"Don't upload more than 4 product images."})
        }
        if(req.files.length===0){
            return res.status(400).json({message:"Please upload atleast 1 product Image."})
        }
        const files = req.files;
        const errors = [];  // push upcoming errors in this array.
        files.forEach(file => {
            const allowedTypes = ['image/jpg','image/jpeg','image/png'];
            const maxSize = 1024*2024 * 1 // 1MB
            if(!allowedTypes.includes(file.mimetype)){
                errors.push(`Inavlid image type ${file.originalname}`)
            }
            if(file.size>maxSize){
                errors.push(`${file.originalname} size must be below 1 MB.`)
            }
        });
        if(errors.length>0){ // ! if errors are there they unlink the uploaded files
            files.forEach(file => {
                fs.unlinkSync(file.path)
            });  
            return res.status(400).json(errors)
        }
        req.files = files
        next()
    })

   

  }
module.exports = {validateProductImageAndUpload,validateProduct}