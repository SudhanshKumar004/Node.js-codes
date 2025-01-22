const express = require("express")
const route = express.Router();
const collegeController = require("../controller/collegeController")

route.get("/home" , collegeController.homePage)
route.get("/about" , collegeController.aboutPage)
route.get("/course" , collegeController.coursePage)
route.get("/contact" , collegeController.contactPage)

module.exports = route;