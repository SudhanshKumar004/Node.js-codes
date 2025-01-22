const express = require("express")
const route = express.Router();
const stuCont = require("../controller/studentController")


route.get("/homepage", stuCont.homepage);
route.get("/aboutstu", stuCont.aboutstu);
route.get("/courses", stuCont.courses);
route.get("/ourfees", stuCont.ourfees);


module.exports=route