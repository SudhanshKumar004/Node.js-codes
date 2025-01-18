const express = require("express")
const app = express();
const port = 9000;

app.get("/student/home" , (req,res)=>{
    res.send("<h1> Welcome to student home page </h1>")
})

app.get("/student/about" , (req , res)=>{
    res.send("Welcome to student about page");
})

app.get("/student/fees" , (req,res)=>{
    res.send("Welcome to student fees page");
})

app.get("/teacher/home" , (req , res)=>{
    res.send("Welcome to teachers home page")
})

app.get("/teacher/about" , (req , res)=>{
    res.send("Welcome to teachers about page")
})

app.get("/teacher/dept" , (req , res)=>{
    res.send("Welcome to teachers department page")
})

app.listen(port, ()=>{
    console.log(`Server run on ${port}`);
    
})