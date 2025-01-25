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
    const{rollno, name, city, fees} = req.body;
    const data =await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.render("contact")
}

const stuDisplay = async (req,res) =>{
    const getdata = await stuModel.find();
    res.render("About" , {myData:getdata});
}
module.exports={
    homePage,
    aboutPage, 
    feesPage,
    contactPage,
    stuData,
    stuDisplay
}