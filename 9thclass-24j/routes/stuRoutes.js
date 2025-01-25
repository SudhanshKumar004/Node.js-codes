const express = require("express")
const route = express.Router();
const stuController = require("../controller/stucontroller")

route.get("/home" , stuController.homePage );
route.get("/display" , stuController.stuDisplay );
route.get("/contact" , stuController.contactPage );
route.get("/fees" , stuController.feesPage );
route.post("/save" , stuController.stuData)



module.exports = route