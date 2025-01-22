const express = require("express")
const route = express.Router();

route.get("/stugallery" , (req , res)=>{
    res.send("Gallary stugallery page");
})
route.get("/companyimages" , (req , res)=>{
    res.send("Gallary company images page");
})
route.get("/managerportfolio" , (req , res)=>{
    res.send("Gallary manger portfolio page");
})
route.get("/productimages" , (req , res)=>{
    res.send("Gallary product images page");
})


module.exports = route;