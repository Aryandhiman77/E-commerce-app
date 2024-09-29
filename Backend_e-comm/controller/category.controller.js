const Category = require("../Models/categories.Model");
const { validationResult } = require("express-validator");
const fs = require('fs')
const addCategory = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Image must be required." });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    fs.unlink(req.file.path, (err) => {
      err && res.send(err); // :console.log("files deleted successfully.")
    });
    return res.status(400).json({ error: errors.array()[0].msg }); // ! bad request
  } else {
    try {
      const dbfilepath = `/${req.file.path.split("/")[1]}/${
        req.file.path.split("/")[2]
      }`;
      const { category_name, cat_status } = req.body;
      let saveCategory=await Category.create({
        category_name,
        category_url_slug:category_name.replaceAll(" ","-"),
        cat_status,
        category_image:dbfilepath
      });
      saveCategory
      ?res.status(200).json({ success: true, message: "category created successfully.",cat_id:saveCategory._id})
      :new Error('cannot create category due to some technical issues.');

    } catch (error) {
      error.message === "" &&
        res
          .status(500)
          .json({ success: false, error: "Internal server error." });
      
      if(error.message.includes('E11000 duplicate key')){
        res.status(400).json({ success: false, error: "Category name must be different from other categories." });
      }else{
        res.status(500).json({ success: false, error: error.message });
      }
      fs.unlink(req.file.path, (err) => {
        err && res.send(err);
      });
    }
  }
};
const updateCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if(req.file){
        fs.unlink(req.file.path, (err) => {
          err && res.send(err); // :console.log("files deleted successfully.")
        });
      }
      return res.json({ errors: errors.array()[0].msg });
    } else {
      try {
        let dbfilepath;
        const category_id = req.params.id;
        const { category_name, cat_status, category_url_slug } = req.body;
        if(req.file){
          // extract previous category image from db and delete it from server
          const category = await Category.findById(category_id);
          const category_previous_image = category.category_image;
          if(category_previous_image){
            fs.unlink(`uploads${category_previous_image}`, (err) => {
              err && res.send(err);
            });
          }
          dbfilepath = `/${req.file.path.split("/")[1]}/${req.file.path.split("/")[2]}`;
          let updateCategory=await Category.findByIdAndUpdate(category_id,{$set:{
            category_name,
            category_url_slug:category_name.replaceAll(" ","-"),
            cat_status,
            category_image:dbfilepath
          }});
          updateCategory
        ?res.status(200).json({ success: true, message: "category updated successfully.",cat_id:updateCategory._id })
        :new Error('cannot update category due to some technical issues.');
        }else{
          let updateCategory=await Category.findByIdAndUpdate(category_id,{$set:{
            category_name,
            category_url_slug:category_name.replaceAll(" ","-"),
            cat_status
          }});
          updateCategory
        ?res.status(200).json({ success: true, message: "category updated successfully.",cat_id:updateCategory._id })
        :new Error('cannot update category due to some technical issues.');
        }
  
      } catch (error) {
        error.message === "" &&
          res
            .status(500)
            .json({ success: false, error: "Internal server error." });
        res.status(500).json({ success: false, error: error.message });
        if(req.file){
          fs.unlink(req.file.path, (err) => {
            err && res.send(err);
          });
        }
      }
    }
  };

const deleteCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array()[0].msg });
    } else {
      try {
        const category_id = req.params.id;
        const category = await Category.findById(category_id);
        const category_image_path = category.category_image;
          if(category_image_path){
            fs.unlink(`uploads${category_image_path}`, (err) => {
              err && res.send(err);
            });
          }
        let deletedCategory=await Category.findByIdAndDelete(category_id);
        deletedCategory
        ?res.status(200).json({ success: true, message: "category deleted successfully.",deleted_cat_id:deletedCategory._id })
        :new Error('category does not exists.');

      } catch (error) {
        error.message === "" &&
          res
            .status(500)
            .json({ success: false, error: "Internal server error." });
        res.status(500).json({ success: false, error: error.message });
        
      }
    }
  };

  const getCategory = async(req,res)=>{
    const {isactive} = req.headers;
    if(isactive){
      const categories = await Category.find({cat_status:'active'});
      if(categories.length>0){
        res.status(200).json({ success: true, message: "categories found.",categories})
      }else{
        res.status(200).json({ success: true, message: "No category found.",categories})
      }
    }else{
      const categories = await Category.find({});
      if(categories.length>0){
        res.status(200).json({ success: true, message: "categories found.",categories})
      }else{
        res.status(200).json({ success: true, message: "No category found.",categories})
      }
    }
    
  }
  const getSingleCategory = async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(category){
      res.status(200).json({ success: true, message: "categories found.",category})
    }
  }
module.exports = { addCategory,updateCategory,deleteCategory,getCategory,getSingleCategory};
