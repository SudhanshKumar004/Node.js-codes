const express = require("express")
const route = express.Router();
const stuController = require("../controller/student")

route.get("/home" , stuController.home )
route.get("/about" , stuController.about )
route.get("/course" , stuController.course )

module.exports = route