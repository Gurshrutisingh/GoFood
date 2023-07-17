const express = require("express");
const Order = require("../models/Orders");
const router=express.Router();

router.post('/order',async(req,res)=>{
    let data=req.body.order_data;
    //await data.splice(0,0,{order_data: req.body.order_data});
    //console.log(req.body);
    let eId= await Order.findOne({email: req.body.email});
    if (eId===null) {
        try{
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(()=>{
                res.json(data);
            })
        }
        catch(error){
          res.json(error.message);
        }
    }else{
      try{
        await Order.findOneAndUpdate({ email: req.body.email},
            {$push: {order_data: data}}).then(()=>{
                  res.json({success: true});
            })
       }
      catch(error){
        res.status(400).send("Server Error");
       }
    }
})
router.post('/myOrder',async(req,res)=>{
   try{
   let d= await Order.findOne({'email': req.body.email});
   //console.log(d.order_data);
   let arr=[];
   console.log(d.order_data[0].length);
   for(let i=0;i<d.order_data.length;i++){
    for (let j = 0; j < d.order_data[i].length; j++) {
        // console.log(d.order_data[i][j].name);
        // console.log(d.order_data[i][j].qty);
        // console.log(d.order_data[i][j].size);
        // console.log(d.order_data[i][j].price);
        arr.push({name: d.order_data[i][j].name,qty: d.order_data[i][j].qty,size: d.order_data[i][j].size,price: d.order_data[i][j].price})
    }
   }
   console.log(arr);
   res.send(arr);
   }catch(error){
    res.send(error.message);
   }
})
module.exports=router;