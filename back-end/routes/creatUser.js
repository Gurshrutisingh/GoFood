const express=require("express");
const User = require("../models/UserModel");
const { body, validationResult } = require('express-validator');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post("/signin",body('email').isEmail(),  body('password').isLength({ min: 5 }),async function (req,res) {
    const result = validationResult(req);
    var salt = bcrypt.genSaltSync(10);
    if (result.isEmpty()) {
    const {name,email,location,password}=req.body;
    try{
        const addedUser= await User.create({
            name: name,
            location: location,
            email: email,
            password: bcrypt.hashSync(password,salt),
            
        })
        res.status(200).json(addedUser);
    }
    catch(err){
     console.log(err);
     res.status(400).json({error:err.message});
    }
  }else{
    res.send({ errors: result.array() });
  }
})
router.post("/login",body('email').isEmail(),async function (req,res) {
  const result = validationResult(req);
    if (result.isEmpty()) {
  const {email,password}=req.body;
  try{
      const person= await User.findOne({email: email})
      if(person==null){
        res.status(200).json({error: true,mssg: "No Such User Exist"});
      }
      else if(bcrypt.compareSync(password, person.password)){
        const data={
          user:{
            id:person._id
          }
        }
        const authToken=jwt.sign(data,process.env.TOKEN)
      res.status(200).json({error: false,mssg: authToken});
      }else {
        res.status(200).json({error: true,mssg: "Invalid Password"});
      }
  }
  catch(err){
   console.log(err);
   res.status(400).json({error:err.message});
  }
}
else{
  res.status(200).json({error: true,mssg: "Email is not Proper"});
}
})
module.exports=router;