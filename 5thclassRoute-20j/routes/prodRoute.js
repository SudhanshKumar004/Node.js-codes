const express = require("express");
const route = express.Router();

route.get("/location", (req,res)=>{
    res.send("Product Location Page");
})
route.get("/sales", (req,res)=>{
    res.send("Product Sales Page");
})
route.get("/stock", (req,res)=>{
    res.send("Product Stock Page");
})
route.get("/price", (req,res)=>{
    res.send("Product Price Page");
})

module.exports = route