const stuModel = require("../model/stuModel")

const homePage = (req,res) =>{
    res.render("home")
}
const displayPage = (req,res) =>{
    res.render("display")
}
const contactPage = (req,res) =>{
    res.render("contact")
}
const feesPage = (req,res) =>{
    res.render("fees")
}

const stuData =async (req,res)=>{
    const {rollno, name, city, fees} = req.body;
    const data =await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });
    res.render("contact")
}

const stuDisplay = async(req,res)=>{
    const getdata = await stuModel.find();
    res.render("display" , {myData:getdata})
}




module.exports = {
    homePage,
    displayPage,
    contactPage,
    feesPage,
    stuData,
    stuDisplay
}