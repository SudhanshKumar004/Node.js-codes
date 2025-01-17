const fs = require("fs");

// fs.open("ram.pdf" , "w" , (err,file)=>{
//     if(err)throw err;
//     console.log("File created!!");
    
// })

fs.unlink("ram.pdf", (err)=>{
    if(err) throw err;
    console.log("File Deleted!!");
    
})