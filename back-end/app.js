const express =require("express");
const mongoose =require("mongoose");
const dotenv=require("dotenv");
const added=require("./routes/creatUser");
const cors=require("cors");
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, async function () {
        console.log("server and DB are working");
        const fetch_data= await mongoose.connection.db.collection("item");
        await fetch_data.find().toArray().then((data)=>{
           // console.log(data);
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