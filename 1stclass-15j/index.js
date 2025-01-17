const express=require("express");
const app = express();

app.get("/",(res, req)=>{
res.send("<h1>This is my home page</h1>")
}
)
app.listen(8000, ()=>{
    console.log("server run ");
})