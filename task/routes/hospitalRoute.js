const express = require("express")
const route = express.Router();

route.get("/home" , (req , res)=>{
    res.send("Hospital home page");
})
route.get("/patient" , (req , res)=>{
    res.send("Hospital patient page");
})
route.get("/admit" , (req , res)=>{
    res.send("Hospital admit page");
})
route.get("/save" , (req , res)=>{
    res.send("Hospital save page");
})

module.exports = route;