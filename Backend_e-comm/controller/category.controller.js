const Category = require("../Models/categories.Model");
const { validationResult } = require("express-validator");

const addCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ error: errors.array()[0].msg });
  } else {
    try {
      const { category_name, cat_status } = req.body;
      let saveCategory=await Category.create({
        category_name,
        category_url_slug:category_name.replaceAll(" ","-"),
        cat_status,
      });
      saveCategory
      ?res.status(200).json({ success: true, message: "category created successfully.",cat_id:saveCategory._id})
      :res.status(400).json({ success: false, error: "cannot create category due to some technical issues." });

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
    }
  }
};
const updateCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array()[0].msg });
    } else {
      try {
        const category_id = req.params.id;
        const { category_name, cat_status, category_url_slug } = req.body;
        let updateCategory=await Category.findByIdAndUpdate(category_id,{$set:{
          category_name,
          category_url_slug,
          cat_status,
        }});
        updateCategory
        ?res.status(200).json({ success: true, message: "category updated successfully.",cat_id:updateCategory._id })
        :res.status(400).json({ success: false, error: "cannot update category due to some technical issues."});
  
      } catch (error) {
        error.message === "" &&
          res
            .status(500)
            .json({ success: false, error: "Internal server error." });
        res.status(500).json({ success: false, error: error.message });
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
        let deletedCategory=await Category.findByIdAndDelete(category_id);
        deletedCategory
        ?res.status(200).json({ success: true, message: "category deleted successfully.",deleted_cat_id:deletedCategory._id })
        :res.status(400).json({ success: false, error: "category does not exists."});

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
    const categories = await Category.find();
    if(categories.length>0){
      res.status(200).json({ success: true, message: "categories found.",categories})
    }else{
      res.status(200).json({ success: true, message: "No category found.",categories})
    }
  }
  const getSingleCategory = async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(category){
      res.status(200).json({ success: true, message: "categories found.",category})
    }
  }
module.exports = { addCategory,updateCategory,deleteCategory,getCategory,getSingleCategory};
