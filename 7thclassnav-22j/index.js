const express = require("express");
const app = express();
const mongoose = require("mongoose")
const collegeRoute = require("./routes/collegeRoutes")

mongoose.connect("")
app.set("view engine" , "ejs")
app.use("/college", collegeRoute)

app.listen(8000, ()=>{
    console.log("Server running on 8000");
})

