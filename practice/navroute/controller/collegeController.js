const collegeModel = require("../model/collegeModel")

const homePage = (req , res) =>{
    res.render("home")
}

const aboutPage = (req , res) =>{
    res.render("about")
}

const coursePage = (req , res) =>{
    res.render("course")
}

const contactPage = (req , res) =>{
    res.render("contact")
}

const insertPage = (req, res)=>{
    res.render("insert")
}
const stuSave = async(req,res)=>{
    const{rollnum, name, city, fee} = req.body;
    const data = await collegeModel.create({
        rollnum:rollnum,
        name:name,
        city:city,
        fee:fee
    })
    res.render("insert")
}

module.exports = {
    homePage,
    aboutPage,
    coursePage,
    contactPage, 
    stuSave, 
    insertPage
}