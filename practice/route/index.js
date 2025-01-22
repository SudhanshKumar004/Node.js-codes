const express = require("express")
const app = express();
const stuRoute = require("./routes/stuRoute")
app.set("view engine" , "ejs")

app.use("/students" , stuRoute)

app.listen(8000, ()=>{
    console.log("Server on 8000 Port");
    
})