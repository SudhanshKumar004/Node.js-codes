const homepage =(req , res) =>{
res.render("home")
}
const aboutstu =(req , res) =>{
res.render("about")
}
const courses =(req , res) =>{
res.render("courses")
}
const ourfees =(req , res) =>{
res.render("fees")
}

module.exports={
    homepage,
    aboutstu,
    courses,
    ourfees
}

