const express = require("express");
const route = express.Router();

route.get("/home", (req,res)=>{
    res.send("Employee Home page");
})
route.get("/about", (req,res)=>{
    res.send("Employee About page");
})
route.get("/dept", (req,res)=>{
    res.send("Employee Dept page");
})
route.get("/salary", (req,res)=>{
    res.send("Employee Salary page");
})

module.exports = route;