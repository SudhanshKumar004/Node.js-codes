const express = require("express")
const app = express();
const hosRoute =require("./routes/hospitalRoute") 
const galleryRoute = require("./routes/galleryRoute")


app.use("/hospitals" , hosRoute)
app.use("/gallery" , galleryRoute)

app.listen(8080,()=>{
    console.log("Server running on 8080");
    
})