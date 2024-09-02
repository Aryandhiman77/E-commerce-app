const express = require('express');
const {renderIndex,renderSignup,renderLogin,handleSignup,handleLogin,handleLogout,renderProducts,renderAddProduct,renderViewProduct,updateProduct} = require('../../controller/adminController/admin.Controller');
const router = express.Router();
const checkadminlogin = require('../../middleware/adminMiddleware/checkadminlogin.middleware')
//! rendering
router.get('/admin',checkadminlogin,renderIndex)
router.get('/adminSignup',renderSignup)
router.get('/adminLogin',renderLogin)

//! handling auth requests
router.post('/register-admin',handleSignup)
router.post('/login-admin',handleLogin)
router.get('/admin-logout',checkadminlogin,handleLogout)

//! handle product requests
router.get('/admin-addProduct',checkadminlogin,renderAddProduct)
router.get('/productsDetail',checkadminlogin,renderProducts)
router.get('/:id',checkadminlogin,renderViewProduct)
router.put('/:id',checkadminlogin,updateProduct)


//! Invalid routes
router.get('*',(req,res)=>{
    res.redirect('/adminLogin')
})


module.exports = router