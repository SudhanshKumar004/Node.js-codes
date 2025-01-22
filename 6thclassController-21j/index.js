const express = require("express")
const app = express();
const stuRoute = require("./routes/studentRoute")
app.set("view engine", "ejs");
app.use("/students", stuRoute)

app.listen(8000, ()=>{
    console.log("Server running on 8000 Port");
    })