const express = require("express")
const app = express();
const collegeRoute = require("./route/collegeRoute")

app.set("view engine" , "ejs")
app.use("/college", collegeRoute)

app.listen(8000, ()=>{
    console.log("Server running on 8000 port");  
})