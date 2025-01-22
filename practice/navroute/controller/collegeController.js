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

module.exports = {
    homePage,
    aboutPage,
    coursePage,
    contactPage
}