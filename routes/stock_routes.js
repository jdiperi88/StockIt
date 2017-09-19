const express = require('express');
const stockRoutes = express.Router();


stockRoutes.get('/',requireAuth,(req, res)=>{
    res.send({message: 'Super secret code 123'})
})