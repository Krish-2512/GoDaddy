const mongoose = require('mongoose');

const express = require('express');
const Orders = require('../model/Orders');

const OrderRouter = express.Router();
const myFoodRouter = express.Router();



// OrderRouter.post('/orderData', async (req, res) => {
//     let data = req.body.order_data
//     await data.splice(0,0,{Order_date:req.body.order_date})
//     console.log("1231242343242354",req.body.email)

//     //if email not exisitng in db then create: else: InsertMany()
//     let eId = await Orders.findOne({ 'email': req.body.email })    
//     console.log(eId)
//     if (eId===null) {                //user not exists
//         try {
//             console.log(data)
//             console.log("1231242343242354",req.body.email)
//             await Orders.create({
//                 email: req.body.email,
//                 order_data:[data]
//             }).then(() => {
//                 res.json({ success: true })
//             })
//         } catch (error) {
//             console.log(error.message)
//             res.send("Server Error", error.message)

//         }
//     }

//     else {
//         try {
//             await Orders.findOneAndUpdate({email:req.body.email},
//                 { $push:{order_data: data} }).then(() => {
//                     res.json({ success: true })
//                 })
//         } catch (error) {
//             console.log(error.message)
//             res.send("Server Error", error.message)
//         }
//     }
// })

OrderRouter.post('/orderData', async (req, res) => {
    const { order_data, email, order_date } = req.body;
  
    
    if (!email) {
      return res.status(400).send("Email is required.");
    }
  
    try {
      // Add order date to the data
      order_data.splice(0, 0, { Order_date: order_date });
  
      
      let eId = await Orders.findOne({ email });
      if (eId === null) {
   
        await Orders.create({
          email,
          order_data: [order_data],
        });
        return res.status(200).json({ success: true });
      } else {
        
        await Orders.findOneAndUpdate(
          { email },
          { $push: { order_data } }
        );
        return res.status(200).json({ success: true });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
  






module.exports = OrderRouter;