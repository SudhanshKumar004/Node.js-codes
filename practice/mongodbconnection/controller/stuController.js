const stuModel = require("../model/stuModel")

const homePage = (req,res)=>{
    res.render("home")
}

const aboutPage = (req,res)=>{
    res.render("about")
}

const feesPage = (req,res)=>{
    res.render("fees")
}
const contactPage = (req,res)=>{
    res.render("contact")
}

const stuData = async(req,res)=>{
    const{name, city, number, age} = req.body;
    const data =await stuModel.create({
        name:name,
        city:city,
        number:number,
        age:age
    })
    res.render("contact")
}
module.exports={
    homePage,
    aboutPage,
    feesPage,
    contactPage,
    stuData
}