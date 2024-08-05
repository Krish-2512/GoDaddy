const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const express = require('express');
const foodRouter = express.Router();

foodRouter.post('/foodDisplay',async(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.error(error);
        res.send('Response failed');
    }
})
module.exports = foodRouter;
