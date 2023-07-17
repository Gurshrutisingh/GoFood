const mongoose = require("mongoose");

const orderSchema= new mongoose.Schema({
    email:{
       type: String,
       required:true,
       unique:true
    },
    order_data:{
        type: Array,
        required:true
    },
})
const Order = mongoose.model('Order',orderSchema);

module.exports=Order;