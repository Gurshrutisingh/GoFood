const express = require("express");
const mongoose =require("mongoose");
const dotenv=require("dotenv");
const added=require("./routes/creatUser");
const display=require("./routes/DisplayData");
const Order = require("./routes/OrderData");
const cors=require("cors");

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, async function () {
        console.log("server and DB are working");
        const fetch_data= await mongoose.connection.db.collection("item");
        const fetch_catigories= await mongoose.connection.db.collection("categories");
        await fetch_data.find({}).toArray().then((data)=>{
           // console.log(data);
           global.food_item=data;
           //console.log(food_item);
        })
        .catch((err)=>{
            console.log(err);
          })
        await fetch_catigories.find({}).toArray().then((data)=>{
           // console.log(data);
           global.food_catigories=data;
           //console.log(food_item);
        })
        .catch((err)=>{
            console.log(err);
          })
      })
 })
 .catch((err)=>{
    console.log(err);
  })
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.use(added);
app.use(display);
app.use(Order);