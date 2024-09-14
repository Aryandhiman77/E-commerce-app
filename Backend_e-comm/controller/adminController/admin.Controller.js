const { Result } = require("express-validator")

//! Pages rendering controller
const renderIndex = (req,res)=>{
    res.render('index',{login:null,path:'/'})
}

const renderSignup = (req,res)=>{
    res.render('Signup',{error:null})
}
const renderLogin = (req,res)=>{
    res.render('Login',{error:null})
}


//! handling admin authentication
const handleLogin = async(req,res)=>{
    const {email,password} =req.body;
    try {
        const user_info = {
            email,
            password,
            role_name:'admin'
        }

            const login = await fetch('http://localhost:8000/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user_info)
            })
            const result = await login.json();
            if(result.success){
                res.cookie('token',"bearer"+" "+result.token)
                res.render('index',{login:true,path:'/'})
            }else{
                res.render('Login',{error:result.message})
            }
    
    } catch (error) {
        console.log(error)
    }
}
const handleSignup = async(req,res)=>{
    const {full_name,email,phone_number,password,cpassword} =req.body;
    if(password!==cpassword){
        return res.render('Signup',{error:"Passwords don't match."})
    }
    const role_name= 'admin'
    try {
        const user_info = {
            full_name,
            email,
            phone_number,
            password,
            role_name
        }

            const signup = await fetch('http://localhost:8000/auth/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user_info)
            })
            const result = await signup.json();
            if(result.success){
                res.cookie('token',"bearer"+" "+result.token)
                res.render('index',{login:true,path:'/'})
            }else{
                res.render('Signup',{error:result.message})
            }
    
    } catch (error) {
        console.log(error)
    }
}

const handleLogout = (req,res)=>{
    res.clearCookie("token",(err)=>{
        if(err){
            return res.redirect('/adminLogin')
        }
    });
    res.render('Login',{error:"logged out."})
}

//! handle products rendering
const renderProducts = async(req,res)=>{
    const token = req.cookies.token
    const resp = await fetch('http://localhost:8000/api/v1/product',{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }

    })
    const result = await resp.json();

    const categories = await fetch(`http://localhost:8000/api/v1/category`,{
        method:'GET',
        headers:{
          authorization:token,
          'Content-Type':'application/json'
        }
      })
      const resultcat= await categories.json();

    if(result.success){
        res.render('AllProducts',{error:false,path:'/productsDetail',data:result.products,categories:resultcat.categories})
    }
    else{
        res.render('AllProducts',{error:result.error,path:'/productsDetail'})
    }
}
const renderViewProduct =async (req,res)=>{
    // res.render('ViewProduct',{path:'/viewProduct'})
    try {
        const product_id = req.params.id;
    const token = req.cookies.token
    const resp = await fetch(`http://localhost:8000/api/v1/product/${product_id}`,{ 
        headers:{
            authorization:token,
            'Content-type':'application/json'
        }
    })
    const result = await resp.json()
    console.log(result)
    if(result.success){
            res.render('ViewProduct',{path:null,product:result.product})
    }else{
        res.render('ViewProduct',{path:null,error:result.error})
    }
    } catch (error) {
        console.log({"error is ":error})
    }
    
}
const renderAddProduct = async(req,res)=>{
    const token = req.cookies.token
    const resp = await fetch('http://localhost:8000/api/v1/category',{ // show categories from database
        headers:{
            authorization:token,
            'Content-type':'application/json'
        }
    })
    const result = await resp.json()
    console.log(result)
    if(result.success){
        res.render('AddProduct',{path:'/admin-addProduct',categories:result.categories})
    }else{
        res.render('AddProduct',{path:'/admin-addProduct',error:'error'})
    }
}

