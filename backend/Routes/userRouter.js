const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 const jwtSecret ="pokemonGoCharizard";


const{body,validationResult}=require('express-validator');
//const{name,email,password}= body;

router.post('/create-user',
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('password','please enter 5 character password').isLength({min:5})
    
    
    
    ,async(req,res)=>{
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
   
const {name,email,password}= req.body;
const salt = await bcrypt.genSalt(10);
const hashedPassword= await bcrypt.hash(password,salt);
try {
   user= await userModel.create(
    {
        name,
        email,
        password:hashedPassword,
    }
       
    )
    res.json({user});
    
} catch (error) {
    console.log(error);
    res.json({success:false})
}

})






// router.post('/login-user',
//     body('email').isEmail(),
   
//     body('password','please enter 5 character password').isLength({min:5})
    
    
    
//     ,async(req,res)=>{
//         const errors= validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()})
//         }
   

// const {email,password}= req.body;

// try {
//    user= await userModel.findOne({email})
//    console.log(user)
//    const checkPass = await bcrypt.compare(password, user.password) 
//    if(!user)  res.json('please enter correct credentials');
//    if(!checkPass) res.json('please enter correct credentials');
  
   
// const data ={
// user:{
//     id:user.id
// }
// }
// const authToken =  jwt.sign(data,jwtSecret);
// res.json({ success: true, authToken });
// //res.json({authToken});

    
// } catch (error) {
//     console.log(error);
//     res.json('fail')
// }

// })

router.post('/login-user',
    body('email').isEmail(),
    body('password', 'please enter 5 character password').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(400).json('please enter correct credentials');
            }

            const checkPass = await bcrypt.compare(password, user.password);
            if (!checkPass) {
                return res.status(400).json('please enter correct credentials');
            }

            const data = {
                user: {
                    id: user.id
                }
            };

            const authToken = jwt.sign(data, 'yourSecretKey');          //taking unique value for authToken value
            res.json({ success: true, authToken });
        } catch (error) {
            console.log(error);
            res.status(500).json('fail');
        }
    }
);


module.exports = router;
















