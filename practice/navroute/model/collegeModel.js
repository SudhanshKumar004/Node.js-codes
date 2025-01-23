const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:String,
    rollnum:String,
    city:String,
    fee:Number
})

module.exports=mongoose.model("stuData", contactSchema)
