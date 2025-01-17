const fs = require("fs");

fs.unlink("ramu.pdf" ,(err)=>{
    if(err) throw err;
    console.log("File Deleted!!");
    
})