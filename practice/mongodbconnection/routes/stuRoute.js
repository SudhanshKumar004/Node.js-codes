const express = require("express")
const route = express.Router();
const stuController = require("../controller/stuController")


route.get("/home" , stuController.homePage)
route.get("/about" , stuController.aboutPage)
route.get("/fees" , stuController.feesPage)
route.get("/contact" , stuController.contactPage)
route.post("/save" , stuController.stuData)

module.exports=route;