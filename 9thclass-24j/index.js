const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const stuRoute = require("./routes/stuRoutes");
const mongoose = require("mongoose");


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


mongoose.connect("mongodb://127.0.0.1:27017/stuInfo")

app.set("view engine" , "ejs")

app.use("/students" , stuRoute)

app.listen(8080, ()=>{
    console.log("Server running on 8080 port");
    
})