const updateProduct =async (req,res)=>{

    const product_id = req.params.id;
    const token = req.cookies.token
    const resp = await fetch(`http://localhost:8000/api/v1/product/${product_id}`,{ 
        headers:{
            authorization:token,
            'Content-type':'application/json'
        }
    })
    const result = await resp.json()
    if(result.success){
        res.render('ViewProduct',{path:'/viewProduct',product:result.product})
    }else{
        res.render('ViewProduct',{path:'/viewProduct',error:result.error})
    }
    console.log(result)
}
const renderAddCategory = async(req,res)=>{

        res.render('AddCategory',{path:'/admin-addCategory'})

}
const renderCategories = async(req,res)=>{
    const token = req.cookies.token
        const resp = await fetch('http://localhost:8000/api/v1/category',{
            headers:{
                authorization:token,
                'Content-type':'application/json'
            }
        })
        const result = await resp.json();
        if(result.success){
            res.render('AllCategories',{path:'/categoriesDetail',categories:result.categories})
        }else{
            res.render('AllCategories',{path:'/categoriesDetail',error:result.error})
        }

}
const renderOrders = (req,res)=>{   
    res.render('AllOrders',{path:'/ordersDetail'})
}
const renderProductVarients =async ( req,res)=>{
    const sizeUnits = [
        // Clothing Sizes
        'none',
        'XS',    // Extra Small
        'S',     // Small
        'M',     // Medium
        'L',     // Large
        'XL',    // Extra Large
        'XXL',   // Double Extra Large
        'XXXL',  // Triple Extra Large
        
        // Shoe Sizes
        'US-Shoe Size',    // US 
        'EU-European Shoe Size',    // 
        'UK-UK Shoe Size',    // 
        
        // Numeric Sizes
        '0', '2', '4','5', '6','7','8','9','10', '12', '14', '16', // Common numeric sizes for women's clothing
        '28', '30', '32', '34', '36', '38', '40',        // Common numeric sizes for men's pants
    
        // Clothing/Accessories
        'One Size',       // Universal size for items like hats, scarves
        'Free Size',      // Typically used interchangeably with "One Size"
        'Plus Size',      // Sizes larger than XL
  
      ];
      const lengthSize =[
         // Length/Height
         'in',    // Inches (e.g., for pants length, TV size)
         'cm',    // Centimeters (e.g., for height, waist size)
         
         // Weight
         'g',     // Grams
         'kg',    // Kilograms
         'lb',    // Pounds
         
         // Volume
         'ml',    // Milliliters (e.g., for liquids)
         'l',     // Liters
         
         // Dimensions (for items like furniture, electronics, etc.)
         'mm',    // Millimeters
         'cm',    // Centimeters
         'm',     // Meters
         'ft',    // Feet
         'in',    // Inches
         
         // Capacity
         'GB',    // Gigabytes (e.g., for storage devices)
         'TB',    // Terabytes
      ]
    const token = req.cookies.token
    const resp = await fetch(`http://localhost:8000/api/v1/varient/allVarients/${req.query.id}`,{
        method:"GET",
        headers:{
            'Content-type':'application/json',
            authorization:token,
        }
    })
    const data = await resp.json();

    res.render('AllProductVarients',{path:'/productVarients',varients:data.varients,sizeUnits,lengthSize})
}   
const renderAddVarient =async ( req,res)=>{
    const sizeUnits = [
        // Clothing Sizes
        'none',
        'XS',    // Extra Small
        'S',     // Small
        'M',     // Medium
        'L',     // Large
        'XL',    // Extra Large
        'XXL',   // Double Extra Large
        'XXXL',  // Triple Extra Large
        
        // Shoe Sizes
        'US-Shoe Size',    // US 
        'EU-European Shoe Size',    // 
        'UK-UK Shoe Size',    // 
        
        // Numeric Sizes
        '0', '2', '4','5', '6','7','8','9','10', '12', '14', '16', // Common numeric sizes for women's clothing
        '28', '30', '32', '34', '36', '38', '40',        // Common numeric sizes for men's pants
    
        // Clothing/Accessories
        'One Size',       // Universal size for items like hats, scarves
        'Free Size',      // Typically used interchangeably with "One Size"
        'Plus Size',      // Sizes larger than XL
  
      ];
      const lengthSize =[
         // Length/Height
         'in',    // Inches (e.g., for pants length, TV size)
         'cm',    // Centimeters (e.g., for height, waist size)
         
         // Weight
         'g',     // Grams
         'kg',    // Kilograms
         'lb',    // Pounds
         
         // Volume
         'ml',    // Milliliters (e.g., for liquids)
         'l',     // Liters
         
         // Dimensions (for items like furniture, electronics, etc.)
         'mm',    // Millimeters
         'cm',    // Centimeters
         'm',     // Meters
         'ft',    // Feet
         'in',    // Inches
         
         // Capacity
         'GB',    // Gigabytes (e.g., for storage devices)
         'TB',    // Terabytes
      ]
      
    res.render('AddProductVarient',{path:'/admin-addVarient',sizeUnits,lengthSize})
}   

module.exports = {renderIndex,renderSignup,renderLogin,handleSignup,handleLogin,handleLogout,renderProducts,renderAddProduct,updateProduct,renderViewProduct,renderAddCategory,renderCategories,renderProductVarients,renderAddVarient,renderOrders};