const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const stuRoute = require("./routes/stuRoute")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


app.use("/students" , stuRoute)
app.set('view engine' , "ejs")

mongoose.connect("mongodb://127.0.0.1:27017/studentData")



app.listen(8080, ()=>{
    console.log("Server running on 8080 port");
})