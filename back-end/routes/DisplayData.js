const express = require("express");
const router=express.Router();

router.post('/foodData',(req,res)=>{
    try{
        //console.log(global.food_item);
        res.status(200).send([global.food_item,global.food_catigories]);
    }
    catch(error){
        res.status(400).send("Server Error");
    }
})
module.exports=router;