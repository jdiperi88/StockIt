const authController = require('../controllers/auth_controller');
const express = require('express');
const authRoutes = express.Router();


    authRoutes.post('/',authController.signup)



module.exports = authRoutes;
