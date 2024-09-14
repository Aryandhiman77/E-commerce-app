const express = require('express');
const {renderIndex,renderSignup,renderLogin,handleSignup,handleLogin,handleLogout,renderProducts,renderAddProduct,renderViewProduct,updateProduct,renderAddCategory,renderCategories,renderProductVarients,renderAddVarient,renderOrders} = require('../../controller/adminController/admin.Controller');
const router = express.Router();
const checkadminlogin = require('../../middleware/adminMiddleware/checkadminlogin.middleware');
//! rendering
router.get('/admin',checkadminlogin,renderIndex)
router.get('/adminSignup',renderSignup)
router.get('/adminLogin',renderLogin)

//! handling auth requests
router.post('/register-admin',handleSignup)
router.post('/login-admin',handleLogin)
router.get('/admin-logout',checkadminlogin,handleLogout)

//! handle rendering 
router.get('/admin-addProduct',checkadminlogin,renderAddProduct)
router.get('/admin-addCategory',checkadminlogin,renderAddCategory)
router.get('/admin-addVarient',checkadminlogin,renderAddVarient);
router.get('/productVarients',checkadminlogin,renderProductVarients);


//!handling product requests
router.get('/productsDetail',checkadminlogin,renderProducts)
router.get('/categoriesDetail',checkadminlogin,renderCategories);
router.get('/ordersDetail',checkadminlogin,renderOrders);

router.get('/:id',checkadminlogin,renderViewProduct)
router.put('/:id',checkadminlogin,updateProduct)

//!handling category requests



//! Invalid routes
router.get('/*',(req,res)=>{
    res.redirect('/adminLogin')
})


module.exports = router