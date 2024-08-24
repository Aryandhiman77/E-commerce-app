const express = require('express')
const router = express.Router();
const {register, login} = require('../controller/user.controller');
const { validateRegistration,validateLogin } = require('../validations/users.validator');
const loginMiddleware = require('../middleware/login.middleware')

router.post('/register',validateRegistration,register)  // ! Basic registeration form validation and register
router.post('/login',validateLogin,loginMiddleware,login)  // ! Basic login form validation and checking login through JWT

module.exports = router