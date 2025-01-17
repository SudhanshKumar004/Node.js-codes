const fs = require("fs");

// fs.appendFile("myfile.txt", "Welcome from my file" , (err)=>{
//     if(err) throw err;
//     console.log("File Created");
    
// }) 

fs.rename("myfile.txt", "rename.txt" ,(err)=>{
    if(err) throw err;
    console.log("FIle Renamed!");
    
} )