const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:String,
    city:String,
    number:Number,
    age:String
})

module.exports = mongoose.model("Contact" , contactSchema)