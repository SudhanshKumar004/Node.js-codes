const CollegeModel = require("../model/collegeModel");

const homePage = (req,res) =>{
    res.render("index")
}
const aboutPage = (req,res) =>{
    res.render("about")
}
const coursesPage = (req,res) =>{
    res.render("courses")
}
const facultyPage = (req,res) =>{
    res.render("faculty")
}
const contactPage = (req,res) =>{
    res.render("contact")
}

module.exports={
    homePage,
    aboutPage,
    contactPage,
    coursesPage,
    facultyPage
}