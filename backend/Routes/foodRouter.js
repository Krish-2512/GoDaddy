const mongoose = require('mongoose');

const express = require('express');
const Orders = require('../model/Orders');

const OrderRouter = express.Router();
const myFoodRouter = express.Router();




myFoodRouter.post('/myfood',async(req,res)=>{
    const {email}= req.body;
    try{let eID=await Orders.findOne({email});
    res.json({orderDate:eID})
    }catch(err){res.send(err)}
    
    
    })

    module.exports =  myFoodRouter;