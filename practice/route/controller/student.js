


const home = (req , res) =>{
    res.render("home")
}
const about = (req , res) =>{
    res.render("about")
}
const course = (req , res) =>{
    res.render("course")
}

module.exports = {
    home,
    about,
    course
}