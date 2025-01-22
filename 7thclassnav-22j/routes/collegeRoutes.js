const express = require("express")
const route = express.Router();
const collegeCont = require("../controller/collegerController")

route.get("/home" , collegeCont.homePage)
route.get("/about" , collegeCont.aboutPage)
route.get("/courses" , collegeCont.coursesPage)
route.get("/faculty" , collegeCont.facultyPage)
route.get("/contact" , collegeCont.contactPage)

module.exports=route

